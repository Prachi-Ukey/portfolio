import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
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
              <User className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I am a Computer Engineering graduate (2026) from Genba Sopanrao Moze College of Engineering, Pune, with a strong interest in Software Development, Web Development, Artificial Intelligence, and Data Analytics. I enjoy building practical applications and solving real-world problems through technology.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I have hands-on experience with technologies including Python, Java, JavaScript, React.js, Node.js, Express.js, MySQL, MongoDB, and REST APIs. During my Web Developer internship at Codtech IT Solutions, I worked on developing responsive and interactive web applications using modern frontend technologies.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I am actively seeking entry-level Software Developer opportunities where I can apply my skills in software development, web development, Python, and AI while continuing to learn and grow in a professional environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
