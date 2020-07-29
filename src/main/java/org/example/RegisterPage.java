package org.example;

import org.openqa.selenium.By;

public class RegisterPage extends Util {
    LoadProp loadProp = new LoadProp(); //LoadProp Object Created
    private By _firstName = By.xpath("//input[@id=\"FirstName\"]");
    private By _lastName = By.xpath("//input[@id=\"LastName\"]");
    private By _dateOfBirthday = By.xpath("//select[@name=\"DateOfBirthDay\"]");
    private By _dateOfBirthMonth = By.xpath("//select[@name=\"DateOfBirthMonth\"]");
    private By _dateOfBirthyear = By.xpath("//select[@name=\"DateOfBirthYear\"]");
    private By _emailField = By.name("Email");
    private By _CompanyName = By.id("Company");
    private By _password = By.xpath("//input[@name=\"Password\"]");
    private By _confirmpassword = By.xpath("//input[@name=\"ConfirmPassword\"]");
    private By _registerSubmitButton = By.id("register-button");

    public void userEnterRegistrationDetails() {
        TypeText(_firstName,loadProp.getProperty("firstName"));
        TypeText(_lastName,loadProp.getProperty("lastName"));
        selectFromDropDownByIndex(_dateOfBirthday,loadProp.getProperty("dateOfBirthday"));
        selectFromDropDownByVisibleText(_dateOfBirthMonth,loadProp.getProperty("dateOfBirthMonth"));
        selectFromDropDownByValue(_dateOfBirthyear,loadProp.getProperty("dateOfBirthyear"));
        TypeText(_emailField, loadProp.getProperty("emailField")+timestamp()+loadProp.getProperty("emailid"));
        TypeText(_CompanyName,loadProp.getProperty("CompanyName"));
        TypeText(_password,loadProp.getProperty("password"));
        TypeText(_confirmpassword,loadProp.getProperty("confirmpassword"));
    }

    public void userClickOnRegisterSubmitButton() {
        clickOnElement(_registerSubmitButton, 30);

    }


}
