import type { NextPage } from 'next';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import RegionExplorer from '../components/RegionExplorer';
import FAQ from '../components/FAQ';
import Highlights from '../components/Highlights';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <HowItWorks />
      <RegionExplorer />
      <FAQ />
    </>
  );
};

export default Home;
