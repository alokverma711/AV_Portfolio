import * as THREE from 'three';

export function createScene() {
  return new THREE.Scene();
}

export function setLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  const dir = new THREE.DirectionalLight(0xffffff, 0.5);
  dir.position.set(5, 10, 7.5);
  scene.add(ambient, dir);
}