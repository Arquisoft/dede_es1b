import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Ayuda from '../../pages/ayudaPage/ayuda';

test("Help page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <Ayuda></Ayuda>
        </Router>
      );
    
    
      expect(getByText("Preguntas Frecuentes")).toBeInTheDocument();
      expect(getByText("¿Cómo puedo devolver un producto?")).toBeInTheDocument();
      expect(getByText("Lamentablemente aun no aceptamos devoluciones en nuestra tienda online, asi que piense bien antes de comprar algun producto.")).toBeInTheDocument();
      expect(getByText("¿De qué maneras puedo contactar con AsturShop?")).toBeInTheDocument();
      expect(getByText("Mande un correo a asturshopDede@gmail.com y nosotros le responderemos con una sonrisa.")).toBeInTheDocument();
      expect(getByText("¿Cuánto cuestan los gastos de envío?")).toBeInTheDocument();
      expect(getByText("¿Cómo puedo presentar una reclamación?")).toBeInTheDocument();
      expect(getByText("¿Puedo envolver productos para regalo?")).toBeInTheDocument();
      expect(getByText("De momento no, trabajaremos en ello para poder hacerlo en el futuro.")).toBeInTheDocument();



});