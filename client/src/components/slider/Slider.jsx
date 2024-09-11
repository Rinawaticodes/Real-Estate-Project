import "./Slider.scss";
import PropTypes from "prop-types";

function Slider({ images }) {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
