$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration feature",
  "description": "",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 114963200,
  "error_message": "java.lang.NoClassDefFoundError: org/openqa/selenium/remote/AbstractDriverOptions\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:756)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:468)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:74)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:369)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:363)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:362)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:418)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:355)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:351)\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:756)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:468)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:74)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:369)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:363)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:362)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:418)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:355)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:351)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat org.example.BrowserManager.SetBrowser(BrowserManager.java:19)\r\n\tat org.example.Hooks.SetBrowser(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.ClassNotFoundException: org.openqa.selenium.remote.AbstractDriverOptions\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:382)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:418)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:355)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:351)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to register successfully,so that user can use all functionality on my website",
  "description": "",
  "id": "registration-feature;user-should-able-to-register-successfully,so-that-user-can-use-all-functionality-on-my-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@trail"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters all required registration details",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters all required submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should able to register sucessfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_clicks_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_enters_all_required_registration_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_register_sucessfuly()"
});
formatter.result({
  "status": "skipped"
});
});