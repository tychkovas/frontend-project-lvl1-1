#!/usr/bin/env node
import { getPuzzle, descriptionGame } from '../games/gcd';
import flow from '../flow';

flow(getPuzzle, descriptionGame);