# My Projects

**Name:** Nursena Idrizi
**University:** South East European University (SEEU)
**Program:** Computer Sciences and Technologies

Weekly coursework repository.

## Week 1: Hello, three.js

A first 3D scene built with [three.js](https://threejs.org/).

**What it shows:**
- A rotating orange cube and a low-poly sphere behind it
- Ambient and directional lighting on standard materials
- Mouse controls with `OrbitControls` (drag to orbit, scroll to zoom)
- A responsive canvas that resizes with the browser window

**Files:**

| File | Purpose |
|------|---------|
| `index.html` | Page that loads the script |
| `main.js` | Scene, camera, renderer, objects, lights, animation loop |
| `package.json` | Project dependencies |

## How to run

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal. Opening `index.html` directly won't work, because the project uses module imports.
