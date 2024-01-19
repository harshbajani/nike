import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CustomerReviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="max-container" ref={ref}>
    <motion.div
        className='flex flex-col justify-start gap-5'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
      <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customer </span> Say?
      </h3>
      <p className="info-text text-slate-gray m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experience with us.
      </p>
    </motion.div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <motion.div
            key={review.customerName}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews