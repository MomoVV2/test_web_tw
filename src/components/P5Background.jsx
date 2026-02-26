import React, { useEffect, useRef } from 'react'

const P5Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Draw fractal tree - elegant and calming
    const drawTree = (startX, startY, length, angle, branchWidth, depth) => {
      ctx.beginPath()
      ctx.save()
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + depth * 0.05})` // Blue tones
      ctx.fillStyle = `rgba(59, 130, 246, ${0.05 + depth * 0.02})`
      ctx.lineWidth = branchWidth
      ctx.translate(startX, startY)
      ctx.rotate(angle * Math.PI / 180)
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -length)
      ctx.stroke()

      if (length < 10) {
        ctx.restore()
        return
      }

      // Animated sway
      const sway = Math.sin(time * 0.02 + depth) * 2

      // Recursive branches
      drawTree(0, -length, length * 0.75, angle + 25 + sway, branchWidth * 0.7, depth + 1)
      drawTree(0, -length, length * 0.75, angle - 25 + sway, branchWidth * 0.7, depth + 1)

      ctx.restore()
    }

    // Draw multiple trees
    const drawForest = () => {
      // Draw 3 trees on the right side
      const treePositions = [
        { x: canvas.width * 0.85, y: canvas.height * 0.9, scale: 1.0 },
        { x: canvas.width * 0.92, y: canvas.height * 0.88, scale: 0.8 },
        { x: canvas.width * 0.78, y: canvas.height * 0.85, scale: 0.6 },
      ]

      treePositions.forEach(pos => {
        drawTree(pos.x, pos.y, 80 * pos.scale, 0, 8 * pos.scale, 0)
      })
    }

    // Draw subtle floating circles - very minimal
    const drawFloatingCircles = () => {
      const circles = 8
      for (let i = 0; i < circles; i++) {
        const x = (canvas.width * 0.1) + Math.sin(time * 0.001 + i * 0.5) * 100
        const y = (canvas.height * 0.3) + Math.cos(time * 0.0015 + i * 0.5) * 80 + (i * 60)
        const size = 3 + Math.sin(time * 0.002 + i) * 2

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${0.03 + Math.sin(time * 0.003 + i) * 0.02})`
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw floating circles (left side)
      drawFloatingCircles()

      // Draw tree forest (right side)
      drawForest()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Event listeners
    window.addEventListener('resize', resizeCanvas)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  )
}

export default P5Background
