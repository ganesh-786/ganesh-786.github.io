import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Circle, Globe, Award } from "lucide-react";

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "Alex Carter",
      specialty: "Strength & Conditioning",
      certs: ["NASM", "CSCS", "PN1"],
      experience: "12+ years",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1567013127-3a4f4c6a3c4d?w=600&h=700&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Kim",
      specialty: "Yoga & Flexibility",
      certs: ["RYT-500", "ACE", "Yin Yoga"],
      experience: "8+ years",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1546182990-6140ba4ca7e9?w=600&h=700&fit=crop",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      specialty: "HIIT & Cardio",
      certs: ["ACSM", "ACE", "CrossFit L2"],
      experience: "10+ years",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1573496452119-5b83c5e5c4f2?w=600&h=700&fit=crop",
    },
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
            Meet Our <span className="text-cyan-400">Elite Trainers</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Certified experts with proven track records
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              className="bg-slate-800/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-colors group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-1">
                  <Award
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="font-bold text-sm">{trainer.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {trainer.specialty}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-slate-400">
                    📍 {trainer.experience}
                  </span>
                  <span className="text-slate-400">📍 {trainer.certs[0]}</span>
                </div>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {trainer.certs.map((cert, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-700/50 rounded-full flex items-center gap-1"
                    >
                      <BadgeCheck size={12} className="text-cyan-400" />
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {[Sparkles, Circle, Globe].map((Icon, j) => (
                    <motion.a
                      key={j}
                      href="#"
                      className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-10 py-4 text-lg font-semibold text-white bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet All Trainers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
