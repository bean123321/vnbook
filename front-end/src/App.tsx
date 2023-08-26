
import './App.css';
import Nav from './components/templates/Nav';
import Banner from './components/templates/Banner';
import TopHeader from './components/templates/TopHeader';
import BottomHeader from './components/templates/BottomHeader';
import FamousAuthor from './components/templates/FamousAuthor';
function App() {
  return (
    <>
      <TopHeader/>
      <BottomHeader/>
      <Nav appear={true}/>
      <Banner/>
      {/* <FamousAuthor/> */}
    </>

  )
}

export default App;
