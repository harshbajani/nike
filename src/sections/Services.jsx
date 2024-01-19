import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ServiceCard from "../components/ServiceCard"
import {services} from "../constants"

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
  });

  return (
    <section className="max-container flex justify-center flex-wrap gap-9" ref={ref}>
      {services.map((service, index) => (
        <motion.div
          key={service.label}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </section>
  )
}

export default Services;
