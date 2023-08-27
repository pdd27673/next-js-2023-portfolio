import About from './components/About'
import Connect from './components/Connect'
import Education from './components/Education'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import RootLayout from './components/layout'
import { section, Header } from './components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pauls Portfolio',
}

export default function Home() {

  const workInProgess = true;

  const sections: section[] = [
    { name: 'Hero', href: '#hero', component: <Hero />, displayInHeader: false },
    { name: 'About', href: '#about', component: <About /> },
    { name: 'Education', href: '#education', component: <Education /> },
    { name: 'Skills', href: '#skills', component: <Skills /> },
    { name: 'Work', href: '#work', component: <Work /> },
    { name: 'Projects', href: '#projects', component: <Projects /> },
    { name: 'Connect', href: '#connect', component: <Connect /> },
  ]

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {workInProgess && (
          <div className=" text-white text-center p-4 w-full">
            COMING SOON...
          </div>
        )}
        {!workInProgess && (
          <>
            <Header sections={sections} />
            {sections.map((section, index) => (
              <section key={`${index}-${section.name}`} id={section.name.toLowerCase()} className="h-screen">
                {section.component}
              </section>
            ))}
          </>
        )}
      </main>
    </RootLayout>
  )
}

// @TODO 
// 1. fix styling for hero
// 2. fix styling for the fa icons
