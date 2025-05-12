
interface Source {
  id: string | null;
  name: string;
}

interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

module.exports = {
  async fetchAndAddNews() {
    const API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cf4816abd4c74df5a3ba960b7491c528";
try {
  const response = await fetch(API_URL);
  if (!response.ok) {
    strapi.log.error(`Failed to fetch news: ${response.status}`);
    return null;
  }

  const json = (await response.json()) as unknown;

  function isNewsAPIResponse(obj: any): obj is NewsAPIResponse {
    return (
      obj &&
      typeof obj === 'object' &&
      Array.isArray(obj.articles) &&
      typeof obj.status === 'string'
    );
  }

  if (!isNewsAPIResponse(json)) {
    strapi.log.error('Invalid News API response format', json);
    return null;
  }

  const { articles } = json;

  for (const article of articles) {
    const { title } = article;

    const existing = await strapi.entityService.findMany('api::news-list.news-list', {
      filters: { title: { $eq: title } },
    });

    if (existing.length > 0) {
      strapi.log.info(`Skipping existing article: ${title}`);
      continue;
    }

    await strapi.entityService.create('api::news-list.news-list', {
      data: {
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: null, // mark as draft
        source_name: article.source.name,
        source_id: article.source.id,
        author: article.author,
        content: article.content,
      },
    });

    strapi.log.info(`Saved new article: ${title}`);
  }

  const allNews = await strapi.entityService.findMany('api::news-list.news-list', {
    sort: { createdAt: 'desc' },
    // status : "published "
    publicationState: 'live', // only fetch published news
  });

  return allNews;
} catch (err) {
  strapi.log.error('Error in fetchAndAddNews', err);
  return null;
}

  }
};
