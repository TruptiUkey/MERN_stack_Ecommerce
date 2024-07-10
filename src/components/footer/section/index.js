import './index.css';

function Section() {
    return (
        <div className="Section">
            <h4>Sign up for our newsletter</h4>
            <p>The latest deals and savings, sent to your inbox weekly.</p>
            <div className='flex'>
                <input className="inputbox" type="text" />
                <input className="btn" type='submit' value='Sign up'/>
            </div>
        </div>
    )
}

export default Section;