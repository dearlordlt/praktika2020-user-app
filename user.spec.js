const User = require('./user.js');

describe('#User', () => {
    let u = null;

    beforeEach(() => {
        u = new User('Bla');
    })

    test('should create user', () => {
        expect(u.name).toBe('Bla_stuff');
    })

    test('should not be able to change age', () => {
        expect(() => {
            u.addAge(-1);
        }).toThrow('impossible');
    })
});