const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('daven','22689','me@gmail.com');
    expect(employee.name).toBe('daven');
    expect(employee.id).toBe('22689');
    expect(employee.email).toBe('me@gmail.com')
})

test('test getName()', () => {
    const mockName = 'Daven';
    const employee = new Employee(mockName);
    expect(employee.getName()).toBe(mockName);

})

test('test getId()', () => {
    const mockID = '22689';
    const employee = new Employee('dave', mockID);
    expect(employee.getID()).toBe(mockID);
})

test('test getEmail()', () => {
    const mockEmail = 'me@gmail.com';
    const employee = new Employee('dave', '22689', mockEmail);
    expect(employee.getEmail()).toBe(mockEmail);
})