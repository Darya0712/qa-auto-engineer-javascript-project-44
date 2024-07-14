#!/usr/bin/env node

import runCalcGame from '../src/games/calc.js';
import { askName } from '../src/cli.js';

askName();

runCalcGame();
