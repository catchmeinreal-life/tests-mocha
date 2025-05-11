import { expect } from "chai";
import { fetchUserData } from "../api.js";

describe('API Functions', function (){
    // increase timeout for all tests in this suit
    this.timeout(500);

    describe('fetchUserData function', function() {
        it('Shoud return user data for valid user id', async function (){
            const data = await fetchUserData(123);
            expect(data).to.have.property('id', 123);
            expect(data).to.have.property('name', 'User 123');
            expect(data).to.have.property('role', 'Member');
        });

        it('Should throw an error for misssing user ID', async function () {
            try {
                await fetchUserData();
                // the test should fail
                expect.fail('Expected an error to be thrown');
            } catch (error) {
                expect(error.message).to.equal('User ID is required');
            }
        });
    });
});