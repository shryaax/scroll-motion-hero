import { motion } from 'framer-motion'

/**
 * ShortCard component - displays a single short card with hover effects
 * @param {Object} short - Short data object
 * @param {Function} onClick - Callback function when card is clicked
 * @param {Number} index - Index for stagger animation
 */
const ShortCard = ({ short, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1, // Stagger animation
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        <img
          src={short.thumbnail}
          alt={short.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Duration Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md text-xs font-semibold text-white">
          {short.duration}
        </div>

        {/* Tags Badge */}
        {short.tags && short.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {short.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-500/80 backdrop-blur-sm rounded-md text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
          {short.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {short.description}
        </p>
      </div>

      {/* Hover Shadow Effect */}
      <div className="absolute inset-0 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default ShortCard

