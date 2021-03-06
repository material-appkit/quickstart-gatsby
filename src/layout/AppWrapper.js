import PropTypes from 'prop-types';
import React from 'react';

import Application from './Application';
import { handleException } from 'util/shortcuts';


class AppWrapper extends React.PureComponent {
  static getDerivedStateFromError(error) {
    console.log('derive state for error', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', function(event) {
      // the event object has two special properties:
      // event.promise: [object Promise] - The promise that generated the error
      // event.reason [object Error]: The unhandled error object
      handleException(event.reason, event.promise);
    });
  }

  componentDidCatch(error, errorInfo) {
    handleException(error, errorInfo);
  }

  render() {
    return (
      <Application>
        {this.props.rootElement}
      </Application>
    );
  }
}

AppWrapper.propTypes = {
  rootElement: PropTypes.element.isRequired,
};

export default AppWrapper;
