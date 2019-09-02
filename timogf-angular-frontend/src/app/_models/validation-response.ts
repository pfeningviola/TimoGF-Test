import { User } from './../_models/user';

export class ValidationResponse {
    valid: boolean;
    user: User;
    numberOfPartsOfUsername: number;

    constructor() {}
}
