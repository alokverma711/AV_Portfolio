import { describe, it, expect } from 'vitest';
import { loadTextures } from '../src/core/textures.js';

describe('Textures Module', () => {
  it('returns textures and textFaces arrays', () => {
    const { textFaces, textures } = loadTextures();
    expect(Array.isArray(textFaces)).toBe(true);
    expect(Array.isArray(textures)).toBe(true);
  });

  it('loads 3 face textures', () => {
    const { textFaces } = loadTextures();
    expect(textFaces.length).toBe(3);
  });

  it('loads 4 project textures', () => {
    const { textures } = loadTextures();
    expect(textures.length).toBe(4);
  });

  it('each texture has RepeatWrapping', () => {
    const { textures } = loadTextures();
    expect(textures.every(t => t.wrapS !== undefined)).toBe(true);
  });

  it('returns valid THREE.Texture objects', () => {
    const { textures } = loadTextures();
    expect(textures[0].isTexture).toBe(true);
  });
});