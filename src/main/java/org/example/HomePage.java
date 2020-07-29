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

    public void UserOnHomePage() {
     // driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
        getTextFromElement(_WelcomeTitleText);
       // driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
        Assert.assertEquals(_WelcomeTitleText, expectedTitleOfThePage);

    }
    public void clickOnRegisterButton() {
      driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        clickOnElement(_registerButton, 20);
    }



}



