import Bgimage from './bg';
import Bgcontent from './bg-content';
import './index.css';

function Blocks() {
  const source = ['./../../../images/handcraft.avif','./../../../images/young-woman-standing-fashionable.avif','./../../../images/indian-pakistani-printed-lawn-frock.avif'];
    return (
      <div className="Blocks">
          <Bgimage ></Bgimage>
            <Bgcontent></Bgcontent>
      </div>
    );
  }
  
  export default Blocks;