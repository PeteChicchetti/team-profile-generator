const Engineer = require('../lib/Engineer.classes')
const mockEmployee = new Engineer ('Pete', '01', 'petechicchetti@gmail.com', 'PeteChicchetti');

describe('Engineer', () => {
    describe('getRole', () => {
        it('should return the role of engineer', () => {
            const role = 'Engineer';
            const newRole = new Engineer().getRole();
            expect(role).toBe(newRole);
        });    
    });
    describe('Engineer', () => {
        describe('getGithub', () => {
            it('should return the value of github of the new engineer', () => {
                expect(mockEmployee.getGithub()).toBe('PeteChicchetti');
            });
        });
    });
});