Feature: Getting products from DB

Scenario: User accesses to the webpage
  Given a user on welcome page
  When user accesses main page
  Then products are loaded from database and shown on page