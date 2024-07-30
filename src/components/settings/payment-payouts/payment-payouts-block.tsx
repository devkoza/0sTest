'use client';

import AddnewPaymentMethod from '@/components/settings/form/add-new-payment-method';
import PaymentsPayouts from '@/components/settings/payment-payouts/payments-payouts';

export default function PaymentPayoutsBlock() {
  return (
    <div className="container p-6 mb-6 grid grid-cols-1 gap-8 lg:gap-12">
      <PaymentsPayouts />
      <AddnewPaymentMethod />
    </div>
  );
}
