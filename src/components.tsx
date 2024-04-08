import { getReports } from './db'

const Report = ({ report }) => (
  <div>
    <div>ID: {report.id}</div>
    <div>Content: {report.title}</div>
  </div>
)

const Reports = async () => {
  const reports = await getReports()
  return (
    <div>
      <h2>Current reports</h2>
      <div>
        {reports.map((report) => (
          <Report report={report} />
        ))}
      </div>
    </div>
  )
}

const ReportForm = () => (
  <div>
    <h2>Create new Report</h2>
    <form action='/reports' method='POST'>
      <label>
        Title:
        <input type='text' name='title' />
      </label>
      <input type='submit' value='Submit' />
    </form>
  </div>
)

export const Home = () => {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Hello Bulma!</title>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css'
        />

        <title>Administrofus</title>
      </head>
      <body>
        <h1>Reports</h1>
        <Reports />
        <ReportForm />
      </body>
    </html>
  )
}
