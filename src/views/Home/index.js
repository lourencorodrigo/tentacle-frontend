import Loadable from 'react-loadable';
import React from 'react';

function Loading() {
  return <div>Loading...</div>;
}

const LoadableComponent = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
