import React from "react";
import { Steps, Step } from "react-step-builder";
import Step1 from "./step1"
import Step2 from "./step2";
import { Button, Col, Row } from "antd";
import AdminAppBar from '../../../menuBarAdmin';
import { Box, Container } from "@mui/material";

const Navigation = (props:any) => {
  console.log({ props });
  return (
    <Row align="middle">
      <Col>
        <Button className='añadirProdButton' type="primary" onClick={props.prev} >
        Previo
        </Button>
        <Button className="añadirProdButton" type="primary" onClick={props.next}>
        Siguiente
        </Button>
      </Col>
    </Row>
  );
};

function App() {

  return (
    <>
    <AdminAppBar></AdminAppBar>
    <div className="App">
      

      <div className="pasos">
      <Steps>
        <div className='step'><Step component={Step1} /></div>
        <div className='step'><Step component={Step2} /></div>
        
      </Steps><br></br><br></br>
      </div>
    </div>
    </>
  );
}

export default App;