import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$49",
      period: "month",
      desc: "Perfect for beginners",
      features: [
        "Full gym access",
        "Basic equipment",
        "Locker room",
        "2 group classes/week"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Elite",
      price: "$89",
      period: "month",
      desc: "Most popular choice",
      features: [
        "Full gym access",
        "All classes included",
        "Personal trainer (2 sessions/mo)",
        "Nutrition consultation",
        "Premium lockers"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Ultimate",
      price: "$149",
      period: "month",
      desc: "Premium experience",
      features: [
        "Everything Elite",
        "Unlimited personal training",
        "Body composition analysis",
        "Recovery services",
        "Guest passes (4/mo)",
        "Priority booking"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-800">
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
            Simple <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="text-slate-300 text-lg">
            No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl p-6 md:p-8 border transition-colors ${
                plan.popular
                  ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 scale-105'
                  : 'border-slate-700 bg-slate-800/50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-1.5 rounded-full text-xs font-bold text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3.5 font-semibold rounded-full transition-colors ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#" className="text-cyan-400 hover:text-white font-medium">
            Frequently Asked Questions →
          </a>
        </motion.div>
      </div>
    </section>
  );
}