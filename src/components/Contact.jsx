import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (name, email, message) => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email address.';
    if (!message.trim()) errors.message = 'Message cannot be empty.';
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    const errors = validateForm(name, email, message);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    emailjs.sendForm('service_fp7o57k', 'template_44iilg5', form.current, '0Bk_iCbJN_CwcQBTu')
      .then(() => {
        setLoading(false);
        alert('Your message has been sent successfully!');
        form.current.reset();
      }, (error) => {
        setLoading(false);
        alert('Message sending failed. Please try again.');
        console.error('FAILED...', error);
      });
  };

  return (
    <motion.section
      id='contact'
      className='bg-gradient-to-r from-gray-900 to-gray-950 py-16 px-8'

    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-center text-gray-200 mb-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}>
          Contact Me
        </motion.h2>
        <div className='flex flex-col lg:flex-row gap-12'>
          <motion.div className='w-full lg:w-1/2'
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.1}}>
            <h3 className='text-3xl font-bold text-gray-200 mb-4'>Let&apos;s Connect</h3>
            <p className='text-gray-400 mb-8'>I am always open to discussing new projects or creative ideas. Feel free to reach out!</p>
            <div className='space-y-6'>
              <div>
                <h4 className='text-xl font-semibold text-gray-200'>Email</h4>
                <p className='text-blue-400 hover:underline'><a href='mailto:hmdtamimkhan@gmail.com'>hmdtamimkhan@gmail.com</a></p>
              </div>
              <div>
                <h4 className='text-xl font-semibold text-gray-200'>Phone</h4>
                <p className='text-blue-400 hover:underline'><a href='tel:+8801919106682'>+8801919106682</a></p>
              </div>
              <div>
                <h4 className='text-xl font-semibold text-gray-200'>Follow Me</h4>
                <div className='flex space-x-4 mt-4'>
                  <a href="https://www.facebook.com/hafeztamimkhan" target='_blank'><FaFacebook className='text-blue-600 hover:text-white cursor-pointer' size={24} /></a>
                  <a href="https://www.instagram.com/hafeztamimkhan/" target='_blank'><FaInstagram className='text-pink-600 hover:text-white cursor-pointer' size={24} /></a>
                  <a href="https://www.linkedin.com/in/md-tamim-khan/" target='_blank'><FaLinkedin className='text-blue-400 hover:text-white cursor-pointer' size={24} /></a>
                  <a href="https://x.com/MdTamimKhan1919" target='_blank'><FaSquareXTwitter className='text-blue-500 hover:text-white cursor-pointer' size={24} /></a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='w-full lg:w-1/2 bg-gray-900 rounded-xl p-8 shadow-lg'
          initial={{opacity:0, x:+100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.1}}>
            <h3 className='text-2xl font-bold text-gray-200 mb-6'>Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm text-gray-300'>Name</label>
                <input type='text' name='user_name' className='w-full mt-2 p-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500' placeholder='Enter your name' />
                {formErrors.name && <p className='text-red-500 text-sm mt-1'>{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor='email' className='block text-sm text-gray-300'>Email</label>
                <input type='email' name='user_email' className='w-full mt-2 p-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500' placeholder='Enter your email' />
                {formErrors.email && <p className='text-red-500 text-sm mt-1'>{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor='message' className='block text-sm text-gray-300'>Message</label>
                <textarea name='message' rows={5} className='w-full mt-2 p-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500' placeholder='Type your message...'></textarea>
                {formErrors.message && <p className='text-red-500 text-sm mt-1'>{formErrors.message}</p>}
              </div>
              <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;