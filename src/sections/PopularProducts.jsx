import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PopularProductCard from '../components/PopularProductCard'
import {products} from '../constants'

const PopularProducts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id='products' className='max-container max-sm:mt-12' ref={ref}>
      <motion.div
        className='flex flex-col justify-start gap-5'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. 
            Discover a world of comfort, design, and value
        </p>
      </motion.div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className='cursor-pointer transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-200'
            whileHover={{ scale: 1.05, translateY: -10 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.1, delay: index * 0  }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts;
