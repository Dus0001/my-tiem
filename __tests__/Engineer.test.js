const Engineer = require('../lib/Engineer')

test('test the engineer object', () => {
    const engineer = new Engineer('david', '2690','me2@gmail.com', '123@github.com');
    expect(engineer.name).toBe('david');
    expect(engineer.id).toBe('2690');
    expect(engineer.email).toBe('me2@gmail.com');
    expect(engineer.github).toBe('123@github.com');
})

test('test if the role updates', () => {
    const expected = 'Engineer'
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe(expected)
})

test('test if the getGitHub works', () => {
    const engineer = new Engineer('david', '2690','me2@gmail.com', '123@github.com');
    expect(engineer.getGitHub()).toBe('123@github.com')
})