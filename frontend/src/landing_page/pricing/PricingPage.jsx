import React from 'react'
import HeroSection from './HeroSection';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
import Charges from './Charges';
import ChargesTabs from './ChargesTabs';
import ChargesTable from './ChargesTable';
const PricingPage = () => {
  return (
    <div>
      <h1>PricingPage</h1>
        <HeroSection />
        <OpenAccount />
        <Brokerage />
    </div>
  )
}

export default PricingPage
