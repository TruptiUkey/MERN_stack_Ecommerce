import './index.css';

import image1 from './../../../images/indian-pakistani-printed-lawn-frock.avif';
import image2 from './../../../images/young-woman-standing-fashionable.avif';
import image3 from './../../../images/hanging-beautiful-indian-dresses-different-colors-decoration.avif';
import image4 from './../../../images/handcraft.avif';
import image5 from './../../../images/image3.avif';


const images = [image1,image2,image3,image4,image5];

function Container(props) {

    const getImage = (i) => {
      return images[i];
    };

    return (
      <div className="block" style={{
        backgroundImage:`url(${getImage(props.idx)})`,
        backgroundRepeat:"no-repeat"
      }}>
        
          <h3>{props.title}</h3>
      </div>
    );
  }
  
  export default Container;