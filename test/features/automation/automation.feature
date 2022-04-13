
@automation
Feature: registration feature
    This is a description for the feature

    Background:
        Given target page is open

    Scenario Outline: happy path


        When user fills account data
            | Email                       | Password   |
            | abc159qwe@automationdev.com | mnb369#bbb |
        And user proceeds
        And user fills payment data i.e. <State>

        Examples:
            | State   |
            | florida |
            | Hawa    |

