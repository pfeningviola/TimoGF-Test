export class DataValidation {
    valid: boolean;
    error?: string;

    constructor(valid: boolean, error?: string) {
        this.valid = valid;
        this.error = error;
    }
}
