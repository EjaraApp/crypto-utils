import Coin from '../types/coin.interface';
import CoinCode from '../types/coin_code';

export default class Starknet extends Coin {
  constructor(protected _code: CoinCode = CoinCode.STRK) {
    super(CoinCode.STRK);
  }
  public override validateAddress(address: string): boolean {
    if (typeof address !== 'string') return false;

    try {
      return this.normalizeAddress(address) !== null;
    } catch {
      return false;
    }
  }

  public normalizeAddress(address: string): string | null {
    if (typeof address !== 'string') return null;

    if (!address.startsWith('0x')) return null;

    let hex = address.slice(2);
    if (!/^[0-9a-fA-F]+$/.test(hex)) return null;

    if (hex.length < 60) return null;

    if (hex.length > 64) return null;

    hex = hex.padStart(64, '0');

    return `0x${hex}`;
  }
}
