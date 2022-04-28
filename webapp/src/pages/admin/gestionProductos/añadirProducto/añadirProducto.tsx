import React from "react";
import './añadirProducto.css'
import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import AdminAppBar from '../../../menuBarAdmin';
import { Box, Container } from "@mui/material";
import { Button, Col, Row } from "antd";

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
      <br />
      <h1>AÑADIR PRODUCTO</h1>
      <br />
      

      <div className="pasos">
      <Steps>
        <div className='step'><Step component={Step1} /></div>
        <div className='step'><Step component={Step2} /></div>
        
        <div className='step'><Step component={FinalStep} /></div>
      </Steps><br></br><br></br>
      </div>
    </div>
    </>
  );
}

export default App;
