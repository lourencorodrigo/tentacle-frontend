import React from 'react';

import { Spinner, Bounce1, Bounce2, Bounce3 } from './styles';

const DotLoader = () => (
  <Spinner>
    <Bounce1 />
    <Bounce2 />
    <Bounce3 />
  </Spinner>
);

export default DotLoader;
