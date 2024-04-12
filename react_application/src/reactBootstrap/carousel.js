import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide8.jpg"
          alt="First slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide1.jpg"
          alt="Second slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide10.jpg"
          alt="Third slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide9.jpg"
          alt="Fourth slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide12.jpg"
          alt="Fifth slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide7.jpg"
          alt="Sixth slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide11.jpg"
          alt="seventh slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://packurbags.co.in/resource/Image/slide4.jpg"
          alt="eigth slide"
          style={{ height: '500px' }}
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default DarkVariantExample;