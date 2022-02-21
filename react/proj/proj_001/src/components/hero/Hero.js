import heroImg from "../imgs/hero.jpg";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      className="hero"
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "40% 50%",
          transform: `scale(${1 + props.scalePer})`,
        }}
      ></div>
      <h1 className="siteTitle">
        <span>Yuuki Hori</span>
      </h1>
    </div>
  );
};

export default Hero;
