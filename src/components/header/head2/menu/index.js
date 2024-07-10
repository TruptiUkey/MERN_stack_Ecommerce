import './index.css';
import MenuItem from './menuList1';

function Menu() {
    return (
        <div className="menu">
            <ul className="list">
                <MenuItem item="Search"></MenuItem>
                <MenuItem item="Help"></MenuItem>
                <MenuItem item="Cart 0"></MenuItem>
            </ul>
        </div>
    );
  }
  
  export default Menu;