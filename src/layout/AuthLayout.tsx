import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main>
        <div className="bg-[url('/bg.jpg')] relative bg-cover bg-bottom h-screen flex items-center justify-center">
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#000000B2]"></div>
          <ErrorBoundary fallback={<p>Error...</p>}>
            <Suspense fallback={<p>Loading</p>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
