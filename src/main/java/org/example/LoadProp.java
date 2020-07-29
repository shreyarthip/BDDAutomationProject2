package org.example;

import org.testng.annotations.Test;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {

    static Properties prop;
    static FileInputStream input;
    static String fileName = "TestDataConfig.properties"; //Variable to store file name for data collection
    static String fileLocation = "src\\test\\resources\\features\\TestData\\";//Variable to store location for the file name of data cllection

    public String getProperty(String key) {
        prop = new Properties();
        try {
            input = new FileInputStream(fileLocation + fileName);
            prop.load(input);
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }
    @Test
    public void readingkey(){
        System.out.println(getProperty("url"));
    }
}


