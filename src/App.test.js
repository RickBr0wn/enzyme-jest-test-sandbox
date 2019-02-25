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
})

describe('<App/>', () => {
  it('should contain an element with the className of "App-link"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-link').exists()).toBe(true)
  })
})

describe('<App/>', () => {
  it('should contain a <ul> element containing 3 <li> tags', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').children().length).toBe(3)
  })
})

describe('<App/>', () => {
  it('should contain a <ul> element with the className of "test-class"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('ul').hasClass('test-class')).toBe(true)
  })
})

describe('<App/>', () => {
  it('should contain an <h1> element, with the text "Welcome To REACT"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('Welcome To REACT')
  })
})

describe('<App/>', () => {
  it('should contain an <h1> element, with the text "Welcome To REACT"', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('[text="This is the title prop"]').text()).toBe(
      'This is the title prop'
    )
  })
})
