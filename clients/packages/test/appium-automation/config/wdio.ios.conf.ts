import { config } from './wdio.services.conf.js'

// ============
// Capabilities
// ============

// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    // For W3C the appium capabilities need to have an extension prefix
    // This is `appium:` for all Appium Capabilities which can be found here
    // http://appium.io/docs/en/writing-running-appium/caps/
    platformName: 'iOS',
    browserName: 'Safari',
    'appium:deviceName': 'iPhone 15 (18.0)',
    'appium:platformVersion': '18.0',
    'appium:automationName': 'XCUITest'
  },
]

export { config }
