import './index.css';
import Button from '../button';

function Productivity() {
    return (
      <div className="Workspace bgImg">
        <div className="content">
            <h1>Simple productivity</h1>
            <p>Endless tasks, limited hours, a single piece of paper. 
              Not really a haiku, but we're doing our best here. No kanban boards, burndown charts,
               or tangled flowcharts with our Focus system. 
              Just the undeniable urge to fill empty circles.
            </p>
            <Button val="Shop Focus"></Button>
        </div>
      </div>
    );
  }
  
  export default Productivity;