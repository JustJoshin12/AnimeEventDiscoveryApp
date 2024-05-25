import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundChanger from "../UI/BackgroundChanger";
import websiteLogo from "../../images/websiteLogo.png";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { signin } from "../../utils/auth";
import DialogPopUp from "../UI/DialogPopUp";

const handleRegistration = ({ email, password }) => {
  signin({
    email,
    password,
  })
    .then((res) => {
      console.log(res);
      loading();
    })
    .catch((err) => {
      console.error(err);
      setErrorMessage("Failed to login. Incorrect email or password");
      setIsError(true);
      setOpen(true);
    });
};

function LoginPage({ redirectToSignUp, loading }) {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    handleRegistration({
      email: values.email,
      password: values.password,
    });
  };


  return (
    <>
      <BackgroundChanger>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-black/50 rounded-badge p-8 sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <img
              className="mx-auto h-30 w-auto"
              src={websiteLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-black/50 rounded-badge p-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block  font-medium leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={values.email || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block  font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 duration-150 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    minLength="5"
                    maxLength="12"
                    autoComplete="current-password"
                    required
                    value={values.password || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={false}
                  className="flex w-full justify-center rounded-md duration-200 bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{" "}
              <button
                type="button"
                onClick={() => {
                  redirectToSignUp();
                }}
                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              >
                Register
              </button>
            </p>
          </motion.div>
        </div>
        <DialogPopUp
          open={open}
          setOpen={setOpen}
          onClick={() => {
            setOpen(false);
          }}
          title={isError ? "Login Failed" : "Registration Successful"}
          description={
            isError
              ? errorMessage
              : "You have successfully registered. Welcome aboard!"
          }
          buttonText={isError ? "Try Again" : "Login"}
          isError={isError}
        />
      </BackgroundChanger>
    </>
  );
}

export default LoginPage;
