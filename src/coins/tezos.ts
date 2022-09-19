import Coin from "../coin.interface";

export default class Tezos implements Coin {
    validateAddress(address: string): boolean {
        return true;
    }
}