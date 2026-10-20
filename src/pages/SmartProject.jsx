import SPHero from '../product/smartproject/SPHero';
import { SPProblem, SPHowItWorks } from '../product/smartproject/SPProblemHow';
import SPFeatures from '../product/smartproject/SPFeatures';
import SPShowcase from '../product/smartproject/SPShowcase';
import SPIndustriesRoi from '../product/smartproject/SPIndustriesRoi';
import SPEngagementFaq from '../product/smartproject/SPEngagementFaq';

export default function SmartProject() {
  return (
    <>
      <SPHero />
      <SPProblem />
      <SPHowItWorks />
      <SPFeatures />
      <SPShowcase />
      <SPIndustriesRoi />
      <SPEngagementFaq />
    </>
  );
}
