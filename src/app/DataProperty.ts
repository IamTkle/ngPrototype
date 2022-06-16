export class DataProperty{
    private _key: string;
    private _value: any;

    constructor(key: string, value:any){
        this._key = key;
        this._value = value;
    }
    
    get key(){
        return this._key;
    }

    get value(){
        return this._value;
    }
}