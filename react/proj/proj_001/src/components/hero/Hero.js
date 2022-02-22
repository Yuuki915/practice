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
      <h1 className="siteTitle">
        <span>Yuuki Hori</span>
      </h1>
    </div>
  );
};

export default Hero;
