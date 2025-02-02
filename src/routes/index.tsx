import { Home } from "@/pages";

export const publicRoutes: {
  path: string;
  element: JSX.Element;
}[] = [
  {
    path: "/",
    element: <Home />,
  },
];
