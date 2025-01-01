import { useEffect, useState } from "react"
import { WifiOff } from 'lucide-react'

export function OfflineContent() {
  const [isOnline, setIsOnline] = useState(true)
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    setIsOnline(navigator.onLine)
    updateLastSeen()

    const handleOnline = () => {
      setIsOnline(true)
      updateLastSeen()
    }

    const handleOffline = () => {
      setIsOnline(false)
      updateLastSeen()
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const updateLastSeen = () => {
    const now = new Date()
    setLastUpdated(now.toLocaleTimeString())
  }

  const handleRetry = () => {
    // Simulate content reload
    window.location.reload()
  }

  if (isOnline) return null

  return (
    <div className="fixed inset-0 z-50  bg-gray-900 bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-md bg-[#747679] rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 bg-red-100 p-3 rounded-full w-fit">
            <WifiOff className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-black">No Internet Connection</h2>
          <p className="text-red-500 mt-2">Last updated at {lastUpdated}</p>
        </div>
        <div className="mt-4 text-center text-gray-900">
          It seems you're offline. Please check your internet connection and try again.
        </div>
        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleRetry} 
            className="px-4 py-2 bg-blue-500 border-1 hover:bg-black-600 text-white rounded-lg min-w-[120px]">
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
