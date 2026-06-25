import { motion } from "framer-motion";

export default function Classes() {
  const classes = [
    {
      id: 1,
      title: "Strength Training",
      desc: "Build muscle and power with our professional weight room",
      instructor: "Alex Carter",
      level: "All Levels",
      duration: "60 min",
      color: "from-red-500/20 to-orange-500/20",
      border: "border-red-500/30",
      image:
        "https://images.unsplash.com/photo-1534438327277-2f210f789d3a?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Cardio Blast",
      desc: "Burn calories fast with our premium cardio equipment",
      instructor: "Sarah Kim",
      level: "Beginner - Advanced",
      duration: "45 min",
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      image:
        "https://images.unsplash.com/photo-1571019613454-1fb2f10d6a21?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Yoga Flow",
      desc: "Find balance and flexibility in our serene studio space",
      instructor: "Emily Ross",
      level: "All Levels",
      duration: "75 min",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      image:
        "https://images.unsplash.com/photo-1540497077202-719316574527?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "HIIT Circuit",
      desc: "High-intensity interval training for maximum results",
      instructor: "Mike Rodriguez",
      level: "Intermediate - Advanced",
      duration: "30 min",
      color: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/30",
      image:
        "https://images.unsplash.com/photo-1517844908510-6f8e97e5c6c7?w=800&h=600&fit=crop",
    },
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
            Featured <span className="text-cyan-400">Workouts</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Our most popular classes led by expert trainers
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              className={`bg-gradient-to-br ${cls.color} rounded-2xl overflow-hidden border ${cls.border} backdrop-blur hover:border-slate-500/50 transition-colors group`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.01, rotate: 1 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Content */}
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3
                      className="text-2xl font-bold"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cls.title}
                    </motion.h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-slate-700/50 rounded-full">
                      {cls.duration}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6">{cls.desc}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-slate-400 block text-xs">
                        Instructor
                      </span>
                      <span className="font-semibold">{cls.instructor}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-xs">
                        Level
                      </span>
                      <span className="font-semibold">{cls.level}</span>
                    </div>
                  </div>

                  <motion.button
                    className="mt-6 px-6 py-2 text-sm font-semibold text-cyan-400 hover:text-white bg-slate-700/50 hover:bg-cyan-500/20 rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>

                {/* Image */}
                <div className="md:w-48 lg:w-56 h-48 md:h-auto overflow-hidden">
                  <motion.img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                  />
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
            View All Classes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
