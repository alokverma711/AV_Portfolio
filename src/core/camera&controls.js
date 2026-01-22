import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000);
    
  camera.position.set(-51.75051610189534, 1.671636865344774, 4.511617716313425);
  return camera;
}

export function setControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(-46.52956909239201, 1.2465027766167204, 7.712315697813718);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.minDistance = 5;
  controls.maxDistance = 8;
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = Math.PI / 2.7;
  const degToRad = (deg) => deg * (Math.PI / 180);
  controls.minAzimuthAngle = degToRad(200);
  controls.maxAzimuthAngle = -degToRad(80);
  return controls;
}