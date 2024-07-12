import Bgimage from './bg';
import Bgcontent from './bg-content';
import './index.css';

function Blocks(props) {
  
    return (
      <div className="Blocks">
          <Bgimage idx={props.idx}></Bgimage>
          <Bgcontent head={props.head} para={props.para}></Bgcontent>
      </div>
    );
  }
  
  export default Blocks;