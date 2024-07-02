#!/usr/bin/env node

import { numberEven } from '../games/even.js';
import { askName } from '../src/cli.js';

askName();

numberEven();
