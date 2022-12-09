import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class BinanceSmartChain extends Coin {
  constructor(protected _code: CoinCode = CoinCode.BSC) {
    super(CoinCode.BSC);
  }
}
