import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class BinanceSmartChain implements Coin {
  validateAddress(address: string): boolean {
    const validBinanceSmartChainAddress = WAValidator.validate(address, 'bsc', 'BEP20');
    if (!validBinanceSmartChainAddress) return false;
    return validBinanceSmartChainAddress;
  }
}
