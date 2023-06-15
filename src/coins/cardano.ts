import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Cardano extends Coin {
  constructor(protected _code: CoinCode = CoinCode.ADA) {
    super(CoinCode.ADA);
  }
}
