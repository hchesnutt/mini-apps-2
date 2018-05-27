import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import EventList from './EventList';
import Search from './Search';
import helpers from '../helpers';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      events: [],
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  
  async search(page) {
    const { query } = this.state;
    const response = await fetch(`/events?q=${query}&_page=${page}`);
    const data = await response.json();
    return data;
  }
  
    handleQueryChange(e) {
      e.preventDefault();
      const { query } = this.state;
      const event = Object.assign({}, e);
      const newQuery = event.target.value;
      this.setState({
        query: newQuery,
      })
    }

  async handlePageChange({ selected }) {
    console.log(selected)
    const newEvents = await this.search(selected)
    this.setState({
      events: newEvents,
    });
  }

  async handleSearch(e, page = 0) {
    e.preventDefault();
    console.log(page)
    const newEvents = await this.search(page);
    this.setState({
      events: newEvents,
    });
  }

  renderPaginator() {
    if (this.state.events.length > 0) {
      return (
        <div id="react-paginate">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={50}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={this.handlePageChange}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Search query={this.state.query} 
          handleQueryChange={this.handleQueryChange} 
          handleSearch={this.handleSearch}/>
        <div id="event-container">
          <EventList events={this.state.events}/>
        </div>
        {this.renderPaginator()}
      </div>
    )
  }
}

export default App;