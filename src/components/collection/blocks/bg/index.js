import image1 from './../../../../images/handcraft.avif';
import image2 from './../../../../images/young-woman-standing-fashionable.avif';
import image3 from './../../../../images/indian-pakistani-printed-lawn-frock.avif';

const images = [image1,image2,image3];

function Bgimage(props) {
    const getImage = (props) => {
      return images[0];
    };
  
    return (
         <div className='box' style={{
          backgroundImage:`url(${getImage()})`,
          backgroundRepeat:"no-repeat"
        }}></div>
    );
  }
  
  export default Bgimage;