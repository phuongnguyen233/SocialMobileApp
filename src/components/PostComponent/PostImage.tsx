import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Carousel, Spacings } from "react-native-ui-lib";
import React from "react";

export default function PostImage({ urlImagePost }: { urlImagePost: Array<string> }) {
    const [currentPage, setCurrentPage] = React.useState(0);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Carousel
            style={{ marginTop: 7 }}
            onChangePage={handlePageChange}
            itemSpacings={Spacings.s3}
            horizontal={true}
            initialPage={0}
            showCounter={true}
            pageControlPosition={Carousel.pageControlPositions.UNDER}
            allowAccessibleLayout={true}>
            {urlImagePost.map((url, index) => {
                return (
                    <TouchableWithoutFeedback >
                        <Image
                            key={index}
                            source={{ uri: url }}
                            style={{ width: "100%", height: 500, resizeMode: "cover" }}
                        />
                    </TouchableWithoutFeedback >
                )
            })}
        </Carousel>
    )
}
