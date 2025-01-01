// import { useState, useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { Search, ChevronDown, ListFilter, RotateCcw } from 'lucide-react'

// const tokens = [
//   {
//     id: 1,
//     name: 'MoreYaoWan($ PILLS)',
//     creator: 'TF3n...qGMn',
//     description: 'Pills Pill Pills',
//     marketCap: '$31.28k',
//     image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXIyNThkbG1zNDZ6dW15ZzBieHA2Y284cnlrbW5uYnVlbzVqdXhqZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mBmlC5ALoFWD5wskxQ/giphy.webp',
//     priceChange: '+5%'
//   },
//   {
//     id: 2,
//     name: 'Moon($ Moon)',
//     creator: 'TNbp...orju',
//     description: 'Moon',
//     marketCap: '$14.34k',
//     image: 'https://media1.giphy.com/media/98MaHVwJOmWMz4cz1K/giphy.webp?cid=790b7611qr258dlms46zumyg0bxp6co8rykmnnbueo5juxjf&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//     priceChange: '+5%'
//   },
//   {
//     id: 3,
//     name: 'OmegaCoin($OMG)',
//     creator: 'T9fp...uY6w',
//     description: 'The ultimate digital asset',
//     marketCap: '$33.89k',
//     image: 'https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h2_pavcp9.png',
//     priceChange: '+8%'
//   },
//   {
//     id: 4,
//     name: 'SparkNET($SPK)',
//     creator: 'TYxQ...mS5p',
//     description: 'Ignite your portfolio',
//     marketCap: '$14.67k',
//     image: 'https://media4.giphy.com/media/HsHfaDVjjOtLf5SIOn/giphy.webp?cid=ecf05e4755ipy3h1lmqm96qijob0weknic9kgy49vyij5kep&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//     priceChange: '+12%'
//   },

 
// ]

// export default function TokenSearch() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [filteredTokens, setFilteredTokens] = useState(tokens)
//   const containerRef = useRef(null)
//   const q = gsap.utils.selector(containerRef)

//   useEffect(() => {
//     // Initial animation
//     gsap.from(q('.token-card'), {
//       y: 50,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.1,
//       ease: 'power3.out'
//     })
//   }, [])

//   const handleSearch = (value) => {
//     setSearchTerm(value)
 

//     // Animate out
//     gsap.to(q('.token-card'), {
//       opacity: 0,
//       y: 20,
//       duration: 0.3,
//       stagger: 0.05,
//       onComplete: () => {
//         // Filter tokens
//         const filtered = tokens.filter(token =>
//           token.name.toLowerCase().includes(value.toLowerCase())
//         )
//         setFilteredTokens(filtered)

//         // Animate in
//         gsap.to(q('.token-card'), {
//           opacity: 1,
//           y: 0,
//           duration: 0.3,
//           stagger: 0.05,
         
//         })
//       }
//     })
//   }

//   return (
//     <div ref={containerRef} className="min-h-screen bg-transparent px-20 text-xs">
//       {/* Search Header */}
//       <div className="mb-6 flex items-center gap-4">
//       <div className="relative flex-1 text-white ">
//                 <div className=" rounded-full border-[6px] border-gray-800 bg-[#e9e9e9]  backdrop-blur-sm">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => handleSearch(e.target.value)}
//                     placeholder="Search Token "
//                     className="md:w-[600px]  px-10 py-5 bg-transparent  pr-10 text-lg  tracking-wider text-red-900 placeholder:text-black-500/70 focus:outline-none"
//                   />
//                   <Search className="absolute  right-5 top-1/2 h-10 w-10 p-1 -translate-y-1/2 text-red-900/70" />
//                 </div>
//               </div>

//         <button className="flex items-center gap-2 rounded-lg bg-[#1a1b23] px-4 py-3 text-white">
//           Trading Volume
//           <ChevronDown className="h-4 w-4" />
//         </button>
//         <button className="rounded-lg bg-[#1a1b23] p-3 text-white">
//           <ListFilter className="h-5 w-5" />
//         </button>
//         <button className="rounded-lg bg-[#1a1b23] p-3 text-white">
//           <RotateCcw className="h-5 w-5" />
//         </button>
//       </div>

//       {/* Token Grid */}
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {filteredTokens.map(token => (
//           <TokenCard key={token.id} token={token} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function TokenCard({ token }) {
//   const cardRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             gsap.to(entry.target, {
//               opacity: 1,
//               y: 0,
//               duration: 0.5,
//               ease: 'power3.out'
//             })
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     if (cardRef.current) {
//       observer.observe(cardRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div
//       ref={cardRef}
//       className="token-card relative overflow-hidden rounded-lg bg-[#1a1b23] opacity-0 translate-y-4"
//     >
//       {/* Token Image */}
//       <div className="relative aspect-square">
//         <img
//           src={token.image}
//           alt={token.name}
//           className="h-full w-full object-cover"
 
//         />
//         <div className="absolute right-2 top-2 rounded bg-cyan-400 px-2 py-1 text-xs font-semibold text-black">
//           {token.priceChange}
//         </div>
//       </div>

//       {/* Token Info */}
//       <div className="p-4">
//         <div className="mb-2 flex items-start justify-between">
//           <div>
//             <h3 className="font-semibold text-white">{token.name}</h3>
//             <p className="text-sm text-gray-400">Created By: {token.creator}</p>
//           </div>
//         </div>
//         <p className="mb-2 text-sm text-gray-300">{token.description}</p>
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-gray-400">Market Cap:</p>
//             <p className="font-semibold text-white">{token.marketCap}</p>
//           </div>
//           <div className="flex items-center gap-1 rounded-full bg-purple-600/20 px-3 py-1">
//             <div className="h-2 w-2 rounded-full bg-purple-500" />
//             <span className="text-xs text-purple-400">Listed on SunSwap</span>
//           </div>
//         </div>
//       </div>

//       {/* Hover Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity hover:opacity-100" />
//     </div>
//   )
// }


import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Search, ChevronDown, ListFilter, RotateCcw } from 'lucide-react'

const tokens = [
  {
    id: 1,
    name: 'MoreYaoWan($ PILLS)',
    creator: 'TF3n...qGMn',
    description: 'Pills Pill Pills',
    marketCap: '$31.28k',
    image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXIyNThkbG1zNDZ6dW15ZzBieHA2Y284cnlrbW5uYnVlbzVqdXhqZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mBmlC5ALoFWD5wskxQ/giphy.webp',
    priceChange: '+5%'
  },
  {
    id: 2,
    name: 'Moon($ Moon)',
    creator: 'TNbp...orju',
    description: 'Moon',
    marketCap: '$14.34k',
    image: 'https://media1.giphy.com/media/98MaHVwJOmWMz4cz1K/giphy.webp?cid=790b7611qr258dlms46zumyg0bxp6co8rykmnnbueo5juxjf&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    priceChange: '+5%'
  },
  {
    id: 3,
    name: 'OmegaCoin($OMG)',
    creator: 'T9fp...uY6w',
    description: 'The ultimate digital asset',
    marketCap: '$33.89k',
    image: 'https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h2_pavcp9.png',
    priceChange: '+8%'
  },
  {
    id: 4,
    name: 'SparkNET($SPK)',
    creator: 'TYxQ...mS5p',
    description: 'Ignite your portfolio',
    marketCap: '$14.67k',
    image: 'https://media4.giphy.com/media/HsHfaDVjjOtLf5SIOn/giphy.webp?cid=ecf05e4755ipy3h1lmqm96qijob0weknic9kgy49vyij5kep&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    priceChange: '+12%'
  },
]

export default function TokenSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTokens, setFilteredTokens] = useState(tokens)
  const containerRef = useRef(null)
  const q = gsap.utils.selector(containerRef)

  useEffect(() => {
    // Initial animation
    gsap.from(q('.token-card'), {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    })
  }, [])

  const handleSearch = (value) => {
    setSearchTerm(value)
 
    // Animate out
    gsap.to(q('.token-card'), {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        // Filter tokens
        const filtered = tokens.filter(token =>
          token.name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredTokens(filtered)

        // Animate in
        gsap.to(q('.token-card'), {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
        })
      }
    })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent p-4 text-xs">
      {/* Search Header */}
      <div className="mb-6 flex items-center gap-4 flex-wrap">
        <div className="relative flex-1 text-white">
          <div className="rounded-full border-[6px] border-gray-800 bg-[#e9e9e9] backdrop-blur-sm">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Token"
              className="md:w-[600px] w-full px-10 py-5 bg-transparent pr-10 text-lg tracking-wider text-red-900 placeholder:text-black-500/70 focus:outline-none"
            />
            <Search className="absolute right-5 top-1/2 h-10 w-10 p-1 -translate-y-1/2 text-red-900/70" />
          </div>
        </div>

        {/* <button className="flex items-center gap-2 rounded-lg bg-[#1a1b23] px-4 py-3 text-white">
          Trading Volume
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="rounded-lg bg-[#1a1b23] p-3 text-white">
          <ListFilter className="h-5 w-5" />
        </button>
        <button className="rounded-lg bg-[#1a1b23] p-3 text-white">
          <RotateCcw className="h-5 w-5" />
        </button> */}
      </div>

      {/* Token Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
        {filteredTokens.map(token => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  )
}

function TokenCard({ token }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.out'
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="token-card relative overflow-hidden rounded-lg bg-[#1a1b23] opacity-0 translate-y-4"
    >
      {/* Token Image */}
      <div className="relative aspect-square">
        <img
          src={token.image}
          alt={token.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-2 top-2 rounded bg-cyan-400 px-2 py-1 text-xs font-semibold text-black">
          {token.priceChange}
        </div>
      </div>

      {/* Token Info */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-white">{token.name}</h3>
            <p className="text-sm text-gray-400">Created By: {token.creator}</p>
          </div>
        </div>
        <p className="mb-2 text-sm text-gray-300">{token.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Market Cap:</p>
            <p className="font-semibold text-white">{token.marketCap}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-purple-600/20 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <span className="text-xs text-purple-400">Listed on SunSwap</span>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity hover:opacity-100" />
    </div>
  )
}
