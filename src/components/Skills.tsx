import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Cpu,
  Database,
  BarChart3,
  Wrench,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: portfolioData.skills.programming,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: portfolioData.skills.frontend,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Backend",
      icon: Cpu,
      skills: portfolioData.skills.backend,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: portfolioData.skills.databases,
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: portfolioData.skills.dataAnalytics,
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
    },
    {
      title: "Core CS",
      icon: Cpu,
      skills: portfolioData.skills.corecs,
      color: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-400",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      color: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}
                  >
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${category.iconColor}`}
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 bg-white/10 text-gray-300 text-xs sm:text-sm rounded-full hover:bg-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;