
package org.example;
import org.openqa.selenium.WebDriver;
import java.util.concurrent.TimeUnit;
import org.example.LoadProp;
import org.example.Util;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends  Util {
    LoadProp loadProp = new LoadProp();

    public void SetBrowser() {
        String browserName = "chrome";// loadProp.getProperty("browserName")

    //Check if parameter passed as 'chrome'
        if (browserName.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\ChormeDriver\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        else if (browserName.equalsIgnoreCase("firefox"))
        {
            //create firefox instance
            System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
            driver = new FirefoxDriver();
        }
        else {
        System.out.println("Browser is not correct");
    }
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
        driver.get("https://demo.nopcommerce.com/");

    }
        public void CloseBrowser () {
            driver.close();
        }
}

