import Coin from "../coin.interface";

export default class Tron implements Coin {
    validateAddress(address: string): boolean {
        return true;
    }
}