import { Home, SignIn, SignUp } from "@/pages";

export const publicRoutes: {
  path: string;
  element: JSX.Element;
}[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export const authRoutes = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
