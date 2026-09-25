import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

export const SCREEN_W = win.width;
export const SCREEN_H = win.height;

/**
 * Splash duration. Fixed at 8000ms: the capture harness needs a painted loader
 * frame before the auto-transition to the menu fires.
 */
export const LOADER_DURATION_MS = 8000;

/** Board shape. */
export const COLS = 6;
export const ROWS = 6;

/** Frame maths: the parent's width does NOT include its own padding/border. */
export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;

const HEADER_BLOCK = 116;
const BOARD_TOP_GAP = 20;
const CONTROLS_ZONE = 196;
const AVAILABLE_H = SCREEN_H - HEADER_BLOCK - BOARD_TOP_GAP - CONTROLS_ZONE;

export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380, Math.max(AVAILABLE_H, 240));
export const TILE = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / COLS);
export const BOARD_W = TILE * COLS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;
export const GEM = TILE - 6;

/** Pacing. The auto-assist must resolve the board before the idle backstop. */
export const ASSIST_STEP_MS = 15000;
export const IDLE_RESULT_MS = 60000;
export const WIN_HOLD_MS = 700;
export const SWAP_MS = 180;
export const CHECK_MS = 400;
export const MAX_WRONG_CHECKS = 3;

export const TOTAL_LEVELS = 12;
