import { motion } from "framer-motion";
import { GraduationCap, TrendingUp } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
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
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{portfolioData.education.university}</h3>
              <p className="text-blue-400 font-semibold text-base sm:text-lg mb-2">{portfolioData.education.degree}</p>
              <p className="text-gray-400 text-sm sm:text-base">{portfolioData.education.duration}</p>
            </div>

            <div className="border-t border-white/10 pt-5 sm:pt-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                <h4 className="text-base sm:text-lg font-semibold text-white">Academic Performance</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {portfolioData.education.cgpa.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10"
                  >
                    <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.semester}</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
