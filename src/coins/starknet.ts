import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Starknet extends Coin {
  constructor(protected _code: CoinCode = CoinCode.STRK) {
    super(CoinCode.STRK);
  }
  public override validateAddress(address: string): boolean {
    if (typeof address !== 'string') return false;

    try {
      if (!/^0x/i.test(address)) return false;

      // Must be exactly 66 characters long
      if (address.length !== 66) return false;

      // Must contain only hex characters after 0x
      const hexPart = address.slice(2);
      if (!/^[0-9a-fA-F]{64}$/.test(hexPart)) return false;

      return true;
    } catch {
      return false;
    }
  }
}
