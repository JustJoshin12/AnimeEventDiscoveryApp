import logo from "../../images/logo.png";
import mask from "../../images/mask.png";
import Button from "../UI/Button";
import facebookLogo from "../../images/facebookIcon.png";
import instagramLogo from "../../images/instagramIcon.png";
import twitterLogo from "../../images/twitterIcon.jpg";
import mitsuri from "../../images/mitsuriImage.png";

function SignupPage() {
  return (
    <div className="text-black-900 bg-black flex justify-center">
      <div className="p-10">
        <div className="">
          <div className="text-white flex items-center">
            <img src={logo} alt="website logo" className="w-28 h-28" />
            <div>
              <h2 className="text-2xl font-['Special_Elite']">Demon Slayer</h2>
              <p className="text-lg font-['Special_Elite']">kimetsu no yaiba</p>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <img src={mask} alt="mask" className="mx-auto" />
          <h3 className="text-white text-4xl font-['Poppins_Bold'] text-center">
            ようこそ !
          </h3>
          <p className="text-white text-xl py-3 text-center">Welcome Back!</p>
          <form className="flex flex-col gap-5">
            <label>
              <p className="text-white py-1">Email</p>
              <input
                type="email"
                required
                name="email"
                className="bg-gray-600 w-[340px] py-2 rounded"
              />
            </label>
            <label>
              <p className="text-white py-1">Password</p>
              <input
                type="password"
                required
                name="password"
                className="bg-gray-600 w-[340px] py-2 rounded"
              />
            </label>
            <button className="text-[#3E1149] bg-[#E487FB] w-[260px] p-5 rounded-xl text-xl font-['Poppins_Bold'] mx-auto">
              Login
            </button>
          </form>
          <div className="flex items-center justify-center">
            <div className="flex-1 h-[1px] bg-white mx-2"></div>
            <span className="text-white py-3">Don't have an account?</span>
            <div className="flex-1 h-[1px] bg-white mx-2"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-[#3E1149] bg-[#E487FB] w-[260px] p-5 rounded-xl text-xl font-['Poppins_Bold']">
            Sign Up
          </button>
        </div>
        <div className="flex items-center gap-12 pt-8">
          <a href="https://www.facebook.com">
            <img src={facebookLogo} className="w-16" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagramLogo} className="w-16" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitterLogo} className="w-16" />
          </a>
        </div>
      </div>
      <div className="bg-[#3E1149]">
        <div>
          <img className="w-[670px]" src={mitsuri} />

          <h2 className="text-white text-5xl font-bold">Mitsuri K.</h2>
          <p className="text-white text-xl pl-5">
            "My heart would never flutter for those who needlessly hurt others!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
