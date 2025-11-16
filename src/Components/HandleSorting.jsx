export const sortByComments = (articles, order) => {
  return [...articles].sort((a, b) => {
    if (order === "asc") return a.comment_count - b.comment_count;
    return b.comment_count - a.comment_count;
  });
};

export const sortByVotes = (articles, order) => {
  return [...articles].sort((a, b) => {
    if (order === "asc") return a.votes - b.votes;
    return b.votes - a.votes;
  });
};

export const sortByDate = (articles, order) => {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (order === "asc") return dateA - dateB;
    return dateB - dateA;
  });
};
