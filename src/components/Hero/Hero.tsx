import HeroStyled from "./HeroStyled";

const Hero = () => {
  return (
    <HeroStyled className="section">
      <img
        className="hero__image"
        src="./hero1.png"
        alt="campervan-on-the-road"
        width="100%"
        height="auto"
      />
      <div className="hero__content-wrapper">
        <span className="hero__description">
          In <span className="hero__main-title">VLeave</span> you will be able
          to design your camper-van indoors, compare distributions, prices and
          finally buy the moving-house of your dreams!
        </span>
        <button className="page__action">Action</button>
      </div>
    </HeroStyled>
  );
};

export default Hero;
