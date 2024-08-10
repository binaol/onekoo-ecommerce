// src/ThreeScene.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0xefc3a4);
    mountRef.current.appendChild(renderer.domElement);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const jebenamaskemechaURL = new URL(
      "../../assets/models/gltf/JEBENA MASKEMECHA.gltf",
      import.meta.url
    );
    const jebenaURL = new URL(
      "../../assets/models/glb/Jebena2.glb",
      import.meta.url
    );
    const cinimaskemechaURL = new URL(
      "../../assets/models/glb/plate.glb",
      import.meta.url
    );
    const ciniURL = new URL(
      "../../assets/models/glb/Cini.glb",
      import.meta.url
    );
    const rekupdateURL = new URL(
      "../../assets/models/glb/rekebot.glb",
      import.meta.url
    );
    //### Rekebot ###
    const rekebotLoader = new GLTFLoader();
    rekebotLoader.load(
      rekupdateURL.href,
      function (obj1) {
        const model1 = obj1.scene;
        model1.scale.set(23, 10, 43);
        model1.position.set(4, -1.5, -5);
        scene.add(model1);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //### cini maskemecha and cini objects ###
    //**object one**About us page cup**
    //cini maskemecha
    const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm1) {
        const cinima1 = cm1.scene;
        cinima1.scale.set(10, 10, 10);
        cinima1.position.set(-3, 2.9, 3);
        scene.add(cinima1);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    const ciniLoader = new GLTFLoader();
    ciniLoader.load(ciniURL.href, function (c1) {
      const cini1 = c1.scene;
      cini1.scale.set(5, 5, 5);
      cini1.position.set(-3, 2.9, 3);
      scene.add(cini1);
    });

    //**object two**contact page cup**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm2) {
        const cinima2 = cm2.scene;
        cinima2.scale.set(10, 10, 10);
        cinima2.position.set(4, 2.9, 3);
        scene.add(cinima2);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    ciniLoader.load(ciniURL.href, function (c2) {
      const cini2 = c2.scene;
      cini2.scale.set(5, 5, 5);
      cini2.position.set(4, 2.9, 3);
      scene.add(cini2);
    });

    //**object three**coffee bean to cup page cup**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm3) {
        const cinima3 = cm3.scene;
        cinima3.scale.set(10, 10, 10);
        cinima3.position.set(11, 2.9, 3);
        scene.add(cinima3);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(ciniURL.href, function (c3) {
      const cini3 = c3.scene;
      cini3.scale.set(5, 5, 5);
      cini3.position.set(11, 2.9, 3);
      scene.add(cini3);
    });

    //**object four**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm4) {
        const cinima4 = cm4.scene;
        cinima4.scale.set(10, 10, 10);
        cinima4.position.set(-3, 2.9, -5);
        scene.add(cinima4);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c4) {
        const cini4 = c4.scene;
        cini4.scale.set(5, 5, 5);
        cini4.position.set(-3, 2.9, -5);
        scene.add(cini4);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //**object five**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm5) {
        const cinima5 = cm5.scene;
        cinima5.scale.set(10, 10, 10);
        cinima5.position.set(4, 2.9, -5);
        scene.add(cinima5);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c5) {
        const cini5 = c5.scene;
        cini5.scale.set(5, 5, 5);
        cini5.position.set(4, 2.9, -5);
        scene.add(cini5);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //**object six**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm6) {
        const cinima6 = cm6.scene;
        cinima6.scale.set(10, 10, 10);
        cinima6.position.set(11, 2.9, -5);
        scene.add(cinima6);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c6) {
        const cini6 = c6.scene;
        cini6.scale.set(5, 5, 5);
        cini6.position.set(11, 2.9, -5);
        scene.add(cini6);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //**object seven**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm7) {
        const cinima7 = cm7.scene;
        cinima7.scale.set(10, 10, 10);
        cinima7.position.set(-3, 2.9, -13);
        scene.add(cinima7);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c7) {
        const cini7 = c7.scene;
        cini7.scale.set(5, 5, 5);
        cini7.position.set(-3, 2.9, -13);
        scene.add(cini7);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //**object eight**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm8) {
        const cinima8 = cm8.scene;
        cinima8.scale.set(10, 10, 10);
        cinima8.position.set(4, 2.9, -13);
        scene.add(cinima8);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c8) {
        const cini8 = c8.scene;
        cini8.scale.set(5, 5, 5);
        cini8.position.set(4, 2.9, -13);
        scene.add(cini8);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //**object nine**
    //cini maskemecha
    // const cinimaskemechaLoader = new GLTFLoader();
    cinimaskemechaLoader.load(
      cinimaskemechaURL.href,
      function (cm9) {
        const cinima9 = cm9.scene;
        cinima9.scale.set(10, 10, 10);
        cinima9.position.set(11, 2.9, -13);
        scene.add(cinima9);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    //cini
    // const ciniLoader = new GLTFLoader();
    ciniLoader.load(
      ciniURL.href,
      function (c9) {
        const cini9 = c9.scene;
        cini9.scale.set(5, 5, 5);
        cini9.position.set(11, 2.9, -13);
        scene.add(cini9);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //### Jebena maskemecha ###
    const jebenamaskemechaLoader = new GLTFLoader();
    jebenamaskemechaLoader.load(
      jebenamaskemechaURL.href,
      function (obj4) {
        const model4 = obj4.scene;
        model4.scale.set(0.03, 0.06, 0.03);
        model4.position.set(-1, -2, -15);
        scene.add(model4);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //### Jebena ###
    const jebenaLoader = new GLTFLoader();
    jebenaLoader.load(
      jebenaURL.href,
      function (obj5) {
        const model5 = obj5.scene;
        model5.scale.set(0.003, 0.003, 0.003);
        model5.position.set(-17.8, -1.5, 4);
        // model5.rotation.y = Math.PI / 0.1;
        scene.add(model5);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const objects = [];

    // Add 3D objects
    const addClickableObject = (position, targetPage) => {
      const geometry = new THREE.BoxGeometry(4, 4, 4);
      const material = new THREE.MeshBasicMaterial({
        // color: 0x6a6a6a,
        transparent: true,
        opacity: 0.01,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(...position);
      scene.add(cube);
      objects.push({ cube, targetPage });
    };

    addClickableObject([-3, 5.5, 3], "/about"); // About
    addClickableObject([4, 5.5, 3], "/contact"); // Contact
    addClickableObject([11, 5.5, 3], "/farm-to-cup"); // Coffee Bean to Cup
    addClickableObject([4, 0, 0], "/shop"); // Shop

    camera.position.x = 0;
    camera.position.y = 13;
    camera.position.z = 30;

    //adding an orbit controll //
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    // orbit.enableZoom = false;
    orbit.minDistance = 20;
    orbit.maxDistance = 30;

    orbit.minPolarAngle = Math.PI / 4; // Limits the vertical rotation, in radians
    orbit.maxPolarAngle = Math.PI / 2; // Limits the vertical rotation, in radians

    orbit.minAzimuthAngle = -Math.PI / 2; // Limits the horizontal rotation, in radians
    orbit.maxAzimuthAngle = Math.PI / 2; // Limits the horizontal rotation, in radians

    // Disable right-click movement (default right button is THREE.MOUSE.PAN)
    orbit.mouseButtons = {
      // LEFT: THREE.MOUSE.ROTATE,  // Left button for rotate
      LEFT: null,
      MIDDLE: THREE.MOUSE.DOLLY, // Middle button for zoom
      RIGHT: null, // Right button disabled
    };
    //follow mouse move
    let oldx = 0;
    let oldy = 0;
    // window.onmousemove = function(ev){
    // let changex = ev.x - oldx;
    // let changey = ev.y - oldy;
    // camera.position.x += changex/100
    // camera.position.y += changey/100
    // oldx = ev.x;
    // oldx = ev.y;
    // }
    const handleMove = (ev) => {
      let changex = ev.x - oldx;
      let changey = ev.y - oldy;
      camera.position.x += changex / -300;
      camera.position.y += changey / 100;
      oldx = ev.x;
      oldy = ev.y;
    };

    window.addEventListener("mousemove", handleMove);
    //ambient light//
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    //directional light//
    const directLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directLight.position.set(0, 50, 50);
    directLight.castShadow = true;
    scene.add(directLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      //   objects.forEach(({ cube }) => {
      //     cube.rotation.x += 0.01;
      //     cube.rotation.y += 0.01;
      //   });
      renderer.render(scene, camera);
    };
    animate();

    // Handle click event
    const handleClick = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        objects.map(({ cube }) => cube)
      );

      if (intersects.length > 0) {
        const { targetPage } = objects.find(
          ({ cube }) => cube === intersects[0].object
        );
        navigate(targetPage);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      // mountRef.current.removeChild(renderer.domElement);
    };
  }, [navigate]);

  return <div ref={mountRef} />;
};

export default ThreeScene;

// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))

//   // Function to handle click and navigate to a URL
//   const handleClick = (event) => {
//     click(!clicked)
//     window.open('/about', '_blank') // Change URL as needed
//   }

//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={handleClick}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// export default function App() {
//   return (
//     <Canvas>
//       <ambientLight intensity={Math.PI / 2} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
//       <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//       <OrbitControls />
//     </Canvas>
//   )
// }
