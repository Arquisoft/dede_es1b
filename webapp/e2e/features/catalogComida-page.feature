Feature: Getting products from DB filtered by comida

Scenario: User wants to see products filtered by category
  Given a user on catalog page
  When user clicks on comida button
  Then comida products are loaded from database and shown on page