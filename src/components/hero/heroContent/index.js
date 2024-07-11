import Button from "../../button";

function HeroContent(props) {
    return (
         <div className="hero-content">
            <h1>{props.head}</h1>
            <p>{props.para}</p>
            <Button val="New Arrivals"></Button>
        </div>
    );
  }
  
  export default HeroContent;