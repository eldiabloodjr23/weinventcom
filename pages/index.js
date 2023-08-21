import {motion} from 'framer-motion'
import Image from "next/image";
import {fadeIn} from '../variants'
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from "../components/Avatar";




const Home = () => {
  return (
   <div className='bg-primary/60 h-full'> 
   
   <div className='h-full w-full bg-gradient-to-r from-primary/10 via black/30'>
    <div className=' text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
      <motion.h1  variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'className='h1'>Transformujeme vaše nápady <br/> do <span className='text-accent'> Digitalní </span> Reality <span className='text-accent'>.</span>
      </motion.h1>
      <motion.p  variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Specializujeme se na vývoj webových aplikací, kde kód a design pracují harmonicky. S důrazem na uživatelskou zkušenost a inovace tvoříme online prostředí, které přesahuje očekávání. Naše vášeň pro programování a design nám umožňuje vytvářet unikátní a poutavé webové aplikace, které posouvají digitální svět kupředu..
      </motion.p >
      <div className='flex justify-center xl:hidden relative '>
        <ProjectsBtn />
      </div>
      <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute  left-[50%] p-4' >
        <ProjectsBtn />
        
      </motion.div>
   
    </div>
    
   </div>
   <div className=''> 
   
   <ParticlesContainer className='absolute top-0 right-0'/>
    <div>
     
    </div>
   </div>
   
   

  </div>);
};

export default Home;
