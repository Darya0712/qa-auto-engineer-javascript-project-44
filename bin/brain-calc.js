#!/usr/bin/env node

import { calc } from '../games/calc.js';
import { askName } from '../src/cli.js';

askName();

calc();
