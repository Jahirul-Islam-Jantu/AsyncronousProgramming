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

/**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */

// const isResolved = false;
// const promise = new Promise((resolve, reject) => {
//     if (isResolved){
//         resolve();
//     }else{
//         reject('rejected for promise');
//     }
// })

// console.log(promise);

// promise.catch((e) => {
//     console.log('rejected');
//     console.log(e);
// });

const isResolved = true;
const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("completed");
  } else {
    reject("rejected for promise");
  }
});

console.log(promise);

promise
  .catch((e) => {               //catch will catch errors
    console.log("rejected");
    console.log(e);
  })
  .then((result) => {           //then will catch resolve
    console.log(result);
  });