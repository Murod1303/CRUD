import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <Suspense fallback={<p>Loading</p>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default AppLayout;
