import Coin from "../coin.interface";

export default class Ethereum implements Coin {
    validateAddress(address: string): boolean {
        return true;
    }
}