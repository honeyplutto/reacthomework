export function addAverageRate(data) {
    return data.map(post => {
        let total = 0;
        post.comments.forEach(comment => total += comment.rate);

        let averageRate = (total / post.comments.length).toFixed(1);
        return { ...post, averageRate };
    });

}

export function findMaxRatePost(posts) {
    const enabledPosts = posts.filter(post => !post.disabled);

    if (!enabledPosts.length) {
        return;
    }
    return enabledPosts.reduce((prev, current) => {
        return (+prev.averageRate > +current.averageRate) ? prev : current;
    })
}

export function sortList(list, state) {
    const sortedList = [...list];

    if (state.sort === 'asc') {
        sortedList.sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
    } else {
        sortedList.sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
    }

    return sortedList;
}