import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Tron extends Coin {
  constructor(protected _code: CoinCode = CoinCode.TRX) {
    super(CoinCode.TRX);
  }
}
