#!/usr/bin/env node

import { numberNod } from '../games/nod.js';
import { askName } from '../src/cli.js';

askName();

numberNod();