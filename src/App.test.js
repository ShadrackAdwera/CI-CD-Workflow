import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})

describe('App', ()=>{
  it('renders without crashing', ()=>{
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<section className='App'></section>))
  })
})

