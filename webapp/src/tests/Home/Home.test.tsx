import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from '../../pages/mainPage/Homepage';

test("Home page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <Home></Home>
        </Router>
      );
    
      expect(getByText("AsturShop")).toBeInTheDocument();
      

});