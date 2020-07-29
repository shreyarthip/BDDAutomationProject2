package org.example;

import org.openqa.selenium.By;

import org.testng.Assert;

import java.util.Collections;
import java.util.concurrent.TimeUnit;

public class RegisterSuccessPage extends Util {


    public void userIsOnRegisterPage() {
        String actualText = getTextFromElement(By.xpath("//div[@class=\"result\"]"));
        String expectedText = "Your registration completed";

        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        Assert.assertEquals(actualText, expectedText); // Assert of registrationPage


    }
}
