import Bgimage from './bg';
import Bgcontent from './bg-content';
import './index.css';

function Blocks(props) {
  const source = ['./../../../images/handcraft.avif','./../../../images/young-woman-standing-fashionable.avif','./../../../images/indian-pakistani-printed-lawn-frock.avif'];
    return (
      <div className="Blocks">
          <Bgimage idx='1'></Bgimage>
          <Bgcontent head={props.head} para={props.para}></Bgcontent>
      </div>
    );
  }
  
  export default Blocks;