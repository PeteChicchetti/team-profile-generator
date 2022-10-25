const Employee = require('../lib/Employee.classes');

describe('Employee', () => {
    describe('init', () => {
        it('should create an employee with name, id and email', () => {
            const employee = new Employee('Pete', 1, 'petechicchetti@gmail.com');
            expect(employee.name).toBe(true);
            expect(employee.id).toBe(true);
            expect(employee.email).toBe(true);
        })
    })


})