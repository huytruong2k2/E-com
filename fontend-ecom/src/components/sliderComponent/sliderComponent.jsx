import React from 'react'
import Slider from 'react-slick';
import image1 from '../../assets/images/img_1.jpg';
import image2 from '../../assets/images/img_2.png';


const SliderComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <Slider {...settings}>
         <img src={image1} alt='Image 1' preview={false} width="100%" height="274px"></img>
         <img src={image2} alt='Image 2'  width="100%" height="274px"></img>
    </Slider>
  )
}

export default SliderComponent