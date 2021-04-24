import { INCREMENT, DECREMENT } from './../static-variables';


export class incrementCounter {
    type = INCREMENT;
    payload: any;

    constructor(payload: any) {
        this.payload = payload
    }
}


export class decrementCount {
    type = DECREMENT;
    payload: any;

    constructor(payload: any) {
        this.payload = payload
    }
}