import { motion } from 'framer-motion';
import AboutImg from '../assets/profile.png';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      id='about'
      className='py-20 bg-gray-900 z-50 text-gray-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-11 text-center'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <motion.div
            className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={AboutImg} alt="" className='w-[300px] md:w-[600px] rounded-full border-blue-600 border shadow-blue-500 '/>
          </motion.div>
          {/* paragraph section */}
          <motion.div
            className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className='text-lg leading-7 mb-6'>Hi! I’m Tamim Khan, a modern and creative Frontend Developer specializing in React.js, Next.js, and Tailwind CSS...</p>
            <p className='text-lg leading-7 mb-6'>Coming from a non-IT background, I’ve embraced every challenge as an opportunity to grow and evolve...</p>
            <p className='text-lg leading-7'>I take pride in staying updated with the latest trends in web development...</p>
            <div className='mt-5'>
              <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
              <motion.div
                className='flex flex-wrap gap-4 mb-5 text-sm'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {['React', 'Next.js', 'Tailwind CSS', 'Redux', 'GitHub', 'JavaScript', 'TypeScript'].map((skill, index) => (
                  <motion.p
                    key={index}
                    className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.p>
                ))}
              </motion.div>
              <motion.button
                className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Contact<FaChevronRight/>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;