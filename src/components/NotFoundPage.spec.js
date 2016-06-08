import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {

  it('should have a header containing \'404\'', () => {
    const wrapper = shallow(<NotFoundPage />);
    const actual = wrapper.find('h1').text();
    const expected = '404';

    expect(actual).to.contain(expected);
  });

});
