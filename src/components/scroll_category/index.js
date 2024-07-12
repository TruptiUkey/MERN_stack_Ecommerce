import Container from './container';
import './index.css';

function Category() {
    return (
      <div className="Category">
        <div className="header">
            <h1>Shop by Category</h1>
            <p>Browse all categories</p>
        </div>

        <div className='blocks'>
            <Container title="New Arrivals" idx='0'/>
            <Container title="Productivity" idx='1'/>
            <Container title="Workspace" idx='2'/>
            <Container title="Accessories" idx='3'/>
            <Container title="Sale" idx='4'/>
        </div>
      </div>
    );
  }
  
  export default Category;
