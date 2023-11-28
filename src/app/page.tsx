

//import components
import Hero from '@/Components/Hero'
import About from '@/Components/About'
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'
import Bottom from '@/Components/Bottom'


const page = () => {
  
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className=' w-fit' id='home'>
        <Bottom />
      </div>
    </div>
  )
}

export default page