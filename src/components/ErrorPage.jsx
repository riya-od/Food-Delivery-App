import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooops!!! Something went wrong!</h1>
      <h2>{error.status}</h2>
    </div>
  );
};
export default ErrorPage;
