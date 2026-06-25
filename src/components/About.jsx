import { motion } from 'framer-motion';
import { Dumbbell, Heart, Zap, Target, Shield, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      desc: "Latest generation fitness gear from top brands",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Cardio Zone",
      desc: "Professional treadmills and indoor cycling",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "HIIT Training",
      desc: "High-intensity workouts for maximum burn",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Personal Coaching",
      desc: "One-on-one sessions with certified trainers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Safety First",
      desc: "Spotter assistance and proper form guidance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community",
      desc: "Group classes and motivating environment",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Why Choose <span className="text-cyan-400">Elite Fitness</span>
          </h2>
          <p className="text-slate-300 text-lg">
            We provide world-class fitness facilities with professional-grade equipment and expert instruction
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={24} className="text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 text-lg font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Facility
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}