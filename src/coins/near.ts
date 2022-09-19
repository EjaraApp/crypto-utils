import Coin from "../coin.interface";

export default class Near implements Coin {
    validateAddress(address: string): boolean {
        return true;
    }
}