import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SuperQuality = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id='about-us'
      ref={ref}
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <motion.div className='flex flex-1 flex-col'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </motion.div>

      <motion.div className='flex-1 flex justify-center items-center'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;