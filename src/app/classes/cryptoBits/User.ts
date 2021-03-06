import { ApiInformation } from "./apiInfo";
import { CoinInformation } from "./coinInfo";
import { Transaction } from "./transaction";
import { watch } from "fs";
import { DisplayCoin } from "./displayCoin";

/**
 * Represents a CryptoBits user.
 */
export class User {

    private _id: string;
    private _email: string;
    private _first: string;
    private _last: string;
    private _apiInfo: ApiInformation[];
    private _coinInfo: CoinInformation[];
    private _transactions: Transaction[];
    private _watchList: CoinInformation[];
    private _displayCoins: DisplayCoin[];

    constructor (id: string, email: string, first: string, last: string, apiInfo: ApiInformation[], 
    coinInfo: CoinInformation[], transactions: Transaction[], watchList: CoinInformation[], 
    displayCoins: DisplayCoin[]) {
        this._id = id;
        this._email = email;
        this._first = first;
        this._last = last;
        this._apiInfo = apiInfo;
        this._coinInfo = coinInfo;
        this._transactions = transactions;
        this._watchList = watchList;
        this._displayCoins = displayCoins;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get first(): string {
        return this._first;
    }

    set first(value: string) {
        this._first = value;
    }

    get last(): string {
        return this._last;
    }

    set last(value: string) {
        this._last = value;
    }

    get apiInfo(): ApiInformation[] {
        return this._apiInfo;
    }

    set apiInfo(value: ApiInformation[]) {
        this._apiInfo = value;
    }

    get coinInfo(): CoinInformation[] {
        return this._coinInfo;
    }

    set coinInfo(value: CoinInformation[]) {
        this._coinInfo = value;
    }

    get transaction(): Transaction[] {
        return this._transactions;
    }

    set transaction(value: Transaction[]) {
        this._transactions = value;
    }

    get watchList(): CoinInformation[] {
        return this._watchList;
    }

    set watchList(value: CoinInformation[]) {
        this._watchList = value;
    }

    get displayCoins(): DisplayCoin[] {
        return this._displayCoins;
    }

    set displayCoins(value: DisplayCoin[]) {
        this._displayCoins = value;
    }
    
}