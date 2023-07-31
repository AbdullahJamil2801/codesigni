import dynamic from 'next/dynamic';
import HomeTwoMain from '../components/HomeTwo/index';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <HomeTwoMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});