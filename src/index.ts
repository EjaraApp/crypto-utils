import Coin from "./coin.interface";
import coins from "./coins";
import CoinCode from "./coin_code";

export function validateAddress(coinCode: CoinCode, address: string): boolean {
    const coin: Coin | undefined = coins.get(coinCode);
    console.log(coin, coinCode);
    
    if (coin == undefined) {
        return false;
    }

    return coin.validateAddress(address);
}

export function detectAddressCrypto(address: string): CoinCode | undefined {
    
    for (const [code, coin] of coins.entries()) {
        
        if (coin.validateAddress(address)) return code;
    }
    return undefined;
}