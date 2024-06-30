#!/usr/bin/env node

import { numberCalc } from '../src/logic.js';
import { askName } from '../src/cli.js';

askName();

numberCalc();
