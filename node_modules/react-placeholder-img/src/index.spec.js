import React from 'react';
import PlaceHolderImage from './index';
import { shallow } from 'enzyme';

describe('render', () => {
  it('renders without crashing', () => {
    shallow(<PlaceHolderImage />);
  });
});
