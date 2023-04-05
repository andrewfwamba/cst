import { Link, useRouteError } from "react-router-dom";
import "../App.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="p-4 text-gray-900 italic font-bold cursor-pointer rounded-md mt-8">
        <Link to="/">--{">"}Take me Home</Link>
      </div>
    </div>
  );
}
