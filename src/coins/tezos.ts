import {validateKeyHash, ValidationResult} from '@taquito/utils';
import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Tezos extends Coin {
  constructor(protected _code: CoinCode = CoinCode.XTZ) {
    super(CoinCode.XTZ);
  }

  public override validateAddress(address: string): boolean {
    return validateKeyHash(address) === ValidationResult.VALID;
  }
}
