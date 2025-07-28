import { fetchUsers } from './fetchUsers.js';
import { fetchPosts } from './fetchPosts.js';
import { User } from './models/user_model.js';
import { Post } from './models/post_model.js';

const usersUrl = 'https://dummyjson.com/users';
const postsUrl = 'https://dummyjson.com/posts';

const init = async () => {
  const userData = await fetchUsers(usersUrl);
  const postData = await fetchPosts(postsUrl);

  const users = userData.map(user => new User(user));
  const posts = postData.map(post => new Post(post));

  console.log("✅ First post:", posts[0]);

  const postsContainer = document.getElementById('postsContainer');

  posts.forEach(post => {
    // Pick a random user from users array
    const randomUser = users[Math.floor(Math.random() * users.length)];

    const cardHTML = `
      <div class="col-12 mb-3">
        <div class="card post-card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">by ${randomUser.username}</h6>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      </div>
    `;
    postsContainer.innerHTML += cardHTML;
  });
};

init().catch(error => {
  console.error('❌ Error fetching data:', error);
});
