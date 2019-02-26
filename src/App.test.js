import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App/>', () => {
  it('should contain only 1 <p> element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('p').length).toBe(1)
  })
  it('should contain an element with the className of "App-link"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-link').exists()).toBe(true)
  })
  it('should contain a <ul> element containing 3 <li> tags', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').children().length).toBe(3)
  })
  it('should contain a <ul> element with the className of "test-class"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').hasClass('test-class')).toBe(true)
  })
  it('should contain an <h1> element, with the text "Welcome To REACT"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('Welcome To REACT')
  })
  it('should contain an <Title/> Component, with the text "This is the title prop"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Title').text()).toBe('<Title />')
  })
  it('matches the snapshot', () => {
    const tree = shallow(<App />)
    expect(tree).toMatchSnapshot()
  })
})
