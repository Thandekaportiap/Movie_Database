import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://resizing.flixster.com/AsZpYve3PhHmXmwMVr_A-WjiPcs=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13259415_k_h9_ab.jpg',
    caption: 'Baby Driver'
  },
  {
    url: 'https://nerd-life.co.uk/wp-content/uploads/2022/01/army-of-the-thieves-zack-snyder.jpg',
    caption: 'Army of Thieves'
  },
  {
    url: 'https://lovemylibre.com/cdn/shop/articles/Purple_Hearts_Cover_Square_600x.jpg?v=1661525254',
    caption: 'Purple Hearts'
  },
  {
    url: 'https://target.scene7.com/is/image/Target/GUEST_318eeaf3-9c3c-4d12-9839-35433430ce6e',
    caption: 'Miraculous:Tales of Ladybug and Cat Noir'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container" >
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow