import './index.css';

function Button(props) {
    return (
      <div className='button'>
        <button>{props.val}</button>
      </div>
    );
  }
  
  export default Button;