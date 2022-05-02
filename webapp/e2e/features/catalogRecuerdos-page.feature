Feature: Getting products from DB filtered by souvenirs

Scenario: User wants to see products filtered by category
  Given a user on catalog page
  When user clicks on souvenirs button
  Then souvenirs products are loaded from database and shown on page