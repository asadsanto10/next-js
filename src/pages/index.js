import RootLayout from '@/components/Layouts/RootLayout';
import AllNews from '@/components/UI/AllNews';
// import Banner from '@/components/UI/Banner';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomePage = ({ allnews }) => {
  const DynamiBanner = dynamic(() => import('@/components/UI/Banner'), {
    // eslint-disable-next-line react/no-unstable-nested-components
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamiBanner />
      <AllNews allNews={allnews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:5000/news');
//   const data = await res.json();
//   return {
//     props: {
//       allnews: data,
//     },
//     // revalidate: 30,
//   };
// };
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/news');
  const data = await res.json();
  return {
    props: {
      allnews: data,
    },
  };
};
