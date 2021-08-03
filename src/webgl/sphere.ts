import * as THREE from 'three';
import GSAP from 'gsap';
import { debounce } from '../helpers/debounce';
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';

export type Settings = {
  uFrequency: number;
  uAmplitude: number;
  uDensity: number;
  uStrength: number;
  uOpacity: number;
};

export default class Sphere {
  private settings: Settings;
  private element: HTMLElement;
  private elementInView: boolean;
  private viewport: { width: number; height: number };
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private canvas: HTMLCanvasElement;
  private camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;
  private geometry!: THREE.IcosahedronGeometry;
  private material!: THREE.ShaderMaterial;
  private mesh!: THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial>;
  private mouse: { x: number; y: number };

  constructor(_settings: Settings, _element: HTMLElement) {
    this.settings = _settings;
    this.element = _element;
    this.elementInView = false;
    this.viewport = { width: window.innerWidth, height: window.innerHeight };
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.canvas = this.renderer.domElement;
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.viewport.width / this.viewport.height,
      0.1,
      10
    );
    this.clock = new THREE.Clock();
    this.mouse = { x: 0, y: 0 };
  }

  public init = () => {
    this.addCanvas();
    this.addCamera();
    this.addMesh();
    //this.addEventListeners();
    this.onResize();
    this.update();
  };

  private addCanvas = () => {
    this.canvas.classList.add('webgl');
    this.element.appendChild(this.canvas);
  };

  private addCamera = () => {
    this.camera.position.set(0, 0, 2.5);
    this.scene.add(this.camera);
  };

  private addMesh = () => {
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

  private addEventListeners = () => {
    window.addEventListener(
      'mousemove',
      debounce((event: MouseEvent) => {
        this.onMouseMove(event);
      }, 50)
    );
  };

  private onMouseMove = (_event: MouseEvent) => {
    this.mouse.x = this.getRandomIntInclusive(1.3, 1.5);
    this.mouse.y = this.getRandomIntInclusive(1.2, 1.4);

    GSAP.to(this.mesh.material.uniforms.uFrequency, { value: this.mouse.x });
    GSAP.to(this.mesh.material.uniforms.uAmplitude, { value: this.mouse.x });
    GSAP.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y });
    GSAP.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y });

    console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`);
  };

  private getRandomIntInclusive(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private onResize = () => {
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

  private update = () => {
    if (this.elementInView) {
      const elapsedTime = this.clock.getElapsedTime();
      this.mesh.rotation.y = elapsedTime * 0.05;
      this.mesh.rotation.x = elapsedTime * 0.03;
      this.render();
      window.requestAnimationFrame(this.update);
    }
  };

  public isNotInView = () => {
    this.elementInView = false;
  };

  public isInView = () => {
    this.elementInView = true;
    this.update();
  };

  private render = () => {
    this.renderer.render(this.scene, this.camera);
  };
}
