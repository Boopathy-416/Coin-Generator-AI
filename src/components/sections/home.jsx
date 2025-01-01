import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Group, TextureLoader } from "three";
import { Search } from "lucide-react";
import { WalletModal } from "../popupfunction/popupwallet";
import { all } from "three/tsl";
import TokenSearch from "../searchgrid/tokensearch";

function CarouselItem({ position, texture }) {
  return (
    <Float
      speed={10}
      rotationIntensity={0}
      floatIntensity={0}
      position={position}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial attach="material-0" map={texture} />
        <meshStandardMaterial attach="material-1" map={texture} />
        <meshStandardMaterial attach="material-2" map={texture} />
        <meshStandardMaterial attach="material-3" map={texture} />
        <meshStandardMaterial attach="material-4" map={texture} />
        <meshStandardMaterial attach="material-5" map={texture} />
      </mesh>
    </Float>
  );
}

function CarouselItems({ images }) {
  const groupRef = useRef(null);
  const itemCount = 10;
  const radius = 10;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: itemCount }).map((_, index) => {
        const angle = (index / itemCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const texture = new TextureLoader().load(images[index % images.length]);

        return (
          <CarouselItem key={index} position={[x, 0, z]} texture={texture} />
        );
      })}
    </group>
  );
}

export default function Portfolio() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "public/images/card1 (1).png",
    "public/images/card1 (2).png",
    "public/images/card1 (3).png",
    "public/images/card1  (4).png",
    "public/images/card1  (5).png",
    "public/images/card1  (6).png",
    "public/images/card1  (7).png",
    "public/images/card1  (8).png",
    "public/images/card1  (9).png",
    "public/images/card1  (10).png",
  ];

  return (
    <div
      id="home"
      className="relative h-[200vh] border-black border-t-[20px] border-[2px]  md:border-t-[5rem] bg-red-900 w-full  "
    >
      <header className="container z-10 mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://media.giphy.com/media/lZd4oyt1EzC3C/giphy.gif?cid=790b76118pzwbvk4lwo9fsw9ugkkiclorqxlutlreu102jyp&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              width={50}
              alt="Logo"
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute uppercase right-5 overflow-hidden py-1 px-6 lg:py-2 lg:px-12 text-white bg-transparent border-none rounded-lg cursor-pointer z-20 group"
          >
            <span
              style={{
                fontFamily: "Playfair Display",
              }}
              className="relative text-[11px] md-text[18px] tracking-wider font-black lg:text-[22px] z-10"
            >
              Wallet
            </span>
            <div className="absolute top-[-80px] left-0 w-[200px] h-[200px] bg-[#dc2626] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:top-[-120px]">
              <div className="absolute top-0 left-1/2 w-[200%] h-[200%] bg-[rgba(20,20,20,1)] rounded-[45%] animate-liquid" />
              <div className="absolute top-0 left-1/2 w-[200%] h-[200%] bg-[rgba(20,20,20,0.5)] rounded-[40%] animate-liquid" />
            </div>
          </button>

          <WalletModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </nav>
      </header>
      <div className="w-full overflow-hidden whitespace-nowrap   bg-black p-5 text-[#7f0a2b] text-lg font-bold py-2">
        <div className="inline-block animate-marquee px-5">
          WARNING : Playing this may result in feeling extremely hopeless.
        </div>
        <div className="inline-block animate-marquee px-5">
          WARNING : Playing this may result in feeling extremely hopeless.
        </div>
        <div className="inline-block animate-marquee px-5">
          WARNING : Playing this may result in feeling extremely hopeless.
        </div>
      </div>
      <div className="absolute inset-0 flex items-start justify-center text-[#ececec] text-4xl font-bold z-10">
        <div className="relative flex  items-center justify-center bg-transparent">
          <div className="relative w-full">
            <main className="container mt-20 mx-auto px-4 md:px-20 py-12">
              <div className="container border-t-[20px] border-[5px] p-5  border-b-0 border-[#000] text-center mx-auto px-4 py-12">
                <h1
                  className="text-[clamp(3rem,11vw,16rem)]  hover:bg-gray-300 hover:text-[#000] transition-all    uppercase font-bold leading-none tracking-tight mb-12  "
                  style={{
                    // backgroundImage:
                    //   "url('https://media2.giphy.com/media/nHFVhBE2uu0boioibY/giphy.webp?cid=790b7611qyrjfdksm1nmk2r956rnbobcssn074ejhd5gzdaw&ep=v1_gifs_search&rid=giphy.webp&ct=g')",
                    // backgroundSize: "contain",
                    fontFamily: "Marvel",
                    opacity:"0.8",
                    letterSpacing: "0.1em",
                      transition:" ease-in 1s"
                  }}
                >
                  the coin
                </h1>

                <div className="space-y-3 -z-50">
                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="w-full h-[0.1px] bg-gray-700" />
                  ))}
                </div>
                <p
                  className="text-[#e9e9e9] hover:bg-gray-300 hover:text-[#000] transition-all text-center  text-xl lg:px-20 mt-5"
                  style={{
                    fontFamily: "Akira",
                    transition:" ease-in 1s"
                  }}
                >
                  Welcome to THE COIN — Empowering Crypto Innovation, Secure,
                  Decentralized, and Swift.Craft bespoke crypto and meme coins
                  on the robust Solana blockchain. Experience top-tier security,
                  seamless setup, and complete decentralization—tailored to your
                  vision.
                </p>
              </div>
              {/* <div className="w-full flex  justify-center align-center text-white ">
                <div className=" rounded-full border-[6px] border-gray-800 bg-[#e9e9e9]  backdrop-blur-sm">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search Token "
                    className="md:w-[600px]  px-10 py-5 bg-transparent  pr-10 text-lg  tracking-wider text-red-900 placeholder:text-black-500/70 focus:outline-none"
                  />
                  <Search className="absolute right-5 top-1/2 h-10 w-10 p-1 -translate-y-1/2 text-red-900/70" />
                </div>
              </div> */}
                <TokenSearch />
            </main>
          </div>
        </div>
      </div>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 6, 30]} />
        <Suspense fallback={null}>
          <CarouselItems images={images} />
          <Environment preset="city" />
          <ambientLight intensity={0.1} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
