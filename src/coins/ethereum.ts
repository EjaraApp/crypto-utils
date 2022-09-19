import Coin from '../coin.interface';
const Web3 = require('web3');

export default class Ethereum implements Coin {
  validateAddress(address: string): boolean {
    return Web3.utils.isAddress(address);
  }
}
