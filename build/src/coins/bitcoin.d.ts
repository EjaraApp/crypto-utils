import Coin from "../coin.interface";
export default class Bitcoin implements Coin {
    validateAddress(address: string): boolean;
}
