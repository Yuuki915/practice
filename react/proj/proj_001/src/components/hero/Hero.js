import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div
        className="bgimg-container"
        style={{
          transform: `scale(${1 + props.scalePer})`,
        }}
      ></div>
      <div className="bg-dark">
        <h1 className="siteTitle">
          <p className="hero-name">Yuuki Hori</p>
          <p className="hero-sub">Front-end Developer</p>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
