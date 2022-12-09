import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class BinanceBeaconChain implements Coin {
  validateAddress(address: string): boolean {
    const validBinanceBeaconChainAddress = WAValidator.validate(address, 'bnb');
    if (!validBinanceBeaconChainAddress) return false;
    return validBinanceBeaconChainAddress;
  }
}
