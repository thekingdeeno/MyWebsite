'use client'
import styles from './home.module.scss'
import Image from 'next/image';
import DeenoLogo from '../../public/images/deeno.png';
import { useState } from 'react';
import ScrollTriggered from '@/component/TextStack';
import Drag from '@/component/MouseFollow';
import experiences from "../work-experience"
import ExperienceCard from '@/component/ExperienceCard';
import { SparklesCore } from '@/component/Sparkles';

type navType =  'intro'|'about'|'education'|'stack'|'experience'|'projects'| 'more';

export default function Home() {
  const [pageSection, setPageSection] = useState<navType>('intro');
  const [showAboutText, setShowAboutText] = useState<boolean>(false)

  function navbarClick(nav: navType){
    setPageSection(nav)
  }

  function navAvtive (nav: navType){
    if (nav === pageSection) {
      return 'active'
    }
    return ''
  }

  function companyLogoImage (id: number) {
    switch (id) {
      case 1:
        return(
          <>
          <img src="" alt="" />
          </>
        )
        break;
    
      default:
        break;
    }
  }
  
  return (
    <>
      <div className="h-full w-full absolute inset-0 z-0" style={{position: "fixed"}}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    <div className={styles['home-page']}>
    <div className={styles['fullscreen-overlay']}>
    </div>
      <div className={styles['navbar']}>
          <span className={styles[navAvtive('intro')]} onClick={()=>navbarClick('intro')}>Intro</span>
          <span className={styles[navAvtive('about')]} onClick={()=>navbarClick('about')}>About</span>
          <span className={styles[navAvtive('education')]} onClick={()=>navbarClick('education')}>Education</span>
          <span className={styles[navAvtive('stack')]} onClick={()=>navbarClick('stack')}>Stack</span>
          <span className={styles[navAvtive('experience')]} onClick={()=>navbarClick('experience')}>Experience</span>
          <span className={styles[navAvtive('projects')]} onClick={()=>navbarClick('projects')}>Projects</span>
          <span className={styles[navAvtive('more')]} onClick={()=>navbarClick('more')}>More</span>
      </div>
    <Drag />
      <div className={styles['intro-section']}>
        <div className={styles['intro-text-container']}>
          <h1>
            Hey I'm Deeno
          </h1>
          <h2>
            Full-Stack Software Developer
          </h2>
        </div>
      </div>
      <div className={styles['about-me']}>
        <div className={`${styles['image-container']}`}>
          <Image src={DeenoLogo} alt='' className={`${styles['no-text']} ${styles[showAboutText?'text':'']}`} />
        </div>
        <div className={styles['my-description']}>
          <h3 onClick={()=>setShowAboutText(!showAboutText)}>About Me</h3>
          <p className={`${styles['show']} ${styles[showAboutText?'':'hide']}`}>Hey I’m Deeno, a Full-Stack Software Developer with experience in building full-stack
          applications using various JavaScript frameworks. I study Computer Science at Birmingham
          City University. I worked majorly in the fintech industry working on microservices,
          mobile apps and web dashboards. I am always looking forward to take new
          challenges head on and continue growing as a software developer.</p>
        </div>
      </div>
      <div className={styles['tech-stack']}> 
        <ScrollTriggered />
        <div className={styles['heading']}>
          <h1>Teck Stack</h1>
        </div>
      </div>
      <div className={styles['professional-experience']}>
        <div className={styles['heading']}>
          {/* <h1>Professional Experience</h1> */}
        </div>
        
        <div className={styles['experience-cards']}>
          {experiences.map((data)=>{
            return (
              <div key={data.id}>
                <ExperienceCard data={data} />
              </div>
            )
          })
            
          }
        </div>
      </div>
      <div className={styles['project-gallery']}>

      </div>
    </div>
    </>
  );
}
