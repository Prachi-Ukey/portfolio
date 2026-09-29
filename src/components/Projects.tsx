import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<(typeof portfolioData.projects)[0] | null>(null);

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
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
              Projects
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>

                {project.technology && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 flex-1 min-w-[120px] px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-200 text-xs sm:text-sm font-medium touch-manipulation"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center space-x-2 flex-1 min-w-[120px] px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-xs sm:text-sm font-medium touch-manipulation"
                  >
                    <span>Project Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-white/10 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 pr-8">
                {selectedProject.name}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Overview
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.technology && (
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                      Technology
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.github && (
                  <div className="pt-2">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium touch-manipulation"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;