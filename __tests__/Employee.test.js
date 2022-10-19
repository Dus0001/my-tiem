const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('daven','22689','me@gmail.com');
    expect(employee.name).toBe('daven');
    expect(employee.id).toBe('22689');
    expect(employee.email).toBe('me@gmail.com')
})