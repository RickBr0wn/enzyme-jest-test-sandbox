import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Title = ({ title }) => <div>{title}</div>

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            <h1>Welcome To REACT</h1>
            <Title title={'This is the title prop'} />
          </a>
          <ul className='test-class'>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </header>
      </div>
    )
  }
}

export default App
