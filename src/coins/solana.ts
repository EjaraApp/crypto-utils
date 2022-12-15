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
}
