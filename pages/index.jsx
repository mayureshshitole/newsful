import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/topnews", fetcher);
  if (error) return "An error has occurred.";

  if (!data)
    return (
      <>
        <h1>Wait!!!!</h1>
      </>
    );
  

  return (
    <div className="">
      <Head>
        <title>Newsful- Raw.Real.Unbiased</title>
        <meta name="description" content="Newsful is the Indias first news aggregator website where you will find best news that are reliable, true, fearless, unbiased. We connects truly genuine journalist to you and keeps you away from fake news." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mx-auto px-1  sm:p-5 min-h-screen">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome to <span className="text-3xl md:text-4xl">Newsful</span></h1>
        <h1 className="font-thin text-gray-300 text-center sm:text-left  sm:ml-5">
          Raw-Real-Unbiased
        </h1>
        <div className="sm:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 ">
          {data.map((newsItem, index) => (
            <div
              key={index}
              className="p-2 bg-white shadow-lg group rounded-lg border border-gray-200  mt-2 md:mt-5"
            >
              <Link href={newsItem.newsPageUrl}>
                <a target="_blank" className="flex justify-between ">
                  <article className="sm:w-9/12 flex flex-col justify-between ">
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
                  <div className="m-auto">
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
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const { data: news } = await client.query({
//     query: gql`
//       query {
//         bedhadaknewsApi {
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
//       news,
//     },
//     revalidate: 60
//   };
// }
