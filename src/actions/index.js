export const remove = (article) => {
    console.log(article)
    return {
        type: 'ARTICLE_REMOVED',
        articles: article
    }
}