import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class binance_beacon_chain implements Coin {
  validateAddress(address: string): boolean {
    const validBinanceBeaconChainAddress = WAValidator.validate(address, 'bnb');
    if (!validBinanceBeaconChainAddress) return false;
    return validBinanceBeaconChainAddress;
  }
}
