import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/assets/vendor/reset.css';
import '../src/assets/vendor/fonts.css';

addDecorator(
  withInfo({
    inline: true
  })
);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
