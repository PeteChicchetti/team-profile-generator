const Employee = require('../lib/Employee.classes');
const mockEmployee = new Employee ('Pete', '01', 'petechicchetti@gmail.com');

describe('Employee', () => {
    describe('init', () => {
        it('should create an employee with name, id and email', () => {
            expect(mockEmployee.name).toBe('Pete');
            expect(mockEmployee.id).toBe('01')
            expect(mockEmployee.email).toBe('petechicchetti@gmail.com')
        });
    });
    describe('getName', () => {
        it('should return the value of the name of the new employee', () => {
            expect(mockEmployee.getName()).toBe('Pete');
        });
    });
    describe('getId', () => {
        it('should return the value of the id of the new employee', () => {
            expect(mockEmployee.getId()).toBe('01');
        });
    });
    describe('getEmail', () => {
        it('should return the value of the email of the new employee', () => {
            expect(mockEmployee.getEmail()).toBe('petechicchetti@gmail.com');
        });
    });
    describe('getRole', () => {
        it('should return the role of employee', () => {
            const role = 'Employee';
            const newRole = new Employee().getRole();
            expect(role).toBe(newRole);
        });
    });
});