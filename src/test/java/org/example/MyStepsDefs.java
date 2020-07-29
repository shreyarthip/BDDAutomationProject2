package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepsDefs {
    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();
    RegisterSuccessPage registerSuccessPage = new RegisterSuccessPage();

    @Given("^user is on homepage$")
    public void user_is_on_homepage() {
        homePage.UserOnHomePage();
    }
    @When("^User clicks on register button$")
    public void user_clicks_on_register_button() {
        homePage.clickOnRegisterButton();
    }

    @When("^user enters all required registration details$")
    public void user_enters_all_required_registration_details() {
        registerPage.userEnterRegistrationDetails();
    }

    @When("^user enters all required -submit button$")
    public void user_enters_all_required_submit_button() {
        registerPage.userClickOnRegisterSubmitButton();
    }

    @Then("^user should able to register sucessfuly$")
    public void user_should_able_to_register_sucessfuly() {
        registerSuccessPage.userIsOnRegisterPage();

    }
}
