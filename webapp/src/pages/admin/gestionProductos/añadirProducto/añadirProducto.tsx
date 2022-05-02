import './añadirProducto.css'
import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import AdminAppBar from '../../../menuBarAdmin';



function App() {

  return (
    <>
    <AdminAppBar></AdminAppBar>
    <div className="App">

      <Steps>
        <div className='step'><Step component={Step1} /></div>
        <div className='step'><Step component={Step2} /></div>
        
        <div className='step'><Step component={FinalStep} /></div>
      </Steps><br></br><br></br>
      </div>
    </>
  );
}

export default App;