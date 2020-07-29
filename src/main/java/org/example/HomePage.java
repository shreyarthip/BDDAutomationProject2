package org.example;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class HomePage extends Util {
    private By _registerButton = By.linkText("Register");
    private By _WelcomeTitleText = By.xpath("//div[@class=\"topic-block-title\"]/h2");
    String expectedTitleOfThePage = "Welcome to our store";

    public void VerifyTextofHomePage() { //Method to Assert homepage text
        String expectedTitle = "Welcome to our store";
        String actualText1 = getTextFromElement(By.xpath("//h2[text() ='Welcome to our store']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }

    public void clickOnRegisterButton() { //Method of RegisterButton
      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        clickOnElement(_registerButton, 20);
    }
}



