import FloatingCharAnim from "./widgets/FloatingCharAnim";
import AccentBtn from "./widgets/AccentBtn";
import mockCards from "../mock/cards"
import Card from "./widgets/Card";

const Main = () => {
  return (
    <main>
      <section className="cards container">
        <FloatingCharAnim classes="h2" value="Heading 1" />

        {/* <!-- put some card animation on this and upload different sizes of image for img --> */}

        {/* <div className="skill">
          <img
            // src="./assets/.png"
            alt="Hire Me Job Board Website By Razavidev"
          />
          <h4 className="disc">Optimized, Secure and Interactive Web Apps </h4>
          <p>github icon, visit icon (eye)</p>
        </div> */}

        {mockCards.map((cardData: any) => (<Card key={cardData.id} title={cardData.title} disc={cardData.disc} imgSrc={cardData.imgSrc}/>))}
      </section>
    </main>
  );
};

export default Main;
