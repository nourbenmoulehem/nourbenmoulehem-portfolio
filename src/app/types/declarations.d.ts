declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { GLTF } from 'three';
  export class GLTFLoader {
    constructor(manager?: THREE.LoadingManager);
    load(url: string, onLoad: (gltf: GLTF) => void, onProgress?: (event: ProgressEvent) => void, onError?: (error: ErrorEvent) => void): void;
  }
}
