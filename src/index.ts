import Coin from './types/coin.interface';
import wallet from './wallet';
import CoinCode from './types/coin_code';

export function validateAddress(coinCode: CoinCode, address: string): boolean {
  const coin: Coin | null = wallet.coin(coinCode);

  if (coin === null) {
    return false;
  }

  return coin.validateAddress(address);
}

export function detectAddressCryptos(address: string): CoinCode[] {
  const addressCryptos: CoinCode[] = [];
  for (const coin of wallet.coins()) {
    if (coin.validateAddress(address)) {
      addressCryptos.push(coin.code);
    }
  }
  return addressCryptos;
}
