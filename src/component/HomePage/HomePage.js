import image from "../../images/animeScene.jpg";
import { VanishText } from "../UI/VanishingText";
import Button from "../UI/Button";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pt-20">
        <VanishText />
      </div>
      <Button >Back to Login</Button>
    </div>
  );
}

export default Home;
