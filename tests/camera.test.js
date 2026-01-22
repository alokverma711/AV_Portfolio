import { describe, it, expect, beforeAll } from 'vitest';
import * as THREE from 'three';
import { setCamera } from '../src/core/camera&controls.js';

beforeAll(() => {
  // Mock window size
  global.innerWidth = 800;
  global.innerHeight = 600;
});

describe('Camera Module', () => {
  it('creates PerspectiveCamera', () => {
    const cam = setCamera();
    expect(cam).toBeInstanceOf(THREE.PerspectiveCamera);
  });

  it('has correct FOV', () => {
    const cam = setCamera();
    expect(cam.fov).toBe(75);
  });

  it('near and far planes are correct', () => {
    const cam = setCamera();
    expect(cam.near).toBeCloseTo(0.1);
    expect(cam.far).toBeCloseTo(1000);
  });

  it('has correct initial position', () => {
    const cam = setCamera();
    expect(cam.position.x).toBeCloseTo(-51.75051610189534);
  });

  it('is a THREE.Object3D', () => {
    const cam = setCamera();
    expect(cam.isObject3D).toBe(true);
  });
});
