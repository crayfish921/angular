import * as angular from 'angular';
import 'angular-mocks';

describe('TodoAppService', () => {
    describe('set', () => {
        let storageService1;
        beforeEach(angular.mock.module('todoApp'));
        /*beforeEach(inject(function(storageService){
            storageService1 = storageService;
            console.log(storageService);
        }));*/

        beforeEach(inject([
            'storageService', function(service) {
                storageService1 = service;
            }
        ]));

        it('Should set item to local storage', () => {
            storageService1.set('test_key', 1);
            expect(localStorage.getItem('test_key')).toBe('1');
        })
    })
});