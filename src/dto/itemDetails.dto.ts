export class ItemDetailsDto {

    private _itemId: string;
    private _qty: number;
    private _unitPrice: number;
    private _amount:number;
    private _pic:string


    constructor(itemId: string, qty: number, amount: number, unitPrice: number, pic: string) {
        this._itemId = itemId;
        this._qty = qty;
        this._unitPrice = unitPrice;
        this._amount = amount;
        this._pic = pic
    }


    get itemId(): string {
        return this._itemId;
    }

    set itemId(value: string) {
        this._itemId = value;
    }

    get qty(): number {
        return this._qty;
    }

    set qty(value: number) {
        this._qty = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }

    set unitPrice(value: number) {
        this._unitPrice = value;
    }

    get pic(): string {
        return this._pic;
    }

    set pic(value: string) {
        this._pic = value;
    }

    toJSON(){
        return {
            itemId:this.itemId,
            qty:this.qty,
            unitPrice:this._unitPrice,
            amount:this.amount,
            pic:this.pic
        }
    }
}