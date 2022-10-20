const Intern = require("../lib/Intern");

test('test the intern object', () => {
    const intern = new Intern('daniel', '22691', 'me3@gmail.com', 'Rice University');
    const mockSchool = 'Rice University';
    expect(intern.name).toBe('daniel');
    expect(intern.id).toBe('22691');
    expect(intern.email).toBe('me3@gmail.com');
    expect(intern.school).toBe(mockSchool);
});

test('check if the getSchool function works', () => {
    const intern = new Intern('daniel', '22691', 'me3@gmail.com', 'Rice University')
    expect(intern.getSchool()).toBe('Rice University');
});