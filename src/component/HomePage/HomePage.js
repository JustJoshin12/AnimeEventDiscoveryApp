import image from "../../images/animeScene.jpg";
import { VanishText } from "../UI/VanishingText";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pt-20">
        <VanishText />
      </div>
      <button>Back to Login</button>
    </div>
  );
}

export default Home;
