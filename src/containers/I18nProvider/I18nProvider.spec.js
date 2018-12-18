import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { I18n } from './I18n';
import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

class Test extends React.Component {
  render() {
    return (
      <h1>
        <FormattedMessage id="APP_WELCOME_REACT" />
      </h1>
    );
  }
}

describe('I18N COMPONENT', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithIntl(<Test />);
  });

  it('+++ should compare the text in h1.', () => {
    expect(wrapper.text()).toEqual('Welcome to React!');
  });

  it('+++ should compare the component with a snapshot', () => {
    const wrapper = shallow(
      <I18n>
        <Test />
      </I18n>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
