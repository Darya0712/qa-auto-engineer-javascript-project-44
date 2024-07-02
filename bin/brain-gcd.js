#!/usr/bin/env node

import { nod } from '../games/nod.js';
import { askName } from '../src/cli.js';

askName();

nod();