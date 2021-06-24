import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../Utils";
import Headline from "./Headline";

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component', () => {

    describe('Checking Proptypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();

        })

    })

    describe('Have Props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            }

            wrapper = setUp(props);
        })

        it('Should render with NO errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render an H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })

    })

    describe('Does NOT Have Props', () => {
        
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should NOT render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })
    })


})