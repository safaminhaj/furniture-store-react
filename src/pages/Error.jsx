import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center ">
        <div className="text-center">
          <h1 className="text-9xl font-semibold text-primary">404 </h1>
          <h3 className="mt-4 font-bold text-4xl tracking-tight sm:text-5xl">
            page not found
          </h3>
          <p className="mt-6 text-lg leading-7">
            Sorry, we could'nt find the page you are looking for{" "}
          </p>
          <div className="mt-10">
            <Link to="/">
              <button className="btn btn-secondary ">GO BACK HOME</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};

export default Error;
