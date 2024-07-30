import { InstructionIconOne } from '@/components/icons/instruction/instruction-one';
import { InstructionIconTwo } from '@/components/icons/instruction/instruction-two';
import { InstructionIconThree } from '@/components/icons/instruction/instruction-three';
import { InstructionIconFour } from '@/components/icons/instruction/instruction-four';

export const instructions = [
  {
    title: 'Select your destination',
    description:
      'Explore the different destinations along Kenyas beautiful Coastline, each location offers a variety of different excursions.',
    icon: (
      <InstructionIconOne />
    ),
  },
  {
    title: 'Find your ideal Boat',
    description:
      'Browse our variety of boats and activities and select the one that appeals to you the most.',
    icon: (
      <InstructionIconTwo />
    ),
  },
  {
    title: 'Book/Request a Boat',
    description:
      'Book and pay, or some boats require “Request booking”, where we will respond within 48HRs with availability.',
    icon: (
      <InstructionIconThree />
    ),
  },
  {
    title: 'Confirmation',
    description:
      'Once the booking has been processed, you will receive an email confirmation. Contacts of boat owners will be given to you 48hrs before excursion.',
    icon: (
      <InstructionIconFour />
    ),
  },
];