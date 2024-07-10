import './index.css';
import Button from '../../button';

function Section() {
    return (
        <div className="Section">
            <h4>Sign up for our newsletter</h4>
            <p>The latest deals and savings, sent to your inbox weekly.</p>
            <div className='flex'>
                <input className="inputbox" type="text" />
                <Button val="Sign up"></Button>
            </div>
        </div>
    )
}

export default Section;