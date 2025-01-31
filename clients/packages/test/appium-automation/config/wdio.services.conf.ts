import { join } from 'node:path'

import { type ServiceEntry, type ServiceOption } from '@wdio/types/build/Services'

import { config } from './wdio.hooks.conf'
import { paths } from '../constants/paths.js'

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : [] as ServiceEntry[]).concat([
  ['appium', { args: { config: join(paths.APPIUM_AUTOMATION, 'config', 'appiumrc.json') } } as ServiceOption],
])

export { config }
