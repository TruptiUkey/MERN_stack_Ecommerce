import image1 from './../../../../images/image1.avif';
import image2 from './../../../../images/image2.avif';
import image3 from './../../../../images/image3.avif';


const images = [image1,image2,image3];

function Bgimage(props) {
    const getImage = (i) => {
      return images[i];
    };
  
    return (
         <div className='box' style={{
          backgroundImage:`url(${getImage(props.idx)})`,
          backgroundRepeat:"no-repeat"
        }}></div>
    );
  }
  
  export default Bgimage;