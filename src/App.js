import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class PagesNameRow extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <tr>
        <th colSpan="2">
          {name}
        </th>
      </tr>
    );
  }
}

class PageRow extends React.Component {
  render() {
    const page = this.props.page;

    return (
      <tr>
        <td>{page.url}</td>
        <td>{page.language}</td>
      </tr>
    );
  }
}

class PagesTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const rows = [];
    let lastName = null;
    let categoryKey = null;

    this.props.pages.forEach((page) => {
      if (page.name.indexOf(filterText) === -1) {
        return;
      }
      if (page.name !== lastName) {
        categoryKey = page.name + "-header"
        rows.push(
          <PagesNameRow
            name={page.name}
            key={categoryKey} />
        );
      }
      rows.push(
        <PageRow
          page={page}
          key={page.url} />
      );
      lastName = page.name;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Url</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    const filterText = this.props.filterText;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange} />
      </form>
    );
  }
}

class FilterablePageTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };

  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <PagesTable
          pages={this.props.pages}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

const PAGES = [
  {language: 'fr', name: 'the-manor', url: 'le-manoir-de-juganville'},
  {language: 'en', name: 'the-manor', url: 'le-manoir-de-juganville-bed-and-breakfast'},
  {language: 'fr', name: 'the-rooms', url: 'les-chambres'},
  {language: 'en', name: 'the-rooms', url: 'the-rooms'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FilterablePageTable pages={PAGES} />

      </div>
    );
  }
}

export default App;
