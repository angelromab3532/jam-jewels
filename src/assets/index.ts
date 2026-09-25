/**
 * Asset re-exports. The PNGs are produced by the pipeline before the build (AI
 * via FLUX, or a procedural gradient fallback), so these require() calls always
 * resolve. Every background sits under a heavy gradient overlay, so the screens
 * stay on-palette even when an asset falls back to a plain procedural gradient.
 */

export const appIcon = require('../../assets/icon_1024.png');
export const bgLoader = require('../../assets/bg_loader.png');
export const bgMenu = require('../../assets/bg_menu.png');
export const bgGame = require('../../assets/bg_game.png');
export const spriteGem = require('../../assets/sprite_gem.png');
