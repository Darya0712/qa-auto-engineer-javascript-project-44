#!/usr/bin/env node

import { numberCalc } from '../games/calc.js';
import { askName } from '../src/cli.js';

askName();

numberCalc();
