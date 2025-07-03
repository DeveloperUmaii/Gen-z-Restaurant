import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bannerSliderImg1 from '../assets/home/01.jpg';
import bannerSliderImg2 from '../assets/home/02.jpg';
import bannerSliderImg3 from '../assets/home/03.png';
import bannerSliderImg4 from '../assets/home/04.jpg';
import bannerSliderImg5 from '../assets/home/05.png';
import bannerSliderImg6 from '../assets/home/06.png';


const BannerSlide = () => {

    return (
        <div>
            <AwesomeSlider className='h-80'>
                <div ><img src={bannerSliderImg1} alt="Slide 1" /></div>
                <div ><img src={bannerSliderImg2} alt="Slide 2" /></div>
                <div ><img src={bannerSliderImg3} alt="Slide 3" /></div>
                <div ><img src={bannerSliderImg4} alt="Slide 4" /></div>
                <div ><img src={bannerSliderImg5} alt="Slide 5" /></div>
                <div ><img src={bannerSliderImg6} alt="Slide 6" /></div>
            </AwesomeSlider>
        </div>
    );
};

export default BannerSlide;
