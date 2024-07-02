#!/usr/bin/env node

import { progression } from '../games/progression.js';
import { askName } from '../src/cli.js';

askName();

progression();