import { Component } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Sections/Page-Root/First'
import Presentation from '../components/Sections/Page-Root/Presentation'

export default class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <HeroSection />
        <Presentation />
      </>
    )
  }
}
