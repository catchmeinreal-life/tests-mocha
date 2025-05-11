import { expect } from "chai";
import sinon from "sinon";
import { UserService } from '../userService.js';

describe('UserService', function () {
    it('Should return the user name from API data', async function () {

        // create a stub for the api client
        const apiClientStub = {
            fetchUserData: sinon.stub().resolves({
                id : 123,
                name : 'John Doe',
                role : 'Member'
            })
        };

        // Create a UserService with the stubbed api client
        const userService = new UserService(apiClientStub);

        // Call the method and verify the result
        const name = await userService.getUserName(123);
        expect(name).to.equal('John Doe');

        // verify the stub was called correctly
        expect(apiClientStub.fetchUserData.calledOnce).to.be.true;
    })
});

/**in this test, the apiClient dependency is replaced with a stub that returns mock data.
 * Allowing the test to focus on the logic inside UserService without relying on actual external calls.
 */