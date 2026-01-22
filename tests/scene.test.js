import * as THREE from 'three';
import { describe, it, expect } from 'vitest';
import { createScene, setLights } from '../src/core/scene.js';

describe('Hello World Test', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('Scene Module', () => {

  it('creates a new THREE.Scene instance', () => {
    const scene = createScene();
    expect(scene).toBeInstanceOf(THREE.Scene);
  });

  it('scene starts empty', () => {
    const scene = createScene();
    expect(scene.children.length).toBe(0);
  });

  it('adds ambient and directional light', () => {
    const scene = createScene();
    setLights(scene);
    expect(scene.children.some(obj => obj instanceof THREE.AmbientLight)).toBe(true);
    expect(scene.children.some(obj => obj instanceof THREE.DirectionalLight)).toBe(true);
  });

  it('directional light has correct intensity', () => {
    const scene = createScene();
    setLights(scene);
    const dir = scene.children.find(o => o instanceof THREE.DirectionalLight);
    expect(dir.intensity).toBeCloseTo(0.5);
  });

  it('ambient light has white color', () => {
    const scene = createScene();
    setLights(scene);
    const amb = scene.children.find(o => o instanceof THREE.AmbientLight);
    expect(amb.color.getHex()).toBe(0xffffff);
  });

});