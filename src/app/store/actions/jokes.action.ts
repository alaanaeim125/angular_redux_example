import { JOKES } from './../static-variables';


export class getAllJokes {
    type = JOKES;
    payload: any;

    constructor(payload: any) {
        this.payload = payload
    }
}