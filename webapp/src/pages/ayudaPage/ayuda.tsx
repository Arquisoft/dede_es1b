import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBar from "../menuBar";
import Divider from '@mui/material/Divider';

export default function SimpleAccordion() {
  return (

    <div className="contenedor">
          <MenuBar></MenuBar>
        
        <h1>Preguntas Frecuentes</h1>
          <div className='acordeones'>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>¿Cómo puedo devolver un producto?</strong></Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
          Lamentablemente aun no aceptamos devoluciones en nuestra tienda online, asi que piense bien antes de comprar algun producto.
          </Typography>
        </AccordionDetails>
      </Accordion >
      <br></br>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>¿De qué maneras puedo contactar con AsturShop?</strong></Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
          Mande un correo a asturshopDede@gmail.com y nosotros le responderemos con una sonrisa.
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
          <Typography><strong>¿Cuánto cuestan los gastos de envío?</strong></Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
            Depende de varios factores, se le informara un vez que rellene los datos de compra.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br></br>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>¿Cómo puedo presentar una reclamación?</strong></Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
          Podrás reclamar a través del siguiente correo electrónico: asturshopDede@gmail.com. 
          Las partes se someten, a su elección, para la resolución de los conflictos y con renuncia a cualquier otro fuero, a los juzgados y tribunales del domicilio del usuario.
          </Typography>
        </AccordionDetails>
      </Accordion><br></br>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>¿Puedo envolver productos para regalo?</strong></Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>
            De momento no, trabajaremos en ello para poder hacerlo en el futuro.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br></br>
          <br></br>
          <br></br>
    </div>
         

  );
}
