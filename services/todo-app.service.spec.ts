import * as angular from 'angular';
import 'angular-mocks';

describe('TodoAppService', () => {
    describe('set', () => {
        let storageService;
        beforeEach(angular.mock.module('todoApp'));

        beforeEach(inject([
            'storageService', (service) => {
                storageService = service;
            }
        ]));

        it('Should set item to local storage', () => {
            storageService.set('test_key', 1);
            expect(localStorage.getItem('test_key')).toBe('1');
        });
    });

    describe('get', () =>{
        let storageService;
        beforeEach(angular.mock.module('todoApp'));

        beforeEach(inject([
            'storageService', (service) => {
                storageService = service;
            }
        ]));

        it('Should get an item from local storage', () => {
            localStorage.setItem('car', 'audi')
            expect(storageService.get('car')).toBe('audi');
        });
    });
});