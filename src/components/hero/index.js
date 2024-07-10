import './index.css';
import Button from '../button';

function Hero() {
    return (
      <div className="Hero">
         <div className="hero-content">
            <h1>New arrivals are here</h1>
            <p>The new arrivals have, well, newly arrived. 
                Check out the latest options from our summer small-batch 
                release while they're still in stock.
            </p>
            <Button val="Shop New Arrivals"></Button>
        </div>
      </div>
    );
  }
  
  export default Hero;