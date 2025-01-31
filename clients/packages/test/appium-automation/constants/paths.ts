import { join } from 'node:path'

const klarnaAppFolder = 'wdiov9'
const klarnaAppRootFolderPath = join(process.cwd().split(klarnaAppFolder)[0], klarnaAppFolder)
const klarnaAppClientsFolderPath = join(klarnaAppRootFolderPath, 'clients')

export const paths = {
  APPIUM_AUTOMATION: join(klarnaAppClientsFolderPath, 'packages', 'test', 'appium-automation'),
  KLARNA_APP_CLIENTS: klarnaAppClientsFolderPath,
  KLARNA_APP_ROOT: klarnaAppRootFolderPath
}