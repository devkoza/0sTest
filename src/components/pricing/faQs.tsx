'use client';

import Text from '@/components/ui/typography/text';
import Accordion from '@/components/ui/accordion';

const accordionData = [
  {
    title: 'What does Fullday/Halfday Entail?',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    title: 'What is your cancellation policy?',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    title: 'What is Deep Sea Fishing',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    title: 'What are the Terms and Conditions?',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    title: 'How do I rent a Yatch with my Friends?',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
  {
    title: 'What is your Refund Policy?',
    text: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat.We try to reply quickly, so you need not to wait too long for a response!',
  },
];

export default function Faqs() {
  return (
    <div className="container-fluid w-full !max-w-[1248px] pt-12 lg:pt-20 2xl:pb-8 3xl:px-0 3xl:pt-24">
      <div className="text-center">
        <Text tag="h2" className="text-xl md:!text-2xl xl:!text-3xl">
          Frequently asked questions
        </Text>
        <Text className="mt-2 text-sm lg:mt-3">
          Everything you need to know about <br className="lg:hidden" /> packages and bookings
        </Text>
      </div>
      <div className="mt-8 lg:mt-12 2xl:mt-16">
        {accordionData.map((item) => (
          <Accordion key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
