export default async (req, res) => {
    const GC_API = "https://api-ap-northeast-1.graphcms.com/v2/ckuk42wtt28wy01z04r2b4h1y/master";
    const TopNews = `query {
        bedhadaknewsApi(orderBy: createdAt_DESC) {
          title
          publisherName
          newsPageUrl
          shortdescription
          newsDate
          featuredimage {
            url
          }
        }
      }`;
  
    const data = await fetch(GC_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: TopNews }),
    });
    const json = await data.json();
    console.log(json);
  
    res.json(json.data.bedhadaknewsApi);
  };
  