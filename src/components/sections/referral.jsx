'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useFrame } from '@react-three/fiber'

// GiftBox Component
function GiftBox() {
  const meshRef = useRef(null)

  // Rotate the box continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* Gift Box Base */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#b67d08" />

      {/* Ribbon Horizontal */}
      <mesh position={[0, 0.51, 0]}>
        <boxGeometry args={[1.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#300230" />
      </mesh>

      {/* Ribbon Vertical */}
      <mesh position={[0, 0.51, 0]}>
        <boxGeometry args={[0.1, 0.1, 1.1]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </mesh>
  )
}

export default function Referral() {
  return (
    <div className="min-h-screen bg-red-900 border-[8px]  border-[#000] border-t-[5rem] relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-1">
        <div className="stars-pattern" />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative"
      style={{
        fontFamily:"Akira",
        fontWeight:500,
        letterSpacing:"0.1em"
        
      }}>
        {/* Header text */}
        <div className="text-center py-8 ">
          <h2 className=" text-4xl text-amber-300  mb-2">Invite Friends &</h2>
          <h1 className="text-6xl  text-white tracking-wider">Earn Rewards !</h1>
          <hr className='md:h-1 h-2 bg-slate-600 ' />
        </div>

        {/* 3D Gift Box with image */}
        <div className="flex justify-center items-center h-[200px] bg-black mb-12 relative">
          <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-red-three-dimensional-gift-banner-image_252999.jpg" alt="Referral Image" className="absolute w-full h-full object-cover opacity-20" />
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas className="absolute z-10" shadows>
              <PresentationControls
                global
                rotation={[0, -0.3, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-0.4, 0.2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <GiftBox />
                <Environment preset="studio" />
              </PresentationControls>
              <OrbitControls enableZoom={true} />
            </Canvas>
            <Canvas className="absolute z-10" shadows>
              <PresentationControls
                global
                rotation={[0, -0.3, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-0.4, 0.2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <GiftBox />
                <Environment preset="studio" />
              </PresentationControls>
              <OrbitControls enableZoom={true} />
            </Canvas>
            <Canvas className="absolute z-10" shadows>
              <PresentationControls
                global
                rotation={[0, 3, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-0.4, 0.2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <GiftBox />
                <Environment preset="studio" />
              </PresentationControls>
              <OrbitControls enableZoom={true} />
            </Canvas>
          </Suspense>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center  gap-8 pb-10"
        style={{
          letterSpacing:"0.1em",
          transition:"ease-in 1s"
        }}>
          <div className="bg-amber-300/90 hover:animate-bounce-slow transition-all  border-[10px] border-y-black     hover:bg-amber-300 text-center  text-purple-950 px-8 py-6 rounded-sm flex flex-col items-center gap-1 cursor-pointer shadow-lg">
            <span className="font-semibold">Invite Friends</span>
            <span className="text-md opacity-75">Share your referral link</span>
          </div>

          <div className="bg-amber-300/90 hover:animate-bounce-slow hover:bg-amber-300 text-center border-[10px] border-y-black   text-purple-950 px-8 py-6 rounded-sm flex flex-col items-center gap-2 cursor-pointer shadow-lg">
            <span className="font-semibold">Earn Rewards</span>
            <span className="text-md opacity-75">Get bonuses for each signup</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex   justify-center md:justify-end px-10 gap-6">
          <div className="text-amber-300 hover:animate-bounce-slow hover:text-amber-200 cursor-pointer">
            <Facebook className="w-6 h-6 animate-pulse" />
          </div>
          <div className="text-amber-300 hover:animate-bounce-slow hover:text-amber-200 cursor-pointer">
            <Twitter className="w-6 h-6" />
          </div>
          <div className="text-amber-300 hover:animate-bounce-slow hover:text-amber-200 cursor-pointer">
            <Instagram className="w-6 h-6" />
          </div>
          <div className="text-amber-300 hover:animate-bounce-slow hover:text-amber-200 cursor-pointer">
            <Linkedin className="w-6 h-6" />
          </div>
          <div className="text-amber-300 hover:animate-bounce-slow hover:text-amber-200 cursor-pointer">
            <Youtube className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
