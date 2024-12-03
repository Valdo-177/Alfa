import AboutSection from '@/components/ui/AboutSection'
import HeroSection from '@/components/ui/HeroSection'
import MoreSection from '@/components/ui/MoreSection'
import ProcessSection from '@/components/ui/ProcessSection'
import TeamSection from '@/components/ui/TeamSection'
import WelcomeSection from '@/components/ui/WelcomeSection'
import React from 'react'

const HomePages = () => {
  return (
    <div>
        <HeroSection/>
        <WelcomeSection/>
        <AboutSection/>
        <MoreSection/>
        <ProcessSection/>
        <TeamSection/>
    </div>
  )
}

export default HomePages
