import React from "react"
import Slider from "react-slick"
import "./ImageAndTextSlider.css"
const ImageAndTextSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Если ширина экрана меньше 768px
        settings: {
          slidesToShow: 1, // Только 1 слайд на мобильных устройствах
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  }

  return (
    //
    <div className='new-slider-container'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='new-slide'>
            <div className='img-title'>
              <img src={slide.image} alt='' />
              <h3>{slide.title}</h3>
            </div>
            <div className='new-slide-text'>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <ul className='new-slider-dots'></ul>
    </div>
  )
}

export default ImageAndTextSlider
