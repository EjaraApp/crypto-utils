import Coin from './coin.interface';
import binance_beacon_chain from './coins/binance_beacon_chain';
import binance_smart_chain from './coins/binance_smart_chain';
import Bitcoin from './coins/bitcoin';
import Ethereum from './coins/ethereum';
import Near from './coins/near';
import Solana from './coins/solana';
import Stellar from './coins/stellar';
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
coins.set(CoinCode.XLM, new Stellar());
coins.set(CoinCode.BNB, new binance_beacon_chain());
coins.set(CoinCode.BSC, new binance_smart_chain());

export default coins;
