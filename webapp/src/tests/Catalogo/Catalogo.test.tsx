import { render,getByTestId,fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Catalogo from '../../pages/catalogoPage/catalogo';

test("Catalogo page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <Catalogo></Catalogo>
        </Router>
      );
    
    
      
      expect(getByText("ROPA")).toBeInTheDocument();
      expect(getByText("COMIDA")).toBeInTheDocument();
      expect(getByText("SOUVENIRS")).toBeInTheDocument();


});
test("Click on Ropa", async () => {
    const { container } = render(
        <Router>
        <Catalogo></Catalogo>
      </Router>
    );
  
    const addButton = getByTestId(container, "boton-ropa");
    fireEvent.click(addButton);
    expect(window.location.pathname).toBe("/catalogo/ropa");
  });
  test("Click on Comida", async () => {
    const { container } = render(
        <Router>
        <Catalogo></Catalogo>
      </Router>
    );
  
    const addButton = getByTestId(container, "boton-comida");
    fireEvent.click(addButton);
    expect(window.location.pathname).toBe("/catalogo/comida");
  });
  test("Click on Souvenir", async () => {
    const { container } = render(
        <Router>
        <Catalogo></Catalogo>
      </Router>
    );
  
    const addButton = getByTestId(container, "boton-souvenirs");
    fireEvent.click(addButton);
    expect(window.location.pathname).toBe("/catalogo/recuerdo");
  });
