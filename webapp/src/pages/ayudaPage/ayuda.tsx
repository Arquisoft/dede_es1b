import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBar from "../menuBar";

export default function SimpleAccordion() {
  return (

    <div>
          <MenuBar></MenuBar>
        
        <h1>Preguntas Frecuentes</h1>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿Cómo puedo devolver un producto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lamentablemente aun no aceptamos devoluciones en nuestra tienda online, asi que piense bien antes de comprar algun producto.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>¿De qué maneras puedo contactar con AsturShop?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mande un correo a asturshop@gmail.com y nosotros le responderemos con una sonrisa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿Cuánto cuestan los gastos de envío?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Depende de varios factores, se le informara un vez que rellene los datos de compra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿Cómo puedo presentar una reclamación?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Podrás reclamar a través del siguiente correo electrónico: asturshop@gmail.com. 
          Las partes se someten, a su elección, para la resolución de los conflictos y con renuncia a cualquier otro fuero, a los juzgados y tribunales del domicilio del usuario.
          </Typography>
        </AccordionDetails>
      </Accordion><br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>¿Puedo envolver productos para regalo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            De momento no, trabajaremos en ello para poder hacerlo en el futuro.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
