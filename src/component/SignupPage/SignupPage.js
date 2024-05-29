import { useEffect, useState } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { register } from "../../utils/auth";
import { motion } from "framer-motion";
import image from "../../images/scene.gif";
import avatarIconList from "../../utils/avatarList";
import DialogPopUp from "../UI/DialogPopUp";

const SignupPage = ({ redirectToLogin }) => {
  const createTime = new Date();
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatarIconList[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { values, handleChange, resetForm, isValid, errors } =
    useFormAndValidation();

  const handleRegistration = ({
    firstName,
    lastName,
    userName,
    password,
    email,
    avatar,
    dob,
    createTime,
  }) => {
    register({
      firstName,
      lastName,
      userName,
      password,
      email,
      avatar,
      dob,
      createTime,
    })
      .then((res) => {
        console.log(res);
        setIsError(false);
        setOpen(true);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Failed to register. Duplicate email");
        setIsError(false);
        setOpen(true);
      });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    handleRegistration({
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      password: values.password,
      email: values.email,
      avatar: selectedAvatar.name,
      dob: values.dob,
      createTime: createTime,
    });
    resetForm();
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="font-black w-full max-w-4xl backdrop-opacity-10 backdrop-invert bg-white/30 p-5 m-5 rounded-lg shadow-lg md:p-10"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-3 md:space-y-6 text-sm md:text-lg font-black text-black"
          >
            <h3 className="text-center text-lg md:text-2xl uppercase font-bold tracking-wider">
              Registration
            </h3>
            <div className="flex gap-5 ">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  minLength="3"
                  maxLength="8"
                  required
                  value={values.firstName || ""}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-full"
                />
               
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  minLength="3"
                  maxLength="8"
                  required
                  name="lastName"
                  value={values.lastName || ""}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-full"
                />
               
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1">
                <label htmlFor="userName" className="block mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  minLength="4"
                  maxLength="15"
                  required
                  value={values.userName || ""}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-full"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={values.email || ""}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="pb-2">Avatar</p>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center bg-white border border-gray-300 rounded-full py-2 px-4 w-full text-left"
                >
                  <img
                    src={selectedAvatar.imageUrl || ""}
                    alt="Selected Avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{selectedAvatar.name}</span>
                  <svg
                    className="ml-auto h-5 w-5 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20">
                    <ul className="max-h-60 overflow-auto">
                      {avatarIconList.map((avatar) => (
                        <li
                          key={avatar.id}
                          className="flex items-center py-2 px-4 duration-150 hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleSelectAvatar(avatar)}
                        >
                          <img
                            src={avatar.imageUrl}
                            alt={avatar.name}
                            className="w-12 h-12 rounded-full mr-2"
                          />
                          <span>{avatar.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="dob" className="block mb-2">
                Date of birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={values.dob || ""}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 border rounded-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
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
                className="form-input w-full px-4 py-2 border rounded-full"
              />
            </div>

            <div className="flex items-center gap-5">
              <p className="text-sm lg:text-lg pr-3">Have an account?</p>
              <button
                onClick={() => {
                  redirectToLogin();
                }}
                className="rounded-md duration-200 bg-red-700 px-2 py-1 md:px-2.5 md:py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
            <button
              type="submit"
              className="text-xs mx-auto block bg-red-700 hover:bg-red-800 focus:bg-red-800 text-white uppercase px-6 py-2 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-sm"
            >
              Register Now
            </button>
          </form>
        </motion.div>
      </div>
      <DialogPopUp
        open={open}
        setOpen={setOpen}
        onClick={() => {
          setOpen(false);
          if (isError) {
            setOpen(false);
            return;
          }
          redirectToLogin();
        }}
        title={isError ? "Registration Failed" : "Registration Successful"}
        description={
          isError
            ? errorMessage
            : "You have successfully registered. Welcome aboard!"
        }
        buttonText={isError ? "Try Again" : "Login"}
        isError={isError}
      />
    </>
  );
};

export default SignupPage;
