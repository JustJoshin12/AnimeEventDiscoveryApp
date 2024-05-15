import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import Modal from "../UI/modal";

function App() {
  const [page, setPage] = useState("Login");
  const [open, setOpen] = useState(true);

  const redirectToSignUp = () => {
    setPage("SignUp");
  };

  const redirectToLogin = () => {
    setPage("Login");
  };

  return (
    <div className="">
      {page === "Login" && <LoginPage redirectToSignUp={redirectToSignUp} open={open} setOpen={setOpen} />}
      {page === "SignUp" && <SignupPage redirectToLogin={redirectToLogin} open={open} setOpen={setOpen}/>}
      {open === true && <Modal open={open} setOpen={setOpen}/>}
    </div>
  );
}

export default App;
