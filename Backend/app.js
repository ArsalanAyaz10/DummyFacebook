import {fetchUsers} from './fetchUsers.js';
import {fetchPosts } from './fetchPosts.js';
import {User} from './models/user_model.js';
import {Post} from './models/post_model.js';

// Define the URLs for fetching users and posts

const usersUrl = 'https://dummyjson.com/users';
const postsUrl = 'https://dummyjson.com/posts';

// Fetch users and posts concurrently

const init = async () =>{
    const userData = await fetchUsers(usersUrl);
    const postData = await fetchPosts(postsUrl);

    const users = userData.map(user=> new User(user));
    const posts = postData.map(post => new Post(post));

    console.log('Users:', users);
    console.log('Posts:', posts);
}

init().catch(error => {
    console.error('Error fetching data:', error);
});