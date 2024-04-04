// import logo from './logo.svg';
import './App.css';
import CustomButton from './component/class_component/button/button';
import ButtonComponent from './component/function_component/button/button';
import ImageComponent from './component/function_component/image/image';

function App() {
  return (
    <div className="App">
      <CustomButton/>
      <ButtonComponent/>
      <ImageComponent/>
    </div>
  );
}

export default App;
