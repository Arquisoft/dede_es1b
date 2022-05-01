import React from "react";
import { Steps, Step } from "react-step-builder";
import Step1 from "./step1BuscarProducto"
import Step2 from "./step2BuscarProducto";
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

function GetProductoPorID() {

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

export default GetProductoPorID;