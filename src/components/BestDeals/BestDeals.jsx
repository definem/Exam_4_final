import WihtRight from '../../assets/icons/white_right.svg'
import hori from '../../assets/images/Horizontal.png'
import Carousel from 'react-material-ui-carousel';
// style 
import './style.scss'

function BestDeals() {
  const images = [
    { src: hori },
    { src: hori },
    { src: hori }
  ]
  return (
    <div className='heroMain'>
      <Carousel>
        {images.map((image, index) => (
          <div className='heroMain__top top' style={{ backgroundImage: "url(" + image.src + ")" }}>
            <div className="top__inner" key={index}>
              <h4 className="top__title">40% OFF</h4>
              <p className='top__text'>Best deals this week. Fresh flowers, plants and gifts</p>
              <button className='top__btn'>View now <img src={WihtRight} alt="right arrow icon" /> </button>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <div className='heroMain__inner'>
        <div className="heroMain__left">
          <h4 className="heroMain__title-left">Nice little gifts</h4>
          <p className="heroMain__text-left">for loved ones</p>
          <button className='heroMain__btn'>View now <img src={Right} alt="" /> </button>
        </div>
        <div className="heroMain__right">
          <h4 className="heroMain__title-left">Plants</h4>
          <p className="heroMain__text-left">for home comfort</p>
          <button className='heroMain__btn'>View now <img src={Right} alt="" /> </button>
        </div>
      </div> */}
    </div>
  );
}

export default BestDeals