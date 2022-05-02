import { render,fireEvent,getByTestId } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Bienvenida from '../../pages/bienvenidaPage/bienvenidaPage';

test("Welcome page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <Bienvenida></Bienvenida>
        </Router>
      );
    
      expect(getByText("Bienvenido a AsturShop")).toBeInTheDocument();
      expect(getByText("Empezar")).toBeInTheDocument();
      

});
test("Click on Empezar", async () => {
    const { container } = render(
        <Router>
        <Bienvenida></Bienvenida>
      </Router>
    );
  
    const addButton = getByTestId(container, "boton-empezar");
    fireEvent.click(addButton);
    expect(window.location.pathname).toBe("/inicio");
  });