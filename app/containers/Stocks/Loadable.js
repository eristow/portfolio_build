/**
 *
 * Asynchronously loads the component for Stocks
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
