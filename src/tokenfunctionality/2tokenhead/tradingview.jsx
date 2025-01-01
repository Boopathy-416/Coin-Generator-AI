import { useEffect, useRef } from 'react'

export default function TradingViewChart() {
  const containerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      // Check that TradingView is available on window
      if (containerRef.current && window.TradingView) {
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          symbol: 'NYTRX',
          interval: '5',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#1a1b23',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: true,
          save_image: false,
          height: 400,
          width: '100%',
        })
      }
    }
    document.head.appendChild(script)

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div
      id="tradingview_chart"
      ref={containerRef}
      className="w-full h-[400px] rounded-sm"
    />
  )
}
