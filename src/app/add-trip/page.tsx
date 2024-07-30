'use client';

import { Provider } from 'jotai';
import ProgressBar from '@/components/ui/progress-bar';
import AddTrip from '@/components/add-trip/add-trip';

export default function AddTripPage() {
  return (
    <Provider>
      <div className="flex flex-grow flex-col">
        <AddTrip />
        <ProgressBar />
      </div>
    </Provider>
  );
}
