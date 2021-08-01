import * as THREE from 'three';
import GSAP from 'gsap';
import { debounce } from '../helpers/debounce';
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';

class Sphere {
  private viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  private scene = new THREE.Scene();
  private renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  private canvas = this.renderer.domElement;
  private camera = new THREE.PerspectiveCamera(
    75,
    this.viewport.width / this.viewport.height,
    0.1,
    10
  );
  private clock = new THREE.Clock();
  private geometry!: THREE.IcosahedronGeometry;
  private material!: THREE.ShaderMaterial;
  private mesh!: THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>;
  private mouse = {
    x: 0,
    y: 0,
  };
  private settings = {
    // vertex
    uFrequency: 1.2,
    uAmplitude: 1.2,
    uDensity: 1.3,
    uStrength: 1.1,
    // fragment
    uOpacity: 0.9,
  };

  public addCanvas = (_elem: HTMLElement | null) => {
    this.canvas.classList.add('webgl');
    if (_elem) _elem.appendChild(this.canvas);
  };

  public addCamera = () => {
    this.camera.position.set(0, 0, 2.5);
    this.scene.add(this.camera);
  };

  public addMesh = () => {
    this.geometry = new THREE.IcosahedronGeometry(1, 64);

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: this.settings.uFrequency },
        uAmplitude: { value: this.settings.uAmplitude },
        uDensity: { value: this.settings.uDensity },
        uStrength: { value: this.settings.uStrength },
        uOpacity: { value: this.settings.uOpacity },
      },
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.scene.add(this.mesh);
  };

  public addEventListeners = () => {
    window.addEventListener(
      'mousemove',
      debounce((event: MouseEvent) => {
        this.onMouseMove(event);
      }, 50)
    );
  };

  public onResize = () => {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (this.viewport.width < this.viewport.height) {
      this.mesh.scale.set(0.75, 0.75, 0.75);
    } else {
      this.mesh.scale.set(1, 1, 1);
    }

    this.camera.aspect = this.viewport.width / this.viewport.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  };

  private getRandomIntInclusive(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public onMouseMove = (_event: MouseEvent) => {
    this.mouse.x = this.getRandomIntInclusive(1.3, 1.5);
    this.mouse.y = this.getRandomIntInclusive(1.2, 1.4);

    GSAP.to(this.mesh.material.uniforms.uFrequency, { value: this.mouse.x });
    GSAP.to(this.mesh.material.uniforms.uAmplitude, { value: this.mouse.x });
    GSAP.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y });
    GSAP.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y });

    console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`);
  };

  public update = () => {
    const elapsedTime = this.clock.getElapsedTime();
    this.mesh.rotation.y = elapsedTime * 0.05;
    this.mesh.rotation.x = elapsedTime * 0.03;
    this.render();
    window.requestAnimationFrame(this.update);
  };

  public render = () => {
    this.renderer.render(this.scene, this.camera);
  };
}

export default new Sphere();
