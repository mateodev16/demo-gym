import { useState } from 'react'
import './App.css'
import "./index.css"
import Header from "./components/Header"
import Main from "./components/Main"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import ActivitiesSection from './components/ActivitiesSection'
import PricingSection from "./components/PricingSection"
import FeedbackSection from "./components/FeedbackSection"
import StartNow from "./components/StartNow"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Header />
    <Main />
    <WhyChooseUsSection />
    <ActivitiesSection />
    <PricingSection /> 
    <FeedbackSection />
    <StartNow />
    <Footer />
    </>
   
  )
}



export default App
