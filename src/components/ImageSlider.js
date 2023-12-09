import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ImageSlider.css"

// const ImageSlider = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null)

//   const handleImageClick = (index) => {
//     setSelectedImage(index)
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   }

//   return (
//     <div className='slider-container'>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className='slide'
//             onClick={() => handleImageClick(index)}
//           >
//             <img src={image} alt='' />
//           </div>
//         ))}
//       </Slider>

//       {selectedImage !== null && (
//         <EnlargedImage
//           imageUrl={images[selectedImage]}
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </div>
//   )
// }

// const EnlargedImage = ({ imageUrl, onClose }) => (
//   <div className='enlarged-image' onClick={onClose}>
//     <img src={imageUrl} alt='' />
//   </div>
// )

// export default ImageSlider
const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='slide'>
            <img src={image} alt='' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
