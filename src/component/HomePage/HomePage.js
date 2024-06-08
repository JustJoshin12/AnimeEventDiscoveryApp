import image from "../../images/animeScene.jpg";
import { VanishText } from "../UI/VanishingText";
import Button from "../UI/Button";

function Home({redirectToLogin}) {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pt-20">
        <VanishText />
      </div>
      <Button redirectToLogin={redirectToLogin}/>
    </div>
  );
}

export default Home;
