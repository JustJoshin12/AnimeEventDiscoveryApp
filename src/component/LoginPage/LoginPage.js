import { useState } from "react";
import BackgroundChanger from "../UI/BackgroundChanger";
import websiteLogo from "../../images/websiteLogo.png";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { signin } from "../../utils/auth";
import Modal from "../UI/modal";

const handleRegistration = ({ email, password }) => {
  signin({
    email,
    password,
  })
    .then((res) => {
      
    })
    .catch((err) => {
      console.error(err);
    });
};

function LoginPage({ redirectToSignUp }) {
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
        <div className="bg-black/50 rounded-badge p-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src={websiteLogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="bg-black/50 rounded-badge p-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
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
                {errors.password && (
                  <span className="text-red-500 bg-white">
                    {errors.password}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
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
        </div>
      </BackgroundChanger>
    </>
  );
}

export default LoginPage;
