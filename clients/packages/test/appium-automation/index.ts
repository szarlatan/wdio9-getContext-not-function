// Here goes the direct imports of some dependencies
// that are required by the framework to work
// but are not directly imported by default
// Purpose of that is to make yarn packages:validate pass
import '@wdio/appium-service'
import '@wdio/cli'
import '@wdio/local-runner'
import '@wdio/mocha-framework'
import '@wdio/spec-reporter'
import 'appium'
import 'appium-uiautomator2-driver'
import 'appium-xcuitest-driver'
import 'wdio-reportportal-reporter'
import 'wdio-reportportal-service'
import 'wdio-wait-for'

// Package exports start here
export { paths } from './constants/paths.js'
export { default as Page } from './ui/page.js'