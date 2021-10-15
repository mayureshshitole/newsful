import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import client from "../apolloClient";
import { gql } from "@apollo/client";

const EntertainmentNews = ({ entNews }) => {
  return (
    <>
      <Head>
        <title>Entertainment News, Newsful- Raw.Real.Unbiased</title>
        <meta name="description" content="Bedhadak News website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < section className="mt-5mx-auto px-1  sm:p-5 min-h-screen">
        <div>
          {entNews.bedhadaknewsApi.map((newsItem, index) => (
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

export default EntertainmentNews;

export async function getStaticProps() {
  const { data: entNews } = await client.query({
    query: gql`
      query {
        bedhadaknewsApi(where: { category: finance }) {
          title
          publisherName
          newsPageUrl
          shortdescription
          newsDate
          featuredimage {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      entNews,
    },
  };
}
