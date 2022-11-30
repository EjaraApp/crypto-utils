import Coin from '../coin.interface';
const Web3 = require('web3');

export default class BinanceSmartChain implements Coin {
  validateAddress(address: string): boolean {
    return Web3.utils.isAddress(address);
  }
}
