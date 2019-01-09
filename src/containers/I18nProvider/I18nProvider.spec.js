import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { I18nProvider } from './I18nProvider';
import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

const Test = () => (
  <h1>
    <FormattedMessage id="app.name" />
  </h1>
);

describe('i18n component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithIntl(<Test />);
  });

  it('should compare the text in h1.', () => {
    expect(wrapper.text()).toEqual('Tentacle');
  });

  it('should compare the component with a snapshot', () => {
    const wrapper = shallow(
      <I18nProvider>
        <Test />
      </I18nProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
