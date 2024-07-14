#!/usr/bin/env node

import runNodGame from '../src/games/nod.js';
import { askName } from '../src/cli.js';

askName();

runNodGame();
