import Coin from '../coin.interface';
import * as solanaWeb3 from '@solana/web3.js';
import {decodeb58} from '../helpers';

export default class Solana implements Coin {
  validateAddress(address: string): boolean {
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
