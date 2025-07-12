import AccentBtn from "./AccentBtn"

interface CardParams {
    imgSrc: string
    title: string
    disc: string
}

const Card = ({title, disc, imgSrc}: CardParams) => {
  
  return (
    <article className="card">
      <img src={imgSrc} alt="some img" />
      <p className="title">{title}</p>
      <p className="disc">{disc}</p>
      <AccentBtn value="Click" />
    </article>
  );
};

export default Card;
