export type TypeOptionRoute = {
  headerShown: boolean;
  title?: string;
  headerStyle?: any;
  headerTintColor?: string;
  headerTitleStyle?: any;
  headerRight?: boolean;
};
export type TypeRouter = {
  name: string;
  component: () => JSX.Element;
  options: TypeOptionRoute;
  auth: boolean;
};
export type TypeRouterTabButton = {
  name: string;
  component: () => JSX.Element;
  icon: any;
  auth: boolean;
  badge: boolean;
};
