import React from 'react';
import { shallow } from 'enzyme';
import { YourPostsComponent } from './YourPosts';

describe('Component YourPosts', () => {
  it('should render without crashing', () => {
    const component = shallow(<YourPostsComponent />);
    expect(component).toBeTruthy();
  });
});
