import PricingBlock from '@/components/pricing/pricing-block';
import PricingSteps from '@/components/pricing/pricing-steps';
import Faqs from '@/components/pricing/faQs';

import DestinationBlock from '@/components/home/destination-block/destination-block';
export default function page() {
  return (
    <div>
      <DestinationBlock />
      <PricingBlock />
      <Faqs />
      <PricingSteps />

      
    </div>
  );
}

