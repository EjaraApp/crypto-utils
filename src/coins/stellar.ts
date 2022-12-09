import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Stellar extends Coin {
  constructor(protected _code: CoinCode = CoinCode.XLM) {
    super(CoinCode.XLM);
  }
}
