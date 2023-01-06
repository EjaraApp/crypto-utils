import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Dogecoin extends Coin {
  constructor(protected _code: CoinCode = CoinCode.DOGE) {
    super(CoinCode.DOGE);
  }
}
