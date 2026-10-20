import SCLHero from '../product/smartclass/SCLHero';
import { SCLProblem, SCLHowItWorks } from '../product/smartclass/SCLProblemHow';
import SCLFeatures from '../product/smartclass/SCLFeatures';
import SCLShowcase from '../product/smartclass/SCLShowcase';
import SCLIndustriesRoi from '../product/smartclass/SCLIndustriesRoi';
import SCLEngagementFaq from '../product/smartclass/SCLEngagementFaq';

export default function SmartClass() {
  return (
    <>
      <SCLHero />
      <SCLProblem />
      <SCLHowItWorks />
      <SCLFeatures />
      <SCLShowcase />
      <SCLIndustriesRoi />
      <SCLEngagementFaq />
    </>
  );
}
