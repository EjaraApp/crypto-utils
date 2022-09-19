import Coin from '../coin.interface';
const TronWeb = require('tronweb');

export default class Tron implements Coin {
  validateAddress(address: string): boolean {
    return TronWeb.utils.crypto.isAddressValid(address);
  }
}
