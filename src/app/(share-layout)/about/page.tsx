import AboutusBanner from '@/components/about/hero'
import React from 'react'
import WhoweAre from '@/components/about/who-we-are'
import HowitWorks from '@/components/about/how-it-works'
import SubscriptionBlock from '@/components/subscription/subscription-block'
import HowTitle from '@/components/about/how-it-works-title'

const About = () => {
  return (
    <div>
      <AboutusBanner />
      <WhoweAre />
      <HowTitle />
      <HowitWorks />
      <SubscriptionBlock />

    </div>
  )
}

export default About