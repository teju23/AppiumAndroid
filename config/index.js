const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: 'Android',
    platformVersion: '8.1.0',
    deviceName: 'oneplus ONEPLUSA5000',
    app:
      '/home/lokesh/AndroidStudioProjects/AppiumTest/app/build/outputs/apk/debug/app-debug.apk',
    automationName: 'UiAutomator2'
  }
};
module.exports = {
  opts
};
