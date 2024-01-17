import { firebase } from "./../../firebaseConfig";

type UploadFileResponse = {
    fileName: (string | undefined)[];
    fileUrl: string[];
    path: string;
};

const uploadFile = async (param: UploadFileResponse) => {
    if (!param.fileUrl || !param.fileName || param.fileName.length === 0) {
        console.error('Invalid file data');
        return;
    }

    try {
        const downloadUrls: string[] = [];

        for (let i = 0; i < param.fileName.length; i++) {
            const fileName = param.fileName[i];
            const fileUrl = param.fileUrl[i];

            if (!fileName) {
                console.error('Undefined file name detected, skipping upload.');
                continue;
            }

            const blob: Blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = "blob";
                xhr.open("GET", fileUrl, true);
                xhr.send(null);
            });
            
            const ref = firebase.storage().ref(param.path).child(fileName);
            await ref.put(blob);

            const url = await ref.getDownloadURL();
            downloadUrls.push(url);
        }

        return downloadUrls;
    } catch (error) {
        console.error("Error upload file: ", error);
        throw error;
    }
}

const FirebaseUtils = {
    uploadFile,
};

export default FirebaseUtils;