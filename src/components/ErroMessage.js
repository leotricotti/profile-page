import logo from "../assets/img/icons/error.webp";

function ErrorMessage() {
  return (
    <main>
      <img src={logo} alt="Error icon" />
      <h1>Something went wrong!</h1>
      <p>Please try again later.</p>
    </main>
  );
}

export default ErrorMessage;
