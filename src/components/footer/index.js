import './index.css';
import Section from './section';

function Footer() {
    return (
        <div className="Footer">
            <div className='tbl'>
                <table>
                    <th>Products</th>
                    <th>Customer Service</th>
                    <th>Company</th>
                    <th>Legal</th>
                    <tr>
                        <td>Bags</td>
                        <td>Contact</td>
                        <td>Who we are</td>
                        <td>Terms of service</td>
                    </tr>
                    <tr>
                        <td>Tees</td>
                        <td>Shipping</td>
                        <td>Sustainability</td>
                        <td>Return Policy</td>
                    </tr>
                    <tr>
                        <td>Objects</td>
                        <td>Returns</td>
                        <td>Press</td>
                        <td>Privacy Policy</td>
                    </tr>
                    <tr>
                        <td>Home Goods</td>
                        <td>Warrenty</td>
                        <td>Careers</td>
                        <td>Shipping Policy</td>
                    </tr>
                    <tr>
                        <td>Accessories</td>
                        <td>Secure Payments</td>
                        <td>Terms and Conditions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>FAQ</td>
                        <td>Privacy</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Find a store</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <br/><br/>
            <Section></Section>
            <hr/>
            <div className='rights'>Copyright © 2021 Trupti Ukey, Inc.</div>
      </div>
    );
  }
  
  export default Footer;