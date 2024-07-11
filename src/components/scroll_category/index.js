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
            <Container title="New Arrivals"/>
            <Container title="Productivity"/>
            <Container title="Workspace"/>
            <Container title="Accessories"/>
            <Container title="Sale"/>
        </div>
      </div>
    );
  }
  
  export default Category;
