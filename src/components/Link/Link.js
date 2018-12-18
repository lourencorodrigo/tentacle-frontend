import React from 'react';

import { Wrapper } from './styles';

const Link = ({ children, to }) => <Wrapper to={to}>{children}</Wrapper>;

export default Link;
