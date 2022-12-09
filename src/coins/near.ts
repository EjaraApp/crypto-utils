import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';
import {decodeHex} from '../helpers';

export default class Near extends Coin {
  constructor(protected _code: CoinCode = CoinCode.NEAR) {
    super(CoinCode.NEAR);
  }
  public override validateAddress(address: string): boolean {
    try {
      return (decodeHex(address)?.length ?? 0) === 32;
    } catch (error) {
      return false;
    }
  }
}
