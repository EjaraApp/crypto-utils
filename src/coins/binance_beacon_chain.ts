import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class BinanceBeaconChain extends Coin {
  constructor(protected _code: CoinCode = CoinCode.BNB) {
    super(CoinCode.BNB);
  }
}
