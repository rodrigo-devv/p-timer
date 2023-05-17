import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Coding</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reading</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Finished</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
