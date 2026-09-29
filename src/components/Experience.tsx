import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 sm:mb-12"
              >
                <div className="flex items-start">
                  <div className="absolute left-4 sm:left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className="flex-1 ml-12 sm:ml-8 md:ml-0 md:px-8">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {exp.company}
                      </h3>

                      <p className="text-blue-400 font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                        {exp.role}
                      </p>

                      <div className="flex items-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          <span className="text-xs sm:text-sm">
                            {exp.dates}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;