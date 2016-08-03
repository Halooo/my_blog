let state = {};

import { mixin } from 'utils';

import common from './base.js';
import user from './user.js';

mixin(state, common);
mixin(state, user);

export default state;
