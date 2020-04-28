/**
 *
 * Asynchronously loads the component for Links
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
