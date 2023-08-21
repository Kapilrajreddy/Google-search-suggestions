// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  handleSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  clickArrow = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredList = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-suggestions-main-container">
        <div className="google-suggestions-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt=""
            className="google-logo"
          />
          <div className="google-suggestion-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt=""
                className="google-search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchInput}
                onChange={this.handleSearch}
              />
            </div>
            <ul className="suggestion-list">
              {filteredList.map(searchItem => (
                <SuggestionItem
                  searchItem={searchItem}
                  clickArrow={this.clickArrow}
                  key={searchItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

/*
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-list-input-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onClickInput}
              />
            </div>
            <ul className="suggestion-list">
              {filteredSuggestionList.map(each => (
                <SuggestionItem
                  suggestionDetails={each}
                  key={each.id}
                  clickArrow={this.clickArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
*/
