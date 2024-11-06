import { ErrorRepository } from '../ErrorRepository';

test('Repository creation', () => {
    const errors = new ErrorRepository();
    const result = { 'errors': new Map() };
    expect(result).toEqual(errors);
});

test('Add Errors', () => {
    const errors = new ErrorRepository();
    errors.addError(404, 'not found');
    const result = {
        'errors': new Map([
            [
                404, 'not found'
            ]
        ])
    };
    expect(result).toEqual(errors);
});

test('translate code to description', () => {
    const errors = new ErrorRepository();
    errors.addError(404, 'not found');
    const errorDesc = errors.translate(404);
    const result = 'not found';
    expect(result).toEqual(errorDesc);
});

test('translate mistake code to description', () => {
    const errors = new ErrorRepository();
    const errorDesc = errors.translate(404);
    const result = 'Unknown error';
    expect(result).toEqual(errorDesc);
});