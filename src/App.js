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
    const rows = [];
    let lastName = null;

    this.props.pages.forEach((page) => {
      if (page.name !== lastName) {
        rows.push(
          <PagesNameRow
            name={page.name}
            key={page.name} />
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
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

class FilterablePageTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PagesTable pages={this.props.pages} />
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
