Feature: Is it during the week?
  Everybody wants to know if it's during the week

  Scenario: Today is or is not during the week
    Given today is today
    When I ask whether it's during the week
    Then I should be told the truth
