import * as THREE from 'three';

export function loadTextures() {
  const textureLoader = new THREE.TextureLoader();
  const textFaces = [];
  
  textFaces[0] = textureLoader.load('./Face1.png', (tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(25, 27);  
    tex.rotation = -(Math.PI / 2);
  });

  textFaces[1] = textureLoader.load('./Face2.png', (tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(25, 26); 
    tex.rotation = -(Math.PI / 2);
  });

  textFaces[2] = textureLoader.load('./Facemachine3.jpg', (tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(110, -239); 
    tex.rotation = (Math.PI / -2);
  });

  const textures = ['./Promo.png','./E-commerce.png', './Project3.png', './Project4.png'].map((path) => {
    const tex = textureLoader.load(path);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(110, -239);
    tex.offset.set(-60, 500);
    tex.rotation = Math.PI / -2;
    return tex;
  });

  return { textFaces, textures };
}