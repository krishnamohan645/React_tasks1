// import logo from './logo.svg';
import './App.css';
import CustomHeading from './component/class_component/heading/heading';
import CustomButton from './component/class_component/button/button';
import CustomImage from './component/class_component/image/image';
import CustomForm from './component/class_component/form/form';
import CustomList from './component/class_component/lists/lists';
import CustomTable from './component/class_component/table/table';
import ButtonComponent from './component/function_component/button/button';
import HeadingComponent from './component/function_component/heading/heading';
import ImageComponent from './component/function_component/image/image';
import FormComponent from './component/function_component/form/form';
import ListComponent from './component/function_component/lists/lists';
import TableComponent from './component/function_component/table/table';

function App() {
  return (
    <div className="App">
      <div>
        <HeadingComponent/>
        <ButtonComponent/>
        <ImageComponent/>
        <FormComponent/>
        <ListComponent/>
        <TableComponent/>
      </div>
      <div>
        <CustomHeading/>
        <CustomButton/>
        <CustomImage/>
        <CustomForm/>
        <CustomList/>
        <CustomTable/>
      </div>
    </div>
  );
}

export default App;
