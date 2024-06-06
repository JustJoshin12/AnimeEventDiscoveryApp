import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import DialogPopUp from "../UI/DialogPopUp";
import Error404Page from "../UI/404page";
import LoadingScreen from "../UI/LoadingScreen";
import Home from "../HomePage/HomePage";

function App() {
  const [page, setPage] = useState("Login");
  const [open, setOpen] = useState(false);

  const redirectToSignUp = () => {
    setPage("SignUp");
  };

  const redirectToLogin = () => {
    setPage("Login");
  };

  const redirectToHome = () => {
    setPage("Home")
  };

  const ShowLoading = () => {
    setPage("Loading");
    setTimeout(() => {
        redirectToHome();
    }, 8000);
};
  return (
    <div className="">
      {page === "Login" && <LoginPage redirectToSignUp={redirectToSignUp} loading={ShowLoading} />}
      {page === "Home" && <Home redirectToLogin={redirectToLogin}/>}
      {page === "ErrorPage" && <Error404Page/>}
      {page === "Loading" &&<LoadingScreen/>}
      {page === "SignUp" && <SignupPage redirectToLogin={redirectToLogin} open={open} setOpen={setOpen}/>}
      {open === true && <DialogPopUp open={open} setOpen={setOpen}/>}
    </div>
  );
}

export default App;
