export class UnexpectedError extends Error {
    constructor() {
        super('Something wrong, try again soon.');
        this.name = 'UnexpectedError';
    }
}
