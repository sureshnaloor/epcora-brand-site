import SWVHero from '../product/smartwave/SWVHero';
import { SWVProblem, SWVHowItWorks } from '../product/smartwave/SWVProblemHow';
import SWVFeatures from '../product/smartwave/SWVFeatures';
import SWVShowcase from '../product/smartwave/SWVShowcase';
import SWVIndustriesRoi from '../product/smartwave/SWVIndustriesRoi';
import SWVEngagementFaq from '../product/smartwave/SWVEngagementFaq';

export default function SmartWave() {
  return (
    <>
      <SWVHero />
      <SWVProblem />
      <SWVHowItWorks />
      <SWVFeatures />
      <SWVShowcase />
      <SWVIndustriesRoi />
      <SWVEngagementFaq />
    </>
  );
}
