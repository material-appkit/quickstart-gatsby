import { include } from '@material-appkit/core/util/path';

export default {
  index: '/',

  about: '/about',

  error: include('/', {
    critical: '500',
    nonCritical: '404',
  }),
};
