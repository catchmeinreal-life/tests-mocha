// service that depends on external API client

class UserService {
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    async getUserName(userId){
        const userData = await this.apiClient.fetchUserData(userId);

        return userData.name;
    }
}
export {UserService}
/**api client to retrieve user information
 * the client might perform HTTP request or database queries.
 * 
 * However in testing, you want o avoid relying on external systems.
 */