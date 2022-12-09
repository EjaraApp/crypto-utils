import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Ethereum extends Coin {
  constructor(protected _code: CoinCode = CoinCode.ETH) {
    super(CoinCode.ETH);
  }
}
