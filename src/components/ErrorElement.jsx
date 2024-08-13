import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h1 className="text-3xl font-bold">there was an error...</h1>;
};

export default ErrorElement;
