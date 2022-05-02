Feature: Getting info of a specified  product

Scenario: User wants to check details of a product
  Given a user on main page
  When user clicks on "ver detalles" button of a product
  Then info of the product is shown to the user on another window