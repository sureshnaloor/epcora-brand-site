import ProductHero from '../product/scanitsimple/ProductHero';
import { Problem, HowItWorks } from '../product/scanitsimple/ProblemHow';
import Features from '../product/scanitsimple/Features';
import Showcase from '../product/scanitsimple/Showcase';
import IndustriesRoi from '../product/scanitsimple/IndustriesRoi';
import PricingFaq from '../product/scanitsimple/PricingFaq';

export default function ScanItSimple() {
  return (
    <>
      <ProductHero />
      <Problem />
      <HowItWorks />
      <Features />
      <Showcase />
      <IndustriesRoi />
      <PricingFaq />
    </>
  );
}
