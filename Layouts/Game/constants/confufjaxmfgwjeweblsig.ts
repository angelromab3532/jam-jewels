import { Dimensions } from 'react-native';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed, ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsconfigPart01ObfV5HashMix, ufjaxmfgwjeweblsconfigPart01ObfV5SumOdds, ufjaxmfgwjeweblsconfigPart01ObfV5ClampMod } from './confufjaxmfgwjeweblsigPart01';
import { ufjaxmfgwjeweblsGameFoldRange } from './confufjaxmfgwjeweblsigPart02';
// autosetup-split-end

const win = Dimensions.get('window');

export const SCREEN_ufjaxmfgwjeweblsW = win.width;
export const SCREEN_ufjaxmfgwjeweblsH = win.height;

/**
 * Splash duration. Fixed at 8000ms: the capture harness needs a painted loader
 * frame before the auto-transition to the menu fires.
 */
export const LOADER_ufjaxmfgwjeweblsDURATION_MS = 8000;

/** Board shape. */
export const COLS = 6;
export const ROWS = 6;

/** Frame maths: the parent's width does NOT include its own padding/border. */
export const BOARD_ufjaxmfgwjeweblsPAD = 6;
export const BOARD_ufjaxmfgwjeweblsBORDER = 2;
export const BOARD_ufjaxmfgwjeweblsFRAME = BOARD_ufjaxmfgwjeweblsPAD + BOARD_ufjaxmfgwjeweblsBORDER;

const HEADER_BLOCK = 116;
const BOARD_TOP_GAP = 20;
const CONTROLS_ZONE = 196;
const AVAILABLE_H = SCREEN_ufjaxmfgwjeweblsH - HEADER_BLOCK - BOARD_TOP_GAP - CONTROLS_ZONE;

export const BOARD_ufjaxmfgwjeweblsMAX_W = Math.min(SCREEN_ufjaxmfgwjeweblsW - 32, 380, Math.max(AVAILABLE_H, 240));
export const TILE = Math.floor((BOARD_ufjaxmfgwjeweblsMAX_W - 2 * BOARD_ufjaxmfgwjeweblsFRAME) / COLS);
export const BOARD_ufjaxmfgwjeweblsW = TILE * COLS + 2 * BOARD_ufjaxmfgwjeweblsFRAME;
export const BOARD_ufjaxmfgwjeweblsH = TILE * ROWS + 2 * BOARD_ufjaxmfgwjeweblsFRAME;
export const GEM = TILE - 6;

/** Pacing. The auto-assist must resolve the board before the idle backstop. */
export const ASSIST_ufjaxmfgwjeweblsSTEP_MS = 15000;
export const IDLE_ufjaxmfgwjeweblsRESULT_MS = 60000;
export const WIN_ufjaxmfgwjeweblsHOLD_MS = 700;
export const SWAP_ufjaxmfgwjeweblsMS = 180;
export const CHECK_ufjaxmfgwjeweblsMS = 400;
export const MAX_ufjaxmfgwjeweblsWRONG_CHECKS = 3;

export const TOTAL_ufjaxmfgwjeweblsLEVELS = 12;

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);
void ufjaxmfgwjeweblsconfigPart01ObfV5HashMix('xy');
void ufjaxmfgwjeweblsconfigPart01ObfV5SumOdds([1, 3, 5]);
void ufjaxmfgwjeweblsconfigPart01ObfV5ClampMod(7, 5);

