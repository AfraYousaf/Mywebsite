
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
<div id="style">
<Navbar title="ToDo's List"/>
<div className="container">
<Textform heading="Enter Your text to analyze:"/>
</div>
</div>
  );
}

export default App;
