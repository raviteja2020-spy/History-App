import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class GoogleHistory extends Component {
  state = {searchValue: '', historyList: initialHistoryList}

  onSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  filteredResult = () => {
    const {searchValue, historyList} = this.state
    const filteredResult = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return filteredResult
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({
      historyList: updatedHistoryList,
    })
  }

  renderListItems = () => {
    const searchResult = this.filteredResult()

    if (searchResult.length >= 1) {
      const filteredResult = searchResult.map(eachItem => (
        <HistoryItem
          key={eachItem.id}
          historyDetails={eachItem}
          deleteHistory={this.deleteHistory}
        />
      ))
      return filteredResult
    }
    return (
      <div className="empty-history">
        <p className="text-center">There is no history to show</p>
      </div>
    )
  }

  render() {
    const {searchValue} = this.state

    return (
      <div className="main-card">
        <div className="header-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <hr className="horizontal-line" />
            <input
              type="search"
              className="search-input"
              placeholder="Search History"
              value={searchValue}
              onChange={this.onSearchInput}
            />
          </div>
        </div>
        <ul className="list-container">{this.renderListItems()}</ul>
      </div>
    )
  }
}

export default GoogleHistory
