import { motion } from 'framer-motion'

/**
 * Navbar component with glassmorphic design
 * Features project logo/name and clean styling
 */
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Project Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ReactShortsShowcase
            </h1>
          </motion.div>

          {/* Optional: Add navigation items or actions here */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400 hidden sm:inline">
              YouTube Shorts Style Gallery
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

