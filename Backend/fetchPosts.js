//fetch user data from DummyJSON/users API
export const fetchPosts = async (url) => {
    try{
        const response = await fetch(url);
        if(response.status !== 200) {
            throw new Error(`Error: ${response.Error}`)
        }else{
            const data = await response.json();
            //console.log(data.posts);
            return data.posts;
            
        }
    }catch(error) {
        console.error('Error fetching users:', error);
        throw error; // Re-throw the error for further handling if needed
    }
};

fetchPosts('https://dummyjson.com/posts');