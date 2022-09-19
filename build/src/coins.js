"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bitcoin_1 = require("./coins/bitcoin");
const ethereum_1 = require("./coins/ethereum");
const near_1 = require("./coins/near");
const solana_1 = require("./coins/solana");
const tezos_1 = require("./coins/tezos");
const tron_1 = require("./coins/tron");
const coin_code_1 = require("./coin_code");
const coins = new Map();
coins.set(coin_code_1.default.BTC, new bitcoin_1.default());
coins.set(coin_code_1.default.ETH, new ethereum_1.default());
coins.set(coin_code_1.default.XTZ, new tezos_1.default());
coins.set(coin_code_1.default.SOL, new solana_1.default());
coins.set(coin_code_1.default.TRX, new tron_1.default());
coins.set(coin_code_1.default.NEAR, new near_1.default());
exports.default = coins;
//# sourceMappingURL=coins.js.map