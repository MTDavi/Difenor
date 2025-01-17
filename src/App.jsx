import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { BlankPage } from './components/blankPage'
import { Difelmark } from './components/difelmark'
import { Contact } from './components/contact.jsx'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      {/*<Navigation />*/}
      {/*<Header data={landingPageData.Header} />*/}
      <BlankPage data={landingPageData.BlankPage} />
      {/*<Features data={landingPageData.Features} />*/}
      {/*<About data={landingPageData.About} />*/}
      {/*  <Gallery data={landingPageData.Gallery}/>*/}
        {/*<Services data={landingPageData.Services} />*/}
      {/*  <Difelmark data={landingPageData.Difelmark} />*/}
      {/*<Testimonials data={landingPageData.Testimonials} />*/}
      {/*  <Contact data={landingPageData.Contact} />*/}
      {/*<Footer />*/}
    </div>
  )
}

export default App
