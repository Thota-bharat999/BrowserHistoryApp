import './index.css'

const History = props => {
  const {historyDetails, onDeleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteFunction(id)
  }

  return (
    <li className="white-container">
      <div className="history-details">
        <p className="timeDescription">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="description">{title}</p>
        <p className="path-description">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
