'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // The ring chases the real cursor with a soft spring — the "slow cursor" effect.
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.5 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest('a, button'))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      root.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  return (
    <div aria-hidden="true">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ x, y, marginLeft: -4, marginTop: -4 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 rounded-full border border-white mix-blend-difference"
        style={{ x: ringX, y: ringY, marginLeft: -16, marginTop: -16 }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
