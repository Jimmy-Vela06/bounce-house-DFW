import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// import { motion } from 'framer-motion';

import CanvasLoader from '../Loader/Loader';

const BounceHouse = ({ isMobile }) => {
  const bounceCastle = useGLTF('./tent_castle/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='' />
      <pointLight intensity={0.2} />
      <spotLight position={[-25, 40, 25]} color='#FDB813' />

      <primitive
        object={bounceCastle.scene}
        scale={isMobile ? 0.75 : 1.1}
        position={isMobile ? [0, -0.6, 0] : [0, -0.85, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const BounceHouseCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [11, 8, 16], fov: 12 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          rotation={1}
          rotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
        />

        <BounceHouse isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BounceHouseCanvas;
