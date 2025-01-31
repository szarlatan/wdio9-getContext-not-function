import { join } from 'node:path'

const acmeAppFolder = 'wdio9-sample'
const acmeAppRootFolderPath = join(process.cwd().split(acmeAppFolder)[0], acmeAppFolder)
const acmeAppClientsFolderPath = join(acmeAppRootFolderPath, 'clients')

export const paths = {
  APPIUM_AUTOMATION: join(acmeAppClientsFolderPath, 'packages', 'test', 'appium-automation'),
  ACME_APP_CLIENTS: acmeAppClientsFolderPath,
  ACME_APP_ROOT: acmeAppRootFolderPath
}