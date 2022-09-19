import Coin from "../coin.interface";

export default class Solana implements Coin {
    validateAddress(address: string): boolean {
        return true;
    }
}