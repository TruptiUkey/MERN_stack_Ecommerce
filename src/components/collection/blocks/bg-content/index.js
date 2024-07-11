import './index.css';

function Bgcontent(props) {
      return (
        <div className="footer">
            <h3>{props.head}</h3>
            <p>{props.para}.</p>
        </div>
      );
    }
    
    export default Bgcontent;