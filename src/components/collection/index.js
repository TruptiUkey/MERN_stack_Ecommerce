import './index.css';
import Blocks from './blocks';

function Collection() {
    return (
      <div className="Collection">
         <div className="head">
            <h1>Shop by Collection</h1>
            <p>Each season, we collaborate with world-class designers
                 to create a collection inspired by the natural world.</p>
        </div>
        <div className='block-row'>
            <Blocks key='1' src="./../../../images/handcraft.avif"></Blocks>
            <Blocks key='2' src="./../../../images/handcraft.avif"></Blocks>
            <Blocks key='3' src="./../../../images/handcraft.avif"></Blocks>
        </div>
      </div>
    );
  }
  
  export default Collection;