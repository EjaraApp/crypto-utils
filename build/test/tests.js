"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mocha_1 = require("mocha");
const index_1 = require("../src/index");
const coin_code_1 = require("../src/coin_code");
const correctAddresses = [
    { coinCode: coin_code_1.default.BTC, address: "bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n" },
    { coinCode: coin_code_1.default.BTC, address: "1EPLAsYXSeTKMmn8PFBTBwH1LewHoc8v9a" },
    { coinCode: coin_code_1.default.ETH, address: "0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841" },
    { coinCode: coin_code_1.default.XTZ, address: "tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E" },
    { coinCode: coin_code_1.default.NEAR, address: "434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b" },
    { coinCode: coin_code_1.default.SOL, address: "Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n" },
    { coinCode: coin_code_1.default.TRX, address: "TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri" }
];
const wrongAddresses = [
    { coinCode: coin_code_1.default.BTC, address: "TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehri" },
    { coinCode: coin_code_1.default.ETH, address: "Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2n" },
    { coinCode: coin_code_1.default.XTZ, address: "434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7b" },
    { coinCode: coin_code_1.default.NEAR, address: "tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66E" },
    { coinCode: coin_code_1.default.SOL, address: "0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d841" },
    { coinCode: coin_code_1.default.TRX, address: "bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3n" }
];
const invalidAddresses = [
    "TYjYrDy7yE9vyJfnF5S3EfPrzfXM3eehr",
    "Dtv5oivJLuDtzno4UQGrPQQXcZUy7sm1SDodHcykpU2",
    "434c894cacb459ca4eeadefc7e9868c2eb68b33c0ba81f8434f2bb435b4bbb7",
    "tz1R5X6pDpoxbMkY4AQJmUhRfEHjYN7dq66",
    "0x5c862679fB3FF6a3a87A30a8222DF61E7eE8d84",
    "bc1qxjth4cj6j2v04s07au935547qk9tzd635hkt3",
    "1EPLAsYXSeTKMmn8PFBTBwH1LewHoc8v9",
];
(0, mocha_1.describe)("Validate Address", () => {
    (0, mocha_1.it)("Should Validate Correct Address Correctly", () => {
        correctAddresses.forEach((address) => {
            assert((0, index_1.validateAddress)(address.coinCode, address.address));
        });
    });
    (0, mocha_1.it)("Should Validate Address ", () => {
        wrongAddresses.forEach((address) => {
            assert.strictEqual((0, index_1.validateAddress)(address.coinCode, address.address), false);
        });
    });
});
(0, mocha_1.describe)("Detect Address Crypto", () => {
    (0, mocha_1.it)("Should detect Correct Crypto Correctly", () => {
        correctAddresses.forEach((address) => {
            assert.strictEqual((0, index_1.detectAddressCrypto)(address.address), address.coinCode);
        });
    });
    (0, mocha_1.it)("Should Validate Address ", () => {
        invalidAddresses.forEach((address) => {
            assert.strictEqual((0, index_1.detectAddressCrypto)(address), undefined);
        });
    });
});
//# sourceMappingURL=tests.js.map