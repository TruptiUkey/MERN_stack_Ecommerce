// import './App.css';
import Collection from './components/collection';
import Header from './components/header';
import Hero from './components/hero';
import Category from './components/scroll_category';
import Workspace from './components/workspace';
import Productivity from './components/productivity';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Category></Category>
      <Workspace></Workspace>
      <Collection></Collection>
      <Productivity></Productivity>
      <Footer></Footer>
    </div>
  );
}

export default App;
