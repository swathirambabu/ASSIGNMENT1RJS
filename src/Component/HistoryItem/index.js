import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="image" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
