import meter1 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/1-square-fill.svg";
import meter2 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/2-square-fill.svg";
import meter3 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/3-square-fill.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/4-square-fill.svg";
import arrow2 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/5-square-fill.svg";
import colorSharp from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/banner-bg.png";

export const Features = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Features</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Podcasts</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Self Care</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Diary writing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Planning</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}