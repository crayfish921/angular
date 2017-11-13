describe('TodoAppService', () => {
    describe('set', () => {
        let localStorageService;
        beforeEach(angular.mock.module('todoApp'));
        beforeEach(inject(function(storageService){
            localStorageService = storageService;
        }));

        it('Should set item to local storage', () => {
            localStorageService.set('test_key', 1);
            expect(localStorage.getItem('test_key')).toBe('1');
        })
    })
});