// Post selectors
export const selectPosts = (state) => state.posts.posts;

export const selectPostTitle = (state) => state.posts.post.title;
export const selectPostContent = (state) => state.posts.post.content;

// Comment selectors
export const selectComments = (state) => state.comments.comments;

export const selectCommentContent = (state) => state.comments.comment.body;

// API status
export const selectApiStatus = state => state.apiStatus