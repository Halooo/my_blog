let actions = {};

import { mixin } from 'utils';

import * as base from './base.js';
import * as user from './user.js';

mixin(actions, base);
mixin(actions, user);

export default actions;
