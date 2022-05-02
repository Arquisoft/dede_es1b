import { Steps, Step } from "react-step-builder";
import Step1 from "./step1PedidosPorUsuario"
import Step2 from "./step2";
import AdminAppBar from '../../../menuBarAdmin';


function App() {

  return (
    <>
    <AdminAppBar></AdminAppBar>
    <div className="App">
      

      <Steps>
        <div className='step'><Step component={Step1} /></div>
        <div className='step'><Step component={Step2} /></div>
        
      </Steps><br></br><br></br>
      </div>
    </>
  );
}

export default App;