import React,{useState} from "react";


const RoomSection = ({ number, title, description, details, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return(
    <section className="room-row">
        <div className="room-info">
            <span className="room-number">{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="room-details">
                {details.map((details, index) =>(
                    <li key={index}>
                        <strong>{details.label}</strong>{details.value}
                    </li>
                ))}    
            </ul>
        </div>

        <div className="room-visual">
            <div className="slider-wrapper">
                <img 
                src={images[currentIndex]}
                alt={title}
                className="activ-slide"
                style={{display: 'block'}}
                />
                <div className="slider-nav">
                  <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
                  <button className="next-btn" onClick={nextSlide}>&#10095;</button>  
                </div>
            </div>
            <div className="room-border"></div>
        </div>
    </section>
  );
};

export default RoomSection;
