import './App.css';
import Banner1 from './Components/Banner1';
import Cardposts from './Components/Cardposts';
import NavBar from './Components/NavBar';
import Netoriginals from './Netoriginals';
import { action, horror, originals, romance } from './Components/Urls'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner1 /> 
      <Netoriginals titles="ACTION"/>
      <Cardposts url={action}/>
      <Netoriginals titles="HORROR"/>
      <Cardposts url={horror}/>
      <Netoriginals titles="ROMANCE"/>
      <Cardposts url={romance}/>/



      
      
    </div>
  );
}

export default App;
