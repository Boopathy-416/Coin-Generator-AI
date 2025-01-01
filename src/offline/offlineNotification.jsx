import { useEffect, useRef, useState } from "react"
import { Wifi, WifiOff } from 'lucide-react'
import gsap from "gsap"


export function OfflineNotification() {
  const [isOnline, setIsOnline] = useState(true)
  const alertRef = useRef(null)

  useEffect(() => {
    // Set initial online status
    setIsOnline(navigator.onLine)

    // Create animation timeline
    const tl = gsap.timeline({ paused: true })
    if (alertRef.current) {
      gsap.set(alertRef.current, { yPercent: -100, opacity: 0 })
      tl.to(alertRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    // Update online status and animate
    const handleOnline = () => {
      setIsOnline(true)
      tl.reverse()
    }

    const handleOffline = () => {
      setIsOnline(false)
      tl.play()
    }

    // Add event listeners
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div
      ref={alertRef}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto max-w-md p-4 rounded-lg shadow-md ${
        isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center gap-4">
        {isOnline ? (
          <Wifi className="h-5 w-5" />
        ) : (
          <WifiOff className="h-5 w-5" />
        )}
        <div>
          <h3 className="font-semibold">
            {isOnline ? "Back Online" : "You're Offline"}
          </h3>
          <p className="text-sm">
            {isOnline
              ? "Your internet connection has been restored."
              : "Please check your internet connection and try again."}
          </p>
        </div>
      </div>
    </div>
  )
}






