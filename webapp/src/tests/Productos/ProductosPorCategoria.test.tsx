import { render, fireEvent, getByTestId } from "@testing-library/react";
import ProductosPorCategoria from '../../pages/productosPorCategoria/productosPorCategoria';
import { BrowserRouter as Router } from "react-router-dom";



test('Productos por categoria render',async()=>{

    const { getByText } = render(<Router><ProductosPorCategoria></ProductosPorCategoria></Router>);
        
           
        expect(getByText("AsturShop")).toBeInTheDocument();

     
      


});
test("Click on Carrito", async () => {
    const { container } = render(
        <Router>
        <ProductosPorCategoria></ProductosPorCategoria>
      </Router>
    );
  
    const addButton = getByTestId(container, "boton-carrito");
    fireEvent.click(addButton);
    
  });