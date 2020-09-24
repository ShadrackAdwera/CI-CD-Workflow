import React from 'react'
import { shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MDBNavItem } from 'mdbreact'

import NavBar from './NavBar'

configure({adapter: new Adapter()})

describe('NavBar', ()=>{
    it('Should render at least two NavBar elements', ()=>{
        const wrapper = shallow(<NavBar />)
        expect(wrapper.find(MDBNavItem)).toHaveLength(7);
    })
})