import './index.css';
import Menu from './menu';
import MenuMain from './menu2';

function Head2() {
    return (
        <div className="Head2">
            <div className="head2">
                <div className="logo">Logo</div>
                <div className="menu">
                    <MenuMain></MenuMain>
                </div>
                <div className="cart-menu">
                    <Menu></Menu>
                </div>
            </div>
      </div>
    );
  }
  
  export default Head2;