import './index.css';
import HeroContent from './heroContent';

function Hero() {
    return (
      <div className="Hero">
         <HeroContent  key='1'  head='New arrivals are here' para="The new arrivals have, 
         well, newly arrived. Check out the latest options from our summer 
         small-batch release while they're still in stock." ></HeroContent>
      </div>
    );
  }
  
  export default Hero;