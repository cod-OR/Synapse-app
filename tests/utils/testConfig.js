

export default class TestConfig {
    static webdriverPath = '/wd/hub';
    static webdriverPort = 4723;
    static androidBaseCapabilities(appPackage, appActivity) {
     const desiredCapabilities = {
           platformName: "Android",
      automationName: "UiAutomator2",
           deviceName: "Android Emulator",
           appPackage: typeof appPackage !== 'undefined' ? appPackage : "com.demo.synapse",
           appActivity: typeof appActivity !== 'undefined' ? appActivity : "host.exp.exponent.LauncherActivity",
           automationName: "UiAutomator2",
     }
     return {
      path: this.webdriverPath,
      port: this.webdriverPort,
      capabilities: desiredCapabilities
     }
    }
    
    static iosBaseCapabilities(bundleId) {
     const desiredCapabilities = {
      platformName: "iOS",
      automationName: "XCUITest",
      deviceName: "iPhone SE (3rd generation)",
      platformVersion: "15.4",
      bundleId: typeof bundleId !== 'undefined' ? bundleId : "com.demo.synapse"
     }
     
     return {
      path: this.webdriverPath,
      port: this.webdriverPort,
      capabilities: desiredCapabilities
     }

    }
   }