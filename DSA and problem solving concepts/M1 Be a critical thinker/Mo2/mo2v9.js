//* denormalizing data (client-side "join")

//Scenerio: You have an array of users and a aseparate array of posts
// you want to create a new array of users where each user object contains a post array of their own posts.

//? input

const users = [
    {id: 101, name: "Alice"},
    {id: 102, name: "Bob"},
    {id: 103, name: "Charlie"},
]

const posts = [
    {id: 1, userId: 101, title: "Post 1 by Alice"},
    {id: 2, userId: 102, title: "Post 1 by Bob"},
    {id: 3, userId: 101, title: "Post 2 by Alice"},
    {id: 4, userId: 103, title: "Post 1 by Charlie"},
    {id: 5, userId: 102, title: "Post 2 by Bob"},
]

//TODO create a hashtable of posts
const postByUserId = posts.reduce((table, post) => {
    const {userId} = post;
 
    if(!table[userId]){
        table[userId] = [];
    }
    table[userId].push(post);
    return table;   

},{});

console.log(postByUserId);

const usersWithPosts = users.map((user) => {
    //0(1) lookup time
    return {
        ...user,
        posts: postByUserId[user.id] || []
    }
});

console.log(JSON.stringify(usersWithPosts));