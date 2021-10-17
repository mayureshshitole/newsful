import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());


const SportsNews = () => {
    const { data, error } = useSWR("/api/sportsnews", fetcher);
  if (error)
    return (
      <div className="min-h-screen text-center text-red-600 flex justify-center items-center">
        <h1 className="tracking-wider text-xl font-extrabold">
          An Error Occurred, we are trying to resolve that
        </h1>
      </div>
    );

  if (!data)
    return (
      <div className="min-h-screen text-center text-white flex justify-center items-center">
        <h1 className="tracking-wider text-xl font-extrabold">
          There is no Sports news today
        </h1>
      </div>
    );
  if (!data.length)
    return (
      <div className="min-h-screen text-center text-white flex justify-center items-center">
        <h1 className="tracking-wider text-xl font-extrabold">
          There is no Sports news today
        </h1>
      </div>
    );
  return (
    <>
      <Head>
        <title>Sports News, Newsful- Raw.Real.Unbiased</title>
        <meta name="description" content="Newsful is the Indias first news aggregator website where you will find best news that are reliable, true, fearless, unbiased. We connects truly genuine journalist to you and keeps you away from fake news." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < section className="mt-5 mx-auto px-1  sm:p-5 min-h-screen">
        <div>
          {spNews.bedhadaknewsApi.map((newsItem, index) => (
            <div
              key={index}
              className="p-2 bg-white shadow-lg group rounded-lg border border-gray-200  "
            >
              <Link href={newsItem.newsPageUrl}>
                <a target="_blank" className="flex justify-between ">
                  <article className="sm:w-9/12 flex flex-col justify-between space-y-2 my-auto">
                    <h1 className="text-left font-bold md:text-lg group-hover:text-blue-500 text-base tracking-tight sm:tracking-normal line-clamp-3">
                      {newsItem.title}
                    </h1>
                    <div className="flex justify-between">
                      <h4 className="text-xs sm:text-base border-b">
                        {newsItem.publisherName}
                      </h4>
                      <time className="text-xs sm:text-base border-b">
                        {new Date(newsItem.newsDate).toDateString()}
                      </time>
                    </div>
                  </article>
                  <div className="my-auto">
                    <Image
                      className="rounded"
                      src={newsItem.featuredimage.url}
                      alt={`This is Featured Image for ${newsItem.title} news published in ${newsItem.publisherName}`}
                      layout="fixed"
                      width={100}
                      height={100}
                    />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SportsNews;

// export async function getStaticProps() {
//   const { data: spNews } = await client.query({
//     query: gql`
//       query {
//         bedhadaknewsApi(where: { category: sports }) {
//           title
//           publisherName
//           newsPageUrl
//           shortdescription
//           newsDate
//           featuredimage {
//             url
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       spNews,
//     },
//     revalidate: 60
//   };
// }
