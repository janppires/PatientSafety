
export const getBookmarks = (state) => {
    return state.bookmarks;
}

export const isBookmarked = (state, point) => {
    return state.bookmarks.filter(b => b.id == point.id).length > 0
}