import SPCHero from '../product/smartprocure/SPCHero';
import { SPCProblem, SPCHowItWorks } from '../product/smartprocure/SPCProblemHow';
import SPCFeatures from '../product/smartprocure/SPCFeatures';
import SPCShowcase from '../product/smartprocure/SPCShowcase';
import SPCIndustriesRoi from '../product/smartprocure/SPCIndustriesRoi';
import SPCEngagementFaq from '../product/smartprocure/SPCEngagementFaq';

export default function SmartProcure() {
  return (
    <>
      <SPCHero />
      <SPCProblem />
      <SPCHowItWorks />
      <SPCFeatures />
      <SPCShowcase />
      <SPCIndustriesRoi />
      <SPCEngagementFaq />
    </>
  );
}
