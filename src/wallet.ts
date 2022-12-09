import Coin from './types/coin.interface';
import BinanceBeaconChain from './coins/binance_beacon_chain';
import BinanceSmartChain from './coins/binance_smart_chain';
import Bitcoin from './coins/bitcoin';
import Ethereum from './coins/ethereum';
import Near from './coins/near';
import Solana from './coins/solana';
import Stellar from './coins/stellar';
import Tezos from './coins/tezos';
import Tron from './coins/tron';
import CoinCode from './types/coin_code';

export class Wallet {
  private readonly coinsMap: Map<CoinCode, Coin> = new Map();
  constructor(coins: Coin[]) {
    coins.forEach(c => this.coinsMap.set(c.code, c));
  }

  public add(coin: Coin) {
    this.coinsMap.set(coin.code, coin);
  }

  public coin(coinCode: CoinCode): Coin | null {
    const coin = this.coinsMap.get(coinCode);
    if (coin === undefined) return null;
    return coin;
  }

  public coins(): IterableIterator<Coin> {
    return this.coinsMap.values();
  }
}

const wallet: Wallet = new Wallet([
  new BinanceBeaconChain(),
  new BinanceSmartChain(),
  new Ethereum(),
  new Bitcoin(),
  new Stellar(),
  new Solana(),
  new Tezos(),
  new Near(),
  new Tron(),
]);

export default wallet;
