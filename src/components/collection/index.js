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
            <Blocks key='1' idx='2' head="Handcrafted Collection" para="Keep your phone keys and wallet together, so you can lose everything at once."></Blocks>
            <Blocks key='2' idx='1' head="Organized Desk Collection" para="The Rest of the house will still be a mess, but your desk will look great."></Blocks>
            <Blocks key='3' idx='0' head="Focus Collection" para="Be more productive than enterprise product managers with a single piece of paper."></Blocks>
        </div>
      </div>
    );
  }
  
  export default Collection;