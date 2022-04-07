import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="icon-links">
        <p className="time">{timeAccessed}</p>
        <div className="history-item">
          <img src={logoUrl} className="app-img" alt="domain logo" />
          <div className="history-text-container">
            <p className="app-name">{title}</p>
            <p className="app-link">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn"
        testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
