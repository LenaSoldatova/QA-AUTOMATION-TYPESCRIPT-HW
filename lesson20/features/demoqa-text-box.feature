Feature: DemoQA Text Box Form

  Scenario: Fill in the form and check the result
    Given I open the text box page
    When I fill the form with:
      | field            | value             |
      | name             | Lena QA           |
      | email            | lena@example.com  |
      | currentAddress   | Nice              |
      | permanentAddress | Earth             |
    And I submit the form
    Then I should see the name "Lena QA"
    And I should see the email "lena@example.com"
