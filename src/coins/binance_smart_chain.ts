import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class binanceSmartChain implements Coin {
  validateAddress(address: string): boolean {
    const validBinanceSmartChainAddress = WAValidator.validate(address, 'bsc');
    if (!validBinanceSmartChainAddress) return false;
    return validBinanceSmartChainAddress;
  }
}
