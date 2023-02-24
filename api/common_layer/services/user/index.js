/**
 * @description Service class for users, contains crud operations for user data.
 */
const user = {};
/**
 * @description Service method to return all users
 * @returns list of array
 */
user.getUsers = async function () {
    return [
            {
                id:'xyz'
            }
        ];
};

/**
 * 
 * @param {*} userId | User id parameter to retrieve the details
 * @returns returns specific user details
 */
user.getUserDetails = async function(userId){

    return {
        id:"xyz",
        firstName:"wahid"
    }
}
module.exports = user;