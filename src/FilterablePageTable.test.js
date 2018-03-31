import React from 'react';
import ReactDOM from 'react-dom';
import FilterablePageTable from './App';

const PAGES = [
  {language: 'fr', name: 'the-manor', url: 'le-manoir-de-juganville'},
  {language: 'en', name: 'the-manor', url: 'le-manoir-de-juganville-bed-and-breakfast'},
  {language: 'fr', name: 'the-rooms', url: 'les-chambres'},
  {language: 'en', name: 'the-rooms', url: 'the-rooms'},
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterablePageTable pages={PAGES}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
