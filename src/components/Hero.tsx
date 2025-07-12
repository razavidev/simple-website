import { useEffect } from "react";
import AccentBtn from "./widgets/AccentBtn";
import smileImg from "../assets/smile.png";

const Hero = () => {
  return (
    <section className="wrapper hero">
      <div className="hero container">
        {/* <div className="left">
          <h4 className="hello">Hello World!,</h4>
          <h3 className="name">I'm Mortaza Razavi</h3>
          <h4 className="job">
            I'm a Full Stack Software Engineer With +3 Years of Experience
          </h4>

          <h5 className="tempter">
            <br />
            Have a tech related project ?
            <p>
              Lets{" "}
              <a href="mailto:m.razavi.dev@gmail.com">
                <AccentBtn value="Discuss" />
              </a>{" "}
              It.
            </p>
          </h5>

          <div className="links">
            <AccentBtn value="Download Resume" />
            <a href="#" className="icon-btn">
              G
            </a>
            <a href="#" className="icon-btn">
              L
            </a>
            <a href="#" className="icon-btn">
              T
            </a>
            <a href="#" className="icon-btn">
              T
            </a>
          </div>
        </div> */}

        <div className="left">
          <h2>Hello World!</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ex consectetur dolor ullam eveniet eaque odit rem optio praesentium molestiae labore libero dolores vel reiciendis alias, aliquam qui quod excepturi?</h6>
          <h6>Lorem ipsum dolor sit amet <AccentBtn value="Click"/> consectetur elit.</h6>
        </div>

        <img src={smileImg.src} className="img" alt="pixel smile" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
          viewBox="24 105 156 95"
        >
          <rect x="0" y="0" width="300" height="300" fill="#E22227" />
          <path
            className="top-outer"
            fill="#EF8716"
            stroke="#371300"
            strokeWidth="1"
            d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z"
          />
          <path
            className="top-inner"
            fill="#537571"
            stroke="#DCB467"
            strokeWidth="1"
            d="M69 22c33,-7 52,21 54,37 3,26 -1,28 -8,40 -15,25 -48,25 -85,-14 -19,-20 -4,-53 39,-63z"
          />
          <path
            className="bottom-outer"
            fill="#DCB467"
            stroke="#371300"
            strokeWidth="1"
            d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z"
          />
          <path
            className="bottom-inner"
            fill="#263D56"
            stroke="#537571"
            strokeWidth="1"
            d="M136 180c32,-9 45,13 46,29 3,27 8,29 0,42 -14,25 -52,24 -79,0 -21,-18 -2,-61 33,-71z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
