import { Home } from './components'
import { logger } from './logger'
import { createReport } from './db'

export const getHome = () => <Home />

export const addReport = async (
  body: { title: string },
  set: { redirect: string }
) => {
  logger.log('Creating a report')
  const result = await createReport(body)

  logger.log(`🎉 Report created. ID: ${result[0].id}`)
  set.redirect = '/'
}
