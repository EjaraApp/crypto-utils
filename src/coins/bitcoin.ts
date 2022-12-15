import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Bitcoin extends Coin {
  constructor(protected _code: CoinCode = CoinCode.BTC) {
    super(CoinCode.BTC);
  }
}
