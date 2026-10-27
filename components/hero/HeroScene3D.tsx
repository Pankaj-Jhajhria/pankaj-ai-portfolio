'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.025);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Central Abstract Geodesic Network Sphere
    const sphereRadius = 7.5;
    const sphereGeo = new THREE.IcosahedronGeometry(sphereRadius, 2);
    
    // Clean, crisp wireframe for light theme
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const networkSphere = new THREE.Mesh(sphereGeo, wireframeMat);
    scene.add(networkSphere);

    // 2. Luminous Nodes on Vertices (Warm Amber & Deep Cyan & Charcoal)
    const posAttribute = sphereGeo.getAttribute('position');
    const vertexCount = posAttribute.count;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(vertexCount * 3);
    const nodeColors = new Float32Array(vertexCount * 3);

    const amberColor = new THREE.Color(0xd97706);
    const cyanColor = new THREE.Color(0x0284c7);
    const slateColor = new THREE.Color(0x334155);

    for (let i = 0; i < vertexCount; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);
      const z = posAttribute.getZ(i);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      const rnd = Math.random();
      const col = rnd > 0.6 ? cyanColor : rnd > 0.25 ? amberColor : slateColor;
      nodeColors[i * 3] = col.r;
      nodeColors[i * 3 + 1] = col.g;
      nodeColors[i * 3 + 2] = col.b;
    }

    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.38,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    networkSphere.add(nodes);

    // 3. Flowing Data Ribbons / Particle Streams
    const streamCount = 180;
    const streamGeo = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamCount * 3);
    const streamColors = new Float32Array(streamCount * 3);

    for (let i = 0; i < streamCount; i++) {
      const radius = 9 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      streamPos[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      streamPos[i * 3 + 1] = radius * Math.sin(phi);
      streamPos[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      const col = i % 3 === 0 ? cyanColor : i % 2 === 0 ? amberColor : slateColor;
      streamColors[i * 3] = col.r;
      streamColors[i * 3 + 1] = col.g;
      streamColors[i * 3 + 2] = col.b;
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));

    const streamMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const streams = new THREE.Points(streamGeo, streamMat);
    scene.add(streams);

    // 4. Floating Bounding Wireframe Cubes
    const cubeGroup = new THREE.Group();
    const cubeCount = 12;
    const cubeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo);

    for (let i = 0; i < cubeCount; i++) {
      const edgeMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xd97706 : 0x0284c7,
        transparent: true,
        opacity: 0.35,
      });
      const wireCube = new THREE.LineSegments(cubeEdges, edgeMat);

      const dist = 11 + Math.random() * 6;
      const angle = (i / cubeCount) * Math.PI * 2 + Math.random() * 0.5;
      wireCube.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 10,
        Math.sin(angle) * dist
      );
      wireCube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubeGroup.add(wireCube);
    }
    scene.add(cubeGroup);

    // Mouse Interaction for Damped Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        networkSphere.rotation.y += delta * 0.08;
        networkSphere.rotation.x += delta * 0.03;

        streams.rotation.y -= delta * 0.04;
        streams.rotation.z += delta * 0.02;

        cubeGroup.rotation.y += delta * 0.05;
        cubeGroup.children.forEach((c, idx) => {
          c.rotation.x += delta * (0.2 + idx * 0.02);
          c.rotation.y += delta * (0.15 + idx * 0.03);
        });

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 12;
        camera.position.y = -targetY * 12;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      sphereGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      streamGeo.dispose();
      streamMat.dispose();
      cubeGeo.dispose();
      cubeEdges.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {!webglSupported && (
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-sky-50/50" />
      )}
    </div>
  );
}
