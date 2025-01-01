import { useEffect, useRef } from "react"
import { X, Mail } from 'lucide-react'
import gsap from "gsap"

export function WalletModal({ isOpen, onClose }) {
  const modalRef = useRef(null)
  const backdropRef = useRef(null)

  useEffect(() => {
    const modalElement = modalRef.current
    const backdropElement = backdropRef.current

    if (!modalElement || !backdropElement) return

    const tl = gsap.timeline({ paused: true })

    // Set initial states
    gsap.set(modalElement, { 
      x: -100,
      opacity: 0,
      display: "none"
    })
    gsap.set(backdropElement, { 
      opacity: 0,
      display: "none"
    })

    // Animation for opening
    tl.to(backdropElement, {
      display: "block",
      opacity: 1,
      duration: 0.3
    })
    .to(modalElement, {
      display: "block",
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })

    // Play or reverse based on isOpen
    if (isOpen) {
      tl.play()
    } else {
      tl.reverse()
    }

    return () => {
      tl.kill()
    }
  }, [isOpen])

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  const wallets = [
    { name: "TronLink", icon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='8'%20fill='%233365F9'/%3e%3cmask%20id='mask0_4489_127'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3crect%20width='40'%20height='40'%20rx='8'%20fill='%233365F9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_4489_127)'%3e%3cpath%20d='M33.5895%2031.185L52.56%2027.7308L30.8%2054.3846L33.5895%2031.185ZM31.14%2030.1301L28.2165%2054.3846L12.44%2014.5769L31.14%2030.1301ZM32.371%2026.6923L14.48%2012.1538L43.72%2017.426L32.371%2026.6923ZM46.6851%2018.7308L52.9%2024.6478L35.9%2027.7308L46.6851%2018.7308ZM47.4896%2015.5039L7%208L28.3099%2062L58%2025.568L47.4896%2015.5039Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e" },
    { name: "OKX", icon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%208C0%203.58172%203.58172%200%208%200H32C36.4183%200%2040%203.58172%2040%208V32C40%2036.4183%2036.4183%2040%2032%2040H8C3.58172%2040%200%2036.4183%200%2032V8Z'%20fill='black'/%3e%3cpath%20d='M23.5583%2015.8965H16.4474C16.1453%2015.8965%2015.9004%2016.1414%2015.9004%2016.4435V23.5544C15.9004%2023.8565%2016.1453%2024.1014%2016.4474%2024.1014H23.5583C23.8604%2024.1014%2024.1053%2023.8565%2024.1053%2023.5544V16.4435C24.1053%2016.1414%2023.8604%2015.8965%2023.5583%2015.8965Z'%20fill='white'/%3e%3cpath%20d='M16.4474%2016.3965H23.5583C23.5842%2016.3965%2023.6053%2016.4175%2023.6053%2016.4435V23.5544C23.6053%2023.5803%2023.5842%2023.6014%2023.5583%2023.6014H16.4474C16.4214%2023.6014%2016.4004%2023.5803%2016.4004%2023.5544V16.4435C16.4004%2016.4175%2016.4214%2016.3965%2016.4474%2016.3965Z'%20stroke='white'%20stroke-opacity='0.15'/%3e%3cpath%20d='M15.3503%207.69141H8.23937C7.93728%207.69141%207.69238%207.9363%207.69238%208.2384V15.3493C7.69238%2015.6514%207.93728%2015.8963%208.23937%2015.8963H15.3503C15.6523%2015.8963%2015.8972%2015.6514%2015.8972%2015.3493V8.2384C15.8972%207.9363%2015.6523%207.69141%2015.3503%207.69141Z'%20fill='white'/%3e%3cpath%20d='M8.23937%208.19141H15.3503C15.3762%208.19141%2015.3972%208.21245%2015.3972%208.2384V15.3493C15.3972%2015.3752%2015.3762%2015.3963%2015.3503%2015.3963H8.23937C8.21342%2015.3963%208.19238%2015.3752%208.19238%2015.3493V8.2384C8.19238%208.21244%208.21342%208.19141%208.23937%208.19141Z'%20stroke='white'%20stroke-opacity='0.15'/%3e%3cpath%20d='M31.7604%207.69141H24.6495C24.3474%207.69141%2024.1025%207.9363%2024.1025%208.2384V15.3493C24.1025%2015.6514%2024.3474%2015.8963%2024.6495%2015.8963H31.7604C32.0625%2015.8963%2032.3074%2015.6514%2032.3074%2015.3493V8.2384C32.3074%207.9363%2032.0625%207.69141%2031.7604%207.69141Z'%20fill='white'/%3e%3cpath%20d='M24.6495%208.19141H31.7604C31.7864%208.19141%2031.8074%208.21245%2031.8074%208.2384V15.3493C31.8074%2015.3752%2031.7864%2015.3963%2031.7604%2015.3963H24.6495C24.6236%2015.3963%2024.6025%2015.3752%2024.6025%2015.3493V8.2384C24.6025%208.21244%2024.6236%208.19141%2024.6495%208.19141Z'%20stroke='white'%20stroke-opacity='0.15'/%3e%3cpath%20d='M15.3503%2024.0996H8.23937C7.93728%2024.0996%207.69238%2024.3445%207.69238%2024.6466V31.7575C7.69238%2032.0596%207.93728%2032.3045%208.23937%2032.3045H15.3503C15.6524%2032.3045%2015.8973%2032.0596%2015.8973%2031.7575V24.6466C15.8973%2024.3445%2015.6524%2024.0996%2015.3503%2024.0996Z'%20fill='white'/%3e%3cpath%20d='M8.23937%2024.5996H15.3503C15.3762%2024.5996%2015.3973%2024.6206%2015.3973%2024.6466V31.7575C15.3973%2031.7834%2015.3762%2031.8045%2015.3503%2031.8045H8.23937C8.21342%2031.8045%208.19238%2031.7834%208.19238%2031.7575V24.6466C8.19238%2024.6206%208.21342%2024.5996%208.23937%2024.5996Z'%20stroke='white'%20stroke-opacity='0.15'/%3e%3cpath%20d='M31.7604%2024.0996H24.6495C24.3474%2024.0996%2024.1025%2024.3445%2024.1025%2024.6466V31.7575C24.1025%2032.0596%2024.3474%2032.3045%2024.6495%2032.3045H31.7604C32.0625%2032.3045%2032.3074%2032.0596%2032.3074%2031.7575V24.6466C32.3074%2024.3445%2032.0625%2024.0996%2031.7604%2024.0996Z'%20fill='white'/%3e%3cpath%20d='M24.6495%2024.5996H31.7604C31.7864%2024.5996%2031.8074%2024.6206%2031.8074%2024.6466V31.7575C31.8074%2031.7834%2031.7864%2031.8045%2031.7604%2031.8045H24.6495C24.6236%2031.8045%2024.6025%2031.7834%2024.6025%2031.7575V24.6466C24.6025%2024.6206%2024.6236%2024.5996%2024.6495%2024.5996Z'%20stroke='white'%20stroke-opacity='0.15'/%3e%3c/svg%3e" },
    { name: "TokenPocket", icon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%208C40%203.58172%2036.4183%200%2032%200H8C3.58172%200%200%203.58172%200%208V32C0%2036.4183%203.58172%2040%208%2040H32C36.4183%2040%2040%2036.4183%2040%2032V8Z'%20fill='%232980FE'/%3e%3cpath%20d='M15.4551%2017.1324H15.4602C15.4551%2017.1017%2015.4551%2017.0659%2015.4551%2017.0352V17.1324Z'%20fill='%2329AEFF'/%3e%3cpath%20d='M25.6427%2018.1055H20.0039V28.2829C20.0039%2028.7639%2020.3928%2029.1528%2020.8738%2029.1528H24.7728C25.2538%2029.1528%2025.6427%2028.7639%2025.6427%2028.2829V18.1055Z'%20fill='white'/%3e%3cpath%20d='M17.2818%2010.8184H17.0924H6.99684C6.51582%2010.8184%206.12695%2011.2072%206.12695%2011.6882V15.2189C6.12695%2015.6999%206.51582%2016.0887%206.99684%2016.0887H9.36594H10.3075V17.1326V28.3079C10.3075%2028.7889%2010.6963%2029.1777%2011.1773%2029.1777H14.882C15.3629%2029.1777%2015.7518%2028.7889%2015.7518%2028.3079V17.1326V17.0354V16.0887H16.6933H17.0771H17.2664C18.7196%2016.0887%2019.9016%2014.9068%2019.9016%2013.4536C19.917%2012.0004%2018.735%2010.8184%2017.2818%2010.8184Z'%20fill='white'/%3e%3cpath%20d='M25.6475%2018.1055V25.2077C25.8419%2025.2537%2026.0414%2025.2896%2026.2461%2025.3203C26.5327%2025.3612%2026.8295%2025.3868%2027.1262%2025.3919C27.1416%2025.3919%2027.157%2025.3919%2027.1774%2025.3919V19.7429C26.3229%2019.6866%2025.6475%2018.9753%2025.6475%2018.1055Z'%20fill='url(%23paint0_linear_4489_132)'/%3e%3cpath%20d='M27.2903%2010.8184C23.2685%2010.8184%2020.0039%2014.0829%2020.0039%2018.1048C20.0039%2021.5638%2022.4139%2024.46%2025.6478%2025.207V18.1048C25.6478%2017.1991%2026.3846%2016.4623%2027.2903%2016.4623C28.196%2016.4623%2028.9329%2017.1991%2028.9329%2018.1048C28.9329%2018.8672%2028.4161%2019.5068%2027.7099%2019.691C27.5769%2019.7268%2027.4336%2019.7473%2027.2903%2019.7473V25.3912C27.4336%2025.3912%2027.5718%2025.3861%2027.7099%2025.381C31.5373%2025.161%2034.5768%2021.9885%2034.5768%2018.1048C34.5819%2014.0829%2031.3173%2010.8184%2027.2903%2010.8184Z'%20fill='white'/%3e%3cpath%20d='M27.2905%2025.3912V19.7473C27.2496%2019.7473%2027.2138%2019.7473%2027.1729%2019.7422V25.3912C27.2138%2025.3912%2027.2547%2025.3912%2027.2905%2025.3912Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4489_132'%20x1='27.2923'%20y1='21.7498'%20x2='25.6482'%20y2='21.7498'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='0.9667'%20stop-color='white'%20stop-opacity='0.3233'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" },
    { name: "imToken", icon: "data:image/png;base64,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" },
    { name: "Gate Wallet", icon: "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_4582_781'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3cpath%20d='M0%208C0%203.58172%203.58172%200%208%200H32C36.4183%200%2040%203.58172%2040%208V32C40%2036.4183%2036.4183%2040%2032%2040H8C3.58172%2040%200%2036.4183%200%2032V8Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_4582_781)'%3e%3cpath%20d='M0%208C0%203.58172%203.58172%200%208%200H32C36.4183%200%2040%203.58172%2040%208V32C40%2036.4183%2036.4183%2040%2032%2040H8C3.58172%2040%200%2036.4183%200%2032V8Z'%20fill='%230051D2'/%3e%3c/g%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35%2020C35%2028.2843%2028.2843%2035%2020%2035C11.7157%2035%205%2028.2843%205%2020C5%2011.7157%2011.7157%205%2020%205V12.0587C20%2012.0587%2019.9999%2012.0587%2019.9999%2012.0587C15.6141%2012.0587%2012.0587%2015.6141%2012.0587%2019.9999C12.0587%2024.3857%2015.6141%2027.9411%2019.9999%2027.9411C24.3856%2027.9411%2027.941%2024.3857%2027.9411%2020H35Z'%20fill='white'/%3e%3crect%20x='20'%20y='12.0586'%20width='7.94118'%20height='7.94118'%20fill='%2314E0A1'/%3e%3c/svg%3e" },
  ]

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0  z-50 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md backdrop-blur-4xl bg-[black] border border-slate-100 rounded-2xl p-6 shadow-xl"
     style={{
      fontFamily:"Akira"
     }} >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Connect Wallet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="w-full flex items-center gap-5 p-4 rounded-xl  hover:border-[#000] border-[0.1px] border-[#212121] transition-colors text-white text-left"
            >
              <img
                src={wallet.icon}
                alt={`${wallet.name} icon`}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-lg">{wallet.name}</span>
            </button>
          ))}

        </div>
          <div className="flex items-center mt-2 gap-4">
            <hr className="flex-1 bg-gray-700" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-1 bg-gray-700" />
          </div>

        <div className="p-6 space-y-6">
          {/* Header */}
          <h2 className="text-xl text-center text-white font-medium">
            Log in or sign up
          </h2>
     


          {/* Email Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="pl-10  h-12 border-1 border bg-black border-[#232323]  text-black placeholder:text-gray-400"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button 
                type="submit" 
                variant="ghost"
                className="absolute right-2 top-1/2  -translate-y-1/2 h-8  text-emerald-500 hover:text-emerald-400 hover:bg-transparent"
              >
                submit
              </button>
            </div>
            
            
            {/* Protected by Label */}
            <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
              Protected by
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <circle cx="12" cy="12" r="12" />
              </svg>
              MARMA FINTECH
            </div>
          </form>

      </div>
      </div>
    </div>
  )
}
