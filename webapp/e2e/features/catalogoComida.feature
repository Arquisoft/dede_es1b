Feature: Getting products from DB filtered by food

Scenario: User wants to see products filtered by food
  Given a user on catalog page
  When user clicks on food button
  Then food products are loaded from database and shown on page