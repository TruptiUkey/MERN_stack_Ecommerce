import './index.css';

function Header() {
    return (
        <div className="Header">
            <div className="head1">
                <p>Create an account</p>
                <p>|</p>
                <p>Sign in</p>
            </div>
            <div className="head2">
                <div className="logo">Logo</div>
                <div className="menu">
                    <ul className="list">
                        <li className="list_item">Women</li>
                        <li className="list_item">Men</li>
                        <li className="list_item">Company</li>
                        <li className="list_item">Stores</li>
                    </ul>
                </div>
                <div className="cart-menu">
                    <ul className="list">
                        <li className="list_item">Search</li>
                        <li className="list_item">Help</li>
                        <li className="list_item">Cart 0</li>
                    </ul>
                </div>
            </div>
      </div>
    );
  }
  
  export default Header;