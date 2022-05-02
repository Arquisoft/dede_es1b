Feature: Getting products from DB filtered by ropa

Scenario: User wants to see products filtered by category
  Given a user on catalog page
  When user clicks on ropa button
  Then ropa products are loaded from database and shown on page