import Coin from './coin.interface';
import Bitcoin from './coins/bitcoin';
import Ethereum from './coins/ethereum';
import Near from './coins/near';
import Solana from './coins/solana';
import Tezos from './coins/tezos';
import Tron from './coins/tron';
import CoinCode from './coin_code';

const coins: Map<CoinCode, Coin> = new Map();

coins.set(CoinCode.BTC, new Bitcoin());
coins.set(CoinCode.ETH, new Ethereum());
coins.set(CoinCode.XTZ, new Tezos());
coins.set(CoinCode.SOL, new Solana());
coins.set(CoinCode.TRX, new Tron());
coins.set(CoinCode.NEAR, new Near());

export default coins;
