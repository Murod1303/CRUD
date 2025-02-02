import { Route, RouteProps, Routes } from "react-router-dom";
import { publicRoutes } from "@/routes";
import AppLayout from "@/layout/AppLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {publicRoutes.map(({ path, element: Component }: RouteProps) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoute;
