#!/usr/bin/env node

import runPrimeGame from '../src/games/prime.js';
import { askName } from '../src/cli.js';

askName();

runPrimeGame();
