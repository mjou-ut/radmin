import { Elysia, t } from 'elysia'
import { logger } from './logger'
import { html } from '@elysiajs/html'
import { addReport, getHome } from './handlers'

const app = new Elysia()

app
  .use(html())
  .get('/', () => getHome())
  .post('/reports', ({ body, set }) => addReport(body, set))
  .listen(3000)

logger.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
