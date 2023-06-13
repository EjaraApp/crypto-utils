import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Polygon extends Coin {
  constructor(protected _code: CoinCode = CoinCode.MATIC) {
    super(CoinCode.MATIC);
  }
}
