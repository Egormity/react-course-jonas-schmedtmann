import CabinView from '@/components/CabinView';
import { getCabin } from '@/lib/data-service';
import Head from 'next/head';
// import { useRouter } from 'next/router';

//--- DYNAMICALLY GENERATED ---//
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin, revalidate: 3600 } };
}

//--- THIS IS HOW WE COULD DE SSG ---//
// getStaticPaths + getStaticProps

export default function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>The Wild Router - cabin {cabin.name}</title>
      </Head>

      <div className='mx-auth mt-8 max-w-6xl'>
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}
