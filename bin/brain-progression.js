#!/usr/bin/env node

import runProgressionGame from '../src/games/progression.js';
import { askName } from '../src/cli.js';

askName();

runProgressionGame();
