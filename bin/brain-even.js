#!/usr/bin/env node

import runEvenGame from '../src/games/even.js';
import { askName } from '../src/cli.js';

askName();

runEvenGame();
