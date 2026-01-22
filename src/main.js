import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { projectLinks, linkedinLink } from './config/constants.js';
import { loadTextures } from './core/textures.js';
import { setRenderer, handleResize } from './core/renderer.js';
import { setCamera, setControls } from './core/camera&controls.js';
import { EventManager } from './core/eventManager.js';
import { createScene, setLights } from './core/scene.js';

// Global variables
let scene, camera, renderer, controls;
let textures = [], intersects = [], RayObjects = [];
let flag = true;
let machineFaceMesh = null;
let currentTextureIndex = 0;


// Raycaster setup
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

// Load Textures
const { textFaces, textures: tex } = loadTextures();
textures = tex;

// Load GLTF model
function loadModel() {
  const loader = new GLTFLoader();
  loader.load(
    './Model/cyberpunkbuild6.glb', 
    (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      model.traverse((child) => {
        if (!child.isMesh) return;

        if (child.material.name === 'Faces2') {
          applyTexture(child, textFaces[1]);
        } else if (child.material.name === 'Faces') {
          applyTexture(child, textFaces[0]);
        } else if (child.material.name ==='Machineface') {
          applyTexture(child, textFaces[2]);
          machineFaceMesh = child;
          RayObjects.push(child);
        }
        if (child.name.match(/Text00[2-9]|Text011|Text01[6-9]|Text02[0-1]/) || child.material.name.includes('Signface') || child.material.name.includes('logo')) {
          RayObjects.push(child);
        }
      });
    },
    (xhr) => {
      //console.log(`Loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
    },
    (error) => {
      console.error('An error occurred loading the model:', error);
    }
  );
}

// Helpers
function applyTexture(mesh, texture) {
  const newMat = mesh.material.clone();
  newMat.map = texture;
  newMat.needsUpdate = true;
  mesh.material = newMat;
}

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

function handlePick() {
  if (intersects.length > 0) {
    const obj = intersects[0].object;
    if (obj.material.name.includes('Sign')) {
      const targetPos = new THREE.Vector3(-48.65116785540847, 0.34880814548175654, 6.832335275748206); 
      const lookTarget = new THREE.Vector3(-48.65116785540847, 0.34880814548175654, 9.989454547966633);
      moveCameraToSign(targetPos, lookTarget);
    } else if (obj.name.includes('Text002') ||  obj.name.includes('Text011') || obj.name.includes('Text012') || obj.name.includes('Text016') || obj.name.includes('Text017') || obj.name.includes('Text018')) {
      returnCameraToOriginal();
    } else if (obj.name.includes('Text004') || obj.name.includes('Text020')) {

        const targetPos = new THREE.Vector3(-47.910590759461986, 0.18128279626426014, 5.6969437199471304); 
        const lookTarget = new THREE.Vector3(-47.88716785540847, 0.18180814548175654, 9.989454547966633);
        moveCameraToMachine(targetPos, lookTarget)
    
      }else if (obj.name.includes('Text005') || obj.name.includes('Text021')) {
        

        const targetPos = new THREE.Vector3(-49.39325265742936, 1.052803968027526, 6.738858659764541); 
        const lookTarget = new THREE.Vector3(-10.39325265742936, 1.052803968027526, 7.138858659764541);
        moveCameraToSign(targetPos, lookTarget);
    
      }
      else if (obj.name.includes('Text008') && machineFaceMesh) {
        
        currentTextureIndex = (currentTextureIndex + 1) % textures.length; 
        machineFaceMesh.material.map = textures[currentTextureIndex];
        machineFaceMesh.material.needsUpdate = true;

      }
      else if (obj.name.includes('Text009') && machineFaceMesh) {
        if (currentTextureIndex === 0) {
          currentTextureIndex = textures.length;
        }
        currentTextureIndex = (currentTextureIndex - 1) % textures.length; 
        machineFaceMesh.material.map = textures[currentTextureIndex];
        machineFaceMesh.material.needsUpdate = true;

      }
      else if (obj.material && obj.material.name && obj.material.name.includes('Machineface')) {
        if (machineFaceMesh) {
          const link = projectLinks[currentTextureIndex];
          if (link) {
            window.open(link, '_blank'); 
          }
        }
      }
      else if (obj.material && obj.material.name && obj.material.name.includes('logo')) {
        if (obj.material.name.includes('glogo')) {
          window.open(projectLinks[0], '_blank'); 
        }
        else{
          window.open(linkedinLink, '_blank');
        }
      }
      else if (obj.name.includes('Text003') || obj.name.includes('Text019')) {  
        const page = document.querySelector('.page.aboutme');
        if (page.style.display !== 'block') {     
          page.style.display = 'block';
          gsap.fromTo(page, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
      }
    }
}

// Animations
function moveCameraToSign(targetPos, lookTarget) {
  controls.enabled = false;
  flag = false;

  gsap.to(camera.position, {
    duration: 2.5,
    x: targetPos.x,
    y: targetPos.y,
    z: targetPos.z,
    ease: "power2.inOut",

    onUpdate: () => camera.lookAt(lookTarget),
  });
}

function moveCameraToMachine(targetPos, lookTarget) {
  controls.enabled = false;
  flag = false;

  const originalPos = new THREE.Vector3(-48.710590759461986, 0.18128279626426014, 5.6969437199471304);
  const originalLook = new THREE.Vector3(-46.52956909239201, 1.2465027766167204, 7.712315697813718); 

  gsap.to(camera.position, {
    duration: 1.0,
    x: originalPos.x,
    y: originalPos.y,
    z: originalPos.z,
    ease: "power2.inOut",
    onUpdate: () => camera.lookAt(originalLook),
    onComplete: () => {
      gsap.to(camera.position, {
        duration: 1.5,
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        ease: "power2.inOut",

        onUpdate: () => camera.lookAt(lookTarget),
      });
    }
  });

}

function returnCameraToOriginal() {

  const originalPos = new THREE.Vector3(-51.75051610189534, 1.671636865344774, 4.511617716313425);
  const originalLook = new THREE.Vector3(-46.52956909239201, 1.2465027766167204, 7.712315697813718); 

  gsap.to(camera.position, {
    duration: 2.5,
    x: originalPos.x,
    y: originalPos.y,
    z: originalPos.z,
    ease: "power2.inOut",
    onUpdate: () => camera.lookAt(originalLook),
    onComplete: () => {
      controls.enabled = true;
      flag = true;
    }
  });
}

const hidePage = (page) => {
  gsap.to(page, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => { page.style.display = 'none'; }
  });
};

function animate() {
  raycaster.setFromCamera(pointer, camera);
  intersects = raycaster.intersectObjects(RayObjects);
  document.body.style.cursor = intersects.length ? 'pointer' : 'default';
  requestAnimationFrame(animate);
  if (flag) controls.update();
  renderer.render(scene, camera);
}

// Init
function init(){
  scene = createScene();
  setLights(scene);
  renderer = setRenderer();
  camera = setCamera();
  controls = setControls(camera, renderer);
  handleResize(camera, renderer);
  loadModel();
  const eventManager = new EventManager(
  updatePointer,
  handlePick,
  hidePage
  );
  eventManager.setEvents();
  animate();
}
init();

