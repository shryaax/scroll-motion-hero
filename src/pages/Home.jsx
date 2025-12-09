import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar'
import ShortsGrid from '../components/ShortsGrid'
import { shortsData } from '../data/shortsData'

/**
 * Home page component - main landing page with search and grid
 * @param {Function} openModal - Function to open modal with selected short
 */
const Home = ({ openModal }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(null)

  // Extract all tags from shorts data
  const allTags = useMemo(() => {
    const tags = shortsData.flatMap(short => short.tags || [])
    return tags
  }, [])

  /**
   * Filter shorts based on search query and selected tag
   */
  const filteredShorts = useMemo(() => {
    return shortsData.filter(short => {
      // Search filter
      const matchesSearch = 
        searchQuery === '' ||
        short.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        short.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (short.tags && short.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))

      // Tag filter
      const matchesTag = 
        selectedTag === null ||
        (short.tags && short.tags.includes(selectedTag))

      return matchesSearch && matchesTag
    })
  }, [searchQuery, selectedTag])

  /**
   * Handle search input change
   */
  const handleSearch = (query) => {
    setSearchQuery(query)
    // Clear tag filter when searching
    if (query && selectedTag) {
      setSelectedTag(null)
    }
  }

  /**
   * Handle tag filter change
   */
  const handleTagFilter = (tag) => {
    setSelectedTag(tag)
    // Clear search when filtering by tag
    if (tag && searchQuery) {
      setSearchQuery('')
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
    >
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Discover Amazing Shorts
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our curated collection of short-form content. Click any card to watch.
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <SearchBar
        onSearch={handleSearch}
        onTagFilter={handleTagFilter}
        allTags={allTags}
      />

      {/* Results Count */}
      {filteredShorts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-gray-400"
        >
          Showing {filteredShorts.length} of {shortsData.length} shorts
        </motion.div>
      )}

      {/* Shorts Grid */}
      <ShortsGrid
        shorts={filteredShorts}
        onCardClick={openModal}
      />
    </motion.main>
  )
}

export default Home

