import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const SignIn = lazy(() => import("./singIn/SingIn"));
const SignUp = lazy(() => import("./singUp/SignUp"));

export { Home, SignIn, SignUp };
