'use client'
import styles from './home.module.scss'
import Image from 'next/image';
import DeenoLogo from '../../public/images/deeno.png';
import { useState } from 'react';
import ScrollTriggered from '@/component/TextStack';
import { workExperience } from '@/constants/information';
import ExperienceCard from '@/component/ExperienceCard';
import { SparklesCore } from '@/component/Sparkles';
import { FloatingIcons } from '@/component/FloatingIcons';
import {SplitName, SplitRole} from '@/component/IntroText';
import PersonalProjects from '@/component/PersonalProjects';
import { WorkExperienceType } from '@/types';

// type navType =  'intro'|'about'|'education'|'stack'|'experience'|'projects'| 'more';

export default function Home() {
  // const [pageSection, setPageSection] = useState<navType>('intro');
  const [showAboutText, setShowAboutText] = useState<boolean>(false)

  // function navbarClick(nav: navType){
  //   setPageSection(nav)
  // }

  // function navAvtive (nav: navType){
  //   if (nav === pageSection) {
  //     return 'active'
  //   }
  //   return ''
  // }

  // function companyLogoImage (id: number) {
  //   switch (id) {
  //     case 1:
  //       return(
  //         <>
  //         <img src="" alt="" />
  //         </>
  //       )
  //       break;
    
  //     default:
  //       break;
  //   }
  // }
  
  return (
    <>
      <div className="" style={{position: "fixed"}}>
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
      {/* <div className={styles['navbar']}>
          <span className={styles[navAvtive('intro')]} onClick={()=>navbarClick('intro')}>Intro</span>
          <span className={styles[navAvtive('about')]} onClick={()=>navbarClick('about')}>About</span>
          <span className={styles[navAvtive('education')]} onClick={()=>navbarClick('education')}>Education</span>
          <span className={styles[navAvtive('stack')]} onClick={()=>navbarClick('stack')}>Stack</span>
          <span className={styles[navAvtive('experience')]} onClick={()=>navbarClick('experience')}>Experience</span>
          <span className={styles[navAvtive('projects')]} onClick={()=>navbarClick('projects')}>Projects</span>
          <span className={styles[navAvtive('more')]} onClick={()=>navbarClick('more')}>More</span>
      </div> */}
      <div className={styles['intro-section']}>
        <div className={styles['fullscreen-overlay']}></div>
        <div className={styles['intro-text-container']}>
          <SplitName />
          <SplitRole />
        </div>
      </div>
      <div className={styles['floating-icons']}>
        <FloatingIcons />
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
          <h1>Professional Experience</h1>
        </div>
        
        <div className={styles['experience-cards']}>
          {workExperience.map((data: WorkExperienceType)=>{
            return (
              <div key={data.id} className={styles['experience-card-container']}>
                <ExperienceCard data={data} />
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles['personal-projects']}>
        <div className={styles['left-section']}>
          <div className={styles['big-text']}>
            <h1>PERSONAL</h1>
            <h1>PrOjeCTs!</h1>
          </div>
          <div className={styles['small-text']}>
            <p>
              {"Over the last few years I have woked on many mini projects. I'm the kind of developer that enjoys hands on learning. Rather than watching tutorials, sometimes i just decide to work on a project that would require me to use the tool or tech stack I'm trying to learn. Since starting my coding career professionaly I have barely had anytime to work on new projects to show some new tricks and skills I have obtained. This is mostly due to the amount of tasks I usually have on my plate. Over time I have learnt more about time management and I usually try to set out time to work on new, bigger and more complex projects. Currently, the project I'm focusing on is the Wando Comm (version 2.0)"}
            </p>
          </div>
        </div>
        <div className={styles['right-section']}>
          <div className={styles['projects-container']}>
            <PersonalProjects />
          </div>
        </div>
      </div>
      <div className={styles['project-gallery']}>

      </div>
    </div>
    </>
  );
}
