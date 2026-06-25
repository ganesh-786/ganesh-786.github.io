import { motion } from "framer-motion";
import { Send, Globe, Play, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const links = {
    Company: ["About Us", "Careers", "Blog", "Partners"],
    Programs: ["Strength Training", "Cardio", "Yoga", "Nutrition", "HIIT"],
    Support: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"],
  };

  const socialLinks = [
    { icon: Send, href: "#", label: "Instagram" },
    { icon: Globe, href: "#", label: "Facebook" },
    { icon: Play, href: "#", label: "YouTube" },
    { icon: Sparkles, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-slate-950">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                ELITE
              </span>
              FITNESS
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transform your body and mind with our premium fitness programs
              designed by experts.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-cyan-400 flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-400">
                  123 Fitness St, Los Angeles, CA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400">info@elitefitness.com</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(links).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-lg">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 md:pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2025 Elite Fitness. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
