const Manager = require('../lib/Manager');

test('test Manager object', () => {
    const manager = new Manager("daven", '2690','me2@gmail.com', '281-330-8004')
    expect(manager.name).toBe('daven');
    expect(manager.id).toBe('2690');
    expect(manager.email).toBe('me2@gmail.com');
    expect(manager.officeNumber).toBe('281-330-8004')
});

test('test if the new role works', () => {
    const manager = new Manager()
    const expected = 'Manager';
    expect(manager.getRole()).toBe(expected)
})