import postgres from 'postgres'
import { logger } from './logger'
import { slugify } from './tools'
import { USER_ID, ACCOUNT_ID, WORKSPACE_ID } from './config'

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'ihub_reports',
  username: 'ihub',
  password: 'password',
})

export const getReports = async (): Promise<
  postgres.RowList<postgres.Row[]>
> => {
  const reports = await sql`
        select * from reports
    `
  return reports
}

export const createReport = async (body: {
  title: string
}): Promise<postgres.RowList<postgres.Row[]>> => {
  const slug = slugify(body.title)

  const result = await sql`
  insert into reports (title, slug, user_id, account_id, workspace_id) 
              values (${body.title}, ${slug}, ${USER_ID}, ${ACCOUNT_ID}, ${WORKSPACE_ID})
  returning id
  `
  return result
}
