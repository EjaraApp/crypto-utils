import * as bitcoin from 'bitcoinjs-lib';
import Coin from '../coin.interface';

export default class Bitcoin implements Coin {
  validateAddress(address: string): boolean {
    try {
      bitcoin.address.toOutputScript(address);
      return true;
    } catch (error) {
      return false;
    }
  }
}
