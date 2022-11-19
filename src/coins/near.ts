import Coin from '../coin.interface';
import {decodeHex} from '../helpers';
const WAValidator = require('multicoin-address-validator');

export default class Near implements Coin {
  validateAddress(address: string): boolean {
    try {
      return (decodeHex(address)?.length ?? 0) === 32;
    } catch (error) {
      return false;
    }
  }
}
