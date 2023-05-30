import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plans from "./components/Plans";
import Room from "./components/Room";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Navbar/> 
      <Main />
      <Offers />
      <Plans />
      <Room />
      <Slider />
      <Footer /> 
     
    </div>
  );
}

export default App;
