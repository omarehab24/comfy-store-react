import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page Not Found!</h1>
          <p className="mt-6 text-lg leading-7">
            The page you are looking for does not exist.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/" className="btn btn-secondary btn-outline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-3xl">There was an error!</h4>
    </main>
  );
};

export default Error;