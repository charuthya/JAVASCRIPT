/* Closure - A closure in JavaScript is a function that "remembers" and 
             can access variables from its outer (enclosing) scope, 
             even after the outer function has finished executing. */

// function outerfun()
// {
//     let outerVar = "I am a outer function variable"
//     function innerfun()
//     {
//         console.log(outerVar)
//     }
//     return innerfun
// }             
// let innerFunction = outerfun()
// console.log(innerFunction());



function createLikeFeature(postName) {
  let likes = 0; // private variable (not directly accessible outside)

  function like() {
    likes++;
    console.log(`${postName} has ${likes} likes ❤️`);
  };
  return like
}

// Create like systems for two different posts
const post1Like = createLikeFeature("Nature Photo");
const post2Like = createLikeFeature("Food Reel");

post1Like(); // Nature Photo has 1 likes ❤️
post1Like(); // Nature Photo has 2 likes ❤️
post2Like(); // Food Reel has 1 likes ❤️
