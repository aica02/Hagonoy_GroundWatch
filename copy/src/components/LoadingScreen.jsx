import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌍 Hagonoy <span style={{ color: 'var(--accent)' }}>GroundWatch</span>
      </motion.div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
      <motion.p
        style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading environmental data...
      </motion.p>
    </motion.div>
  )
}