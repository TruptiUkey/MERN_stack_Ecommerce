import './index.css';

function Container(props) {
    return (
      <div className="block" style={{
        backgroundImage:`url(${require('./../../../images/indian-pakistani-printed-lawn-frock.avif')})`
      }}>
        
          <h3>{props.title}</h3>
      </div>
    );
  }
  
  export default Container;