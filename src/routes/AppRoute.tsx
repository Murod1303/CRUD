import { Route, RouteProps, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "@/routes";
import AppLayout from "@/layout/AppLayout";
import AuthLayout from "@/layout/AuthLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {publicRoutes.map(({ path, element: Component }: RouteProps) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
      <Route element={<AuthLayout />}>
        {authRoutes.map(({ path, element: Component }: RouteProps) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoute;
