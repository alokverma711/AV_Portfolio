import * as THREE from 'three';
import { describe, it, expect } from 'vitest';

function applyTexture(mesh, texture) {
  const newMat = { ...mesh.material }; // mock clone
  newMat.map = texture;
  newMat.needsUpdate = true;
  mesh.material = newMat;
}

describe('applyTexture', () => {
  it('should update the mesh material map and needsUpdate', () => {
    const mesh = { material: {} }; // simple mock
    const texture = { name: 'mockTexture' };
    applyTexture(mesh, texture);
    expect(mesh.material.map).toBe(texture);
    expect(mesh.material.needsUpdate).toBe(true);
  });
});

let pointer = { x: 0, y: 0 };
function updatePointer(event) {
  if (event.type.startsWith('touch')) {
    const touch = event.touches[0];
    pointer.x = (touch.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  } else {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
}

describe('updatePointer', () => {
  it('should update pointer for mouse events', () => {
    global.innerWidth = 100;
    global.innerHeight = 50;
    updatePointer({ type: 'mousemove', clientX: 50, clientY: 25 });
    expect(pointer.x).toBeCloseTo(0);
    expect(pointer.y).toBeCloseTo(0);
  });
});

describe('RayObjects setup', () => {
  it('should include meshes with specific names', () => {
    const meshes = [
      { name: 'Text002', material: { name: 'Sign' } },
      { name: 'Text003', material: { name: 'Other' } },
    ];
    const RayObjects = meshes.filter(m => m.name.includes('Text002') || m.material.name.includes('Sign'));
    expect(RayObjects.length).toBe(1);
    expect(RayObjects[0].name).toBe('Text002');
  });
});