"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectAddressCrypto = exports.validateAddress = void 0;
const coins_1 = require("./coins");
function validateAddress(coinCode, address) {
    const coin = coins_1.default.get(coinCode);
    console.log(coin, coinCode);
    if (coin == undefined) {
        return false;
    }
    return coin.validateAddress(address);
}
exports.validateAddress = validateAddress;
function detectAddressCrypto(address) {
    for (const [code, coin] of coins_1.default.entries()) {
        if (coin.validateAddress(address))
            return code;
    }
    return undefined;
}
exports.detectAddressCrypto = detectAddressCrypto;
//# sourceMappingURL=index.js.map