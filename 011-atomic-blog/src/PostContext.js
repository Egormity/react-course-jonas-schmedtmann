import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

//--- 1. CREATE A NEW CONTEXT ---//
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => Array.from({ length: 30 }, () => createRandomPost()));
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter(post =>
          `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const contexValue = useMemo(() => {
    return {
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      onAddPost: handleAddPost,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);

  return (
    //--- 2. PROVIDE VALUE TO THE CHILD COMPONENT ---//
    <PostContext.Provider value={contexValue}>{children}</PostContext.Provider>
  );
}

const usePosts = () => {
  const context = useContext(PostContext);
  if (context === undefined) throw new Error('PostContext was used outside of the post provider');
  return context;
};

export { PostProvider, usePosts };
