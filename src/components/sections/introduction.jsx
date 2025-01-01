import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Box, Grid } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

function Cubes({ count = 25, mouse, imageLinks }) {
  const meshes = useRef([]);

  const [positions] = useState(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 2,
          Math.random() * 20 - 10,
        ],
        rotation: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
        scale: 1 + Math.random() * 0.8,
      });
    }
    return pos;
  });

  useEffect(() => {
    // Preload images as textures
    const textureLoader = new THREE.TextureLoader();
    imageLinks.forEach((image, i) => {
      textureLoader.load(image, (texture) => {
        if (meshes.current[i]) {
          meshes.current[i].material.map = texture;
          meshes.current[i].material.needsUpdate = true;
        }
      });
    });
  }, [imageLinks]);

  useFrame((state, delta) => {
    meshes.current.forEach((mesh, i) => {
      if (mesh) {
        // Add gentle floating motion
        mesh.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001;

        // React to mouse movement with delay
        const mouseEffect = new THREE.Vector3(
          (mouse.current[0] * 2 - 1) * 0.1,
          0,
          (mouse.current[1] * 2 - 1) * 0.1
        );
        mesh.position.lerp(
          new THREE.Vector3(
            positions[i].position[0] + mouseEffect.x,
            mesh.position.y,
            positions[i].position[2] + mouseEffect.z
          ),
          0.2
        );
      }
    });
  });

  return positions.map((props, i) => (
    <Box
      key={i}
      ref={(el) => (meshes.current[i] = el)}
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
    >
      <meshStandardMaterial opacity={1} roughness={1} metalness={2} />
    </Box>
  ));
}

function Scene({ mouse, imageLinks }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Grid
        position={[0, 1, 0]}
        args={[30, 30]}
        cellSize={0.1}
        cellThickness={0.9}
        cellColor="#000"
        sectionColor="#000"
        sectionSize={0.1}
      />
      <Cubes mouse={mouse} imageLinks={imageLinks} />
    </>
  );
}

export default function Intro() {
  const mouse = useRef([0, 0]);
  const [showStartButton, setShowStartButton] = useState(false);
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [imageLinks, setImageLinks] = useState([]);




  // Scroll to the target section
  const scrollToSection = () => {
    const section = document.getElementById("home"); // Replace with your section ID
    section.scrollIntoView({ behavior: "smooth" });
  };

  const text =
    "Craft bespoke crypto and meme coins on the robust Solana blockchain. Experience top-tier security, seamless setup, and complete decentralisation—tailored to your vision";
  const words = text.split(" ");

  useEffect(() => {
    const container = document.querySelector("#text-container");
    gsap.fromTo(
      container.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.25, duration: 1, ease: "easeOut" }
    );

    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, words.length * 150 + 2000); // Total animation time + 2s delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showStartButton) {
      gsap.fromTo(
        "#start-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.4 }
      );
    }
    if (showHomeButton) {
      gsap.fromTo(
        "#home-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [showStartButton, showHomeButton]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = [
        event.clientX / window.innerWidth,
        event.clientY / window.innerHeight,
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const images = [
      "https://www.shutterstock.com/shutterstock/photos/2537713921/display_1500/stock-photo-an-image-of-the-memecoin-meme-virtual-currency-on-a-digital-background-d-illustrations-2537713921.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2537713921/display_1500/stock-photo-an-image-of-the-memecoin-meme-virtual-currency-on-a-digital-background-d-illustrations-2537713921.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2537713921/display_1500/stock-photo-an-image-of-the-memecoin-meme-virtual-currency-on-a-digital-background-d-illustrations-2537713921.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2537713921/display_1500/stock-photo-an-image-of-the-memecoin-meme-virtual-currency-on-a-digital-background-d-illustrations-2537713921.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2555454695/display_1500/stock-photo-pump-fun-logo-and-coin-d-render-2555454695.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2555454695/display_1500/stock-photo-pump-fun-logo-and-coin-d-render-2555454695.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2555454695/display_1500/stock-photo-pump-fun-logo-and-coin-d-render-2555454695.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2078246368/display_1500/stock-vector-floki-inu-gold-coin-crypto-currency-floki-shiba-inu-crypto-with-golden-light-vector-eps-2078246368.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2078246368/display_1500/stock-vector-floki-inu-gold-coin-crypto-currency-floki-shiba-inu-crypto-with-golden-light-vector-eps-2078246368.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2555454695/display_1500/stock-photo-pump-fun-logo-and-coin-d-render-2555454695.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2555454695/display_1500/stock-photo-pump-fun-logo-and-coin-d-render-2555454695.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2078246368/display_1500/stock-vector-floki-inu-gold-coin-crypto-currency-floki-shiba-inu-crypto-with-golden-light-vector-eps-2078246368.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2078246368/display_1500/stock-vector-floki-inu-gold-coin-crypto-currency-floki-shiba-inu-crypto-with-golden-light-vector-eps-2078246368.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2078246368/display_1500/stock-vector-floki-inu-gold-coin-crypto-currency-floki-shiba-inu-crypto-with-golden-light-vector-eps-2078246368.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2457730949/display_1500/stock-vector-gold-coin-pepe-the-frog-crypto-currency-logo-2457730949.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2457730949/display_1500/stock-vector-gold-coin-pepe-the-frog-crypto-currency-logo-2457730949.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2457066963/display_1500/stock-photo-an-image-of-the-floki-coin-virtual-currency-on-a-digital-background-d-illustrations-2457066963.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2457066963/display_1500/stock-photo-an-image-of-the-floki-coin-virtual-currency-on-a-digital-background-d-illustrations-2457066963.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2476507741/display_1500/stock-photo-bonk-coin-cryptocurrency-image-on-digital-background-d-illustrations-2476507741.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2476507741/display_1500/stock-photo-bonk-coin-cryptocurrency-image-on-digital-background-d-illustrations-2476507741.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2480915713/display_1500/stock-photo-meme-coin-bitcoin-2480915713.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2480915713/display_1500/stock-photo-meme-coin-bitcoin-2480915713.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2125068455/display_1500/stock-photo-shiba-inu-crypto-currency-currency-icon-decentralized-finance-programs-shiba-inu-coin-banner-2125068455.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2125068455/display_1500/stock-photo-shiba-inu-crypto-currency-currency-icon-decentralized-finance-programs-shiba-inu-coin-banner-2125068455.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2248480665/display_1500/stock-vector-solana-sol-crypto-currency-with-circuit-line-vector-bacground-solana-crypto-currency-vector-2248480665.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2248480665/display_1500/stock-vector-solana-sol-crypto-currency-with-circuit-line-vector-bacground-solana-crypto-currency-vector-2248480665.jpg",
      "https://www.shutterstock.com/shutterstock/photos/2475837157/display_1500/stock-photo-various-memecoin-logos-on-digital-background-d-illustrations-2475837157.jpg",
    ];
    setImageLinks(images);
  }, []);

  return (
    <footer className="relative min-h-[100vh] bg-red-900  ">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
          <Scene mouse={mouse} imageLinks={imageLinks} />
        </Canvas>
      </div>

      <div
        className=" z-10 container mx-auto px-4 py-12"
        style={{
          fontFamily: "frace",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1
            id="text-container"
            className="text-white font-black text-4xl md:text-6xl text-center mb-12 flex flex-wrap justify-center gap-x-2"
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block">
                {word}
              </span>
            ))}
          </h1>

          {showStartButton && (
            <div className="flex justify-center items-center pt-8">
              <button onClick={scrollToSection}>
                <img
                  src="/images/hand.png"
                  width={70}
                  alt="scroll down 🔻"
                  className="animate-bounce-slow opacity-100 hover:opacity-70 transition-opacity duration-300"
                />
              </button>
            </div>
          )}

    
        </div>
      </div>
    </footer>
  );
}
