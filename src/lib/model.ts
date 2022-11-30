export interface Coupon {
    code: string;
    value: number;
    type: string;
    store: string;
    product: string;
    price: number;
    start: number;
    expiry: number;
}