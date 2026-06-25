import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Pricing />
      <Footer />
    </motion.div>
  );
}