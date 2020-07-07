/**
 *
 * Asynchronously loads the component for Stuff
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
