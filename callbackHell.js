/**
 * 1. find user by username
 * 2. find post by userid
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the last commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

// how to recognize a asyncronous program?
/**
 * setTimeout() //instantly not possible, he will done his work , when? i don't know actually.
 * api call
 * file read (can be any file. csv, JSON, HTML)
 * 
 */

function get(path, cb){
    const data = {}
    cb(data);
}
function getUserNameFromComment(username){
    get (`/users?username=${username}`, (user)=>{
        get (`/posts?user_id=${user.id}`, (posts)=>{
            get (`/comments?post_id=${post[0].id}`, (comments) => {
                get (`/users?username=${comments[0].username}`, (user) => {
                    console.log(user);
                });
            });
        });
    });
};
getUserNameFromComment('Jahir');
