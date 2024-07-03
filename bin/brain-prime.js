#!/usr/bin/env node

import { prime } from '../games/prime.js';
import { askName } from '../src/cli.js';

askName();

prime();