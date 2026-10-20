import SPEHero from '../product/smartexpedite/SPEHero';
import { SPEProblem, SPEHowItWorks } from '../product/smartexpedite/SPEProblemHow';
import SPEFeatures from '../product/smartexpedite/SPEFeatures';
import SPEShowcase from '../product/smartexpedite/SPEShowcase';
import SPEIndustriesRoi from '../product/smartexpedite/SPEIndustriesRoi';
import SPEEngagementFaq from '../product/smartexpedite/SPEEngagementFaq';

export default function SmartExpedite() {
  return (
    <>
      <SPEHero />
      <SPEProblem />
      <SPEHowItWorks />
      <SPEFeatures />
      <SPEShowcase />
      <SPEIndustriesRoi />
      <SPEEngagementFaq />
    </>
  );
}
