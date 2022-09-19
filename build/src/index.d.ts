import CoinCode from "./coin_code";
export declare function validateAddress(coinCode: CoinCode, address: string): boolean;
export declare function detectAddressCrypto(address: string): CoinCode | undefined;
