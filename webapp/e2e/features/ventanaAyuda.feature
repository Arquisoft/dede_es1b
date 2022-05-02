Feature: User watching help page

Scenario: User wants to check help page
  Given a user on main page
  When user clicks on help button on menu bar
  Then help page is loaded