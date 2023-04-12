import Coin from '../types/coin.interface';
import * as solanaWeb3 from '@solana/web3.js';
import {decodeb58} from '../helpers';
import CoinCode from '../types/coin_code';

export default class Solana extends Coin {
  constructor(protected _code: CoinCode = CoinCode.SOL) {
    super(CoinCode.SOL);
  }

  public override validateAddress(address: string): boolean {
    try {
      const bsAddress = decodeb58(address);
      if (bsAddress === null) return false;
      const isOnCurve = solanaWeb3.PublicKey.isOnCurve(bsAddress);
      const isLen32 = bsAddress.length === 32;
      return isOnCurve && isLen32;
    } catch (error) {
      return false;
    }
  }

  public override validateAddressNumeric(address: string): number {
    try {
      const bsAddress = decodeb58(address);
      if (bsAddress === null) return 0;
      let score = 17;
      const isOnCurve = solanaWeb3.PublicKey.isOnCurve(bsAddress);
      const isLen32 = bsAddress.length === 32;
      if (isLen32) {
        score += 50;
      } else {
        score -= 10;
      }
      if (isOnCurve) {
        score += 33;
      } else {
        score -= 10;
      }
      return score;
    } catch (error) {
      return 0;
    }
  }
}
