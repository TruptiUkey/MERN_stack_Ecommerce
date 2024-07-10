import Container from './container';
import './index.css';

function Category() {
    // const img = ['./images/hanging-beautiful-indian-dresses-different-colors-decoration',
    //   './images/fashionable-clothing','./images/indian-pakistani-printed-lawn-frock', 
    //   './images/model-career-kit-still-life','row-colorful-clothes-sale-boutique',
    //   'young-woman-standing-fashionable'
    // ];

    return (
      <div className="Category">
        <div className="header">
            <h1>Shop by Category</h1>
            <p>Browse all categories</p>
        </div>

        <div className='blocks'>
            <Container/>
            <Container/>
            <Container/>
            <Container/>
            <Container/>
            <Container/>
        </div>
      </div>
    );
  }
  
  export default Category;