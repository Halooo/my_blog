let mutations = {};

import { mixin } from 'utils';

import * as base from './base.js';
import * as user from './user.js';

mixin(mutations, base);
mixin(mutations, user);

export default mutations;
