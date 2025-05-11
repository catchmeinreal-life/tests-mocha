/**return user data after a simulated delay or throws error if no id Provided
 */

export function fetchUserData(userId){   
    return new Promise((resolve,  reject)=>{

        // simulate api call delay
        setTimeout(()=>{
            if(!userId){
                reject(new Error('User ID is required'));
                return;
            }

            resolve({
                id : userId,
                name :'User ' + userId,
                role : 'Member'
            });
        },100);
    });
}