


## 




<p align="center">
  <!-- Core project info -->
  <img src="https://img.shields.io/badge/Project-Cyberpunk%203D%20Portfolio-9C27B0?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Completed-blueviolet?style=for-the-badge" />
  <!-- <img src="https://img.shields.io/github/repo-size/Kfir989/Cyberpunk-Portfolio?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/Kfir989/cyberpunk-portfolio?style=for-the-badge" /> -->
  <img src="https://img.shields.io/github/last-commit/Kfir989/cyberpunk-portfolio?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Style-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <br/>

  <!-- Tech stack -->
  <img src="https://img.shields.io/badge/3D-Three.js-black?style=for-the-badge&logo=three.js" />
  <img src="https://img.shields.io/badge/Animation-GSAP-88CE02?style=for-the-badge&logo=greensock" />
  <img src="https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/Testing-Vitest-6E9F18?style=for-the-badge&logo=vitest" />
  <img src="https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Models-Blender-F5792A?style=for-the-badge&logo=blender" />
  <img src="https://img.shields.io/badge/Format-GLTF%2FGLB-8E8E8E?style=for-the-badge&logo=three.js"/>
  <img src="https://img.shields.io/badge/Lighting-Baked-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Environment-HDRI-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Effects-Bloom%20%26%20Glow-FF69B4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/UI-Interactive%20Signs-03A9F4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Controls-Orbit%20%26%20Touch-00BCD4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Design-Cyberpunk%20Aesthetic-7C4DFF?style=for-the-badge" />
</p>


---
## Deployed link  - https://avportfolio-fawn.vercel.app/

## 📋 Overview

This project demonstrates expertise in:
- **3D Modeling (Blender)**
- **Lighting & Texture Baking**
- **Real-Time Rendering (Three.js)**
- **Animation & Scene Control (GSAP)**
- **Web Optimization (Vite + GLTF)**
- **Automated Testing (Vitest)**
- **Deployment**

---

## 🎨 Design & Modeling in Blender

The design process started inside **Blender**, focusing on:
- A **floating Bungalow** layout with layered geometry.
- **Custom neon signs**, glowing panels, and emissive materials.
- Careful **composition and scale** for camera movement and storytelling.
- **Low-poly optimization** to ensure smooth web performance.

Each 3D object was named and grouped systematically (`Sign_01`, `Building_02`,), to simplify later identification and manipulation inside **Three.js**.

<p align="center">
  <img src="public/blender_view.png" alt="Blender design" width="800">
</p>

---

## 🔥 Baking Process

Since real-time lighting can be GPU-heavy, lighting was **baked in Blender Cycles** and exported as textures.

### Steps:
1. **UV Unwrapping** all static meshes.
2. Creating a **new image texture** for each baked surface.
3. Baking **diffuse + lighting passes** in Cycles.
4. Exporting baked textures and assigning them back in Blender.
5. Verifying correct UV placement under emissive materials.

This ensured the portfolio looks cinematic **without requiring dynamic lights** — improving both **performance** and **aesthetic consistency**.

---

## 🧠 Refactoring & Testing
After core functionality was complete, the project was modularized into logical components:

- core/scene.js — initializes scene and lights.

- core/renderer.js — manages WebGLRenderer setup.

- core/camera.js — defines camera movement logic.

- utils/interaction.js — handles touch/mouse events.

Unit tests were added using Vitest, verifying:

- Scene creation and light configuration.

- Renderer initialization and pixel ratio handling.

- Material update functions.

- Pointer coordinate normalization.

Tests run automatically on GitHub Actions for continuous integration.

---

## ⚙️ Technology Stack

- **JavaScript** 

- **Three.js** — 3D rendering and scene graph

- **GSAP** — Timing, tweening, animations

- **Vite** — Dev server + bundler

- **GLTFLoader / DRACOLoader** — model loaders

- **HTML & CSS** — structure and styling

- **WebGLRenderer** configured for baked lighting.

---

✨ Key Features

- ⚡ **High-performance** baked lighting (no runtime lights).

- 🌀 **GSAP animations** for camera and sign interactions.

- 💻 **Responsive** orbit and touch controls.

- 🎨 **HDRI-based reflections** and global illumination.

- 🧩 **Componentized architecture** for maintainability.

- 🧪 **Vitest**-tested rendering utilities.

- 🌐 **Optimized for web delivery** (under 5MB model).

- 🏙️ **Immersiv**e cyberpunk environment with interactive UI.

---

## Screenshots

### Preview:

<div style="display: flex; gap: 10px;">
  <img src="public/attention.png" alt="Auth 1" width="800"/>
</div>
<div style="display: flex; gap: 10px;">
  <img src="public/preview.png" alt="Auth 1" width="800"/>
</div>

### Sign interaction:
<div style="display: flex; gap: 10px;">
  <img src="public/sign.png" alt="Auth 1" width="800"/>
</div>
<div style="display: flex; gap: 10px;">
  <img src="public/aboutme.png" alt="Auth 1" width="800"/>
</div>

### Unique project display:
<div style="display: flex; gap: 10px;">
  <img src="public/machine.png" alt="Auth 1" width="800"/>
</div>
<div style="display: flex; gap: 10px;">
  <img src="public/machine1.png" alt="Auth 1" width="800"/>
</div>

### Simple and Efficient contact form:
<div style="display: flex; gap: 10px;">
  <img src="public/contact.png" alt="Auth 1" width="800"/>
</div>
