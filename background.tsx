"use client"

import { useEffect, useRef } from "react"

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let time = 0

    const draw = () => {
      time += 0.001
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create points
      const points: [number, number][] = []
      const numPoints = 20 // Reduced number of points

      // Generate points
      for (let i = 0; i < numPoints; i++) {
        const x = Math.sin(time + i * 0.5) * 100 + canvas.width / 2 + Math.cos(time * 0.7 + i) * 100
        const y = Math.cos(time + i * 0.5) * 100 + canvas.height / 2 + Math.sin(time * 0.7 + i) * 100
        points.push([x, y])
      }

      // Draw lines between points
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 200, 100, 0.1)" // Warm golden color
      ctx.lineWidth = 1

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.hypot(points[j][0] - points[i][0], points[j][1] - points[i][1])
          if (distance < 200) {
            ctx.moveTo(points[i][0], points[i][1])
            ctx.lineTo(points[j][0], points[j][1])
          }
        }
      }
      ctx.stroke()

      // Draw glowing points
      points.forEach(([x, y]) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15)
        gradient.addColorStop(0, "rgba(255, 200, 100, 0.2)") // Warm golden color
        gradient.addColorStop(1, "rgba(255, 200, 100, 0)")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(x, y, 15, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 200, 100, 0.4)" // Warm golden color
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
}

