import * as THREE from 'three'
import Experience from '../../Experience'
import vertexShader from '../../shaders/1/vertex_1.glsl'
import fragmentShader from '../../shaders/1/fragment_1.glsl'

export default class SurfaceTwo {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // this.camera = this.experience.camera.instance;
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    this.setMaterial()
    this.setGeometry()
    this.setMesh()
    this.update()
  }

  setMaterial() {
    this.material = new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true, 
      side: THREE.DoubleSide,
      uniforms: {
        u_Time: { value: 0.0 },
        u_Resolution: { value: new THREE.Vector2(50.0, 50.0) },
    },
    })
  }

  setGeometry() {
    // this.geometry = new THREE.PlaneGeometry(50, 50, 32, 32);
    // this.geometry = new THREE.SphereGeometry(26, 32, 32);
    // this.geometry = new THREE.BoxGeometry(50, 50, 50, 32, 32, 32);
    this.geometry = new THREE.BoxGeometry(8, 8, 8, 32, 32, 32);
    // this.geometry = new THREE.CylinderGeometry(6, 6, 38, 32);
    // this.geometry = new THREE.TorusGeometry(26, 10, 16, 100);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 12, 0);
    this.mesh.rotation.set(0, Math.PI * 0.5, 0);

    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
  }

  getMesh() {

    return this.mesh;
    // this.scene.add(this.mesh);
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);

    this.mesh.rotation.y += 0.005;
    this.mesh.rotation.x += 0.001;
    this.mesh.position.y = 12 + Math.sin(this.experience.time.elapsed * (0.00015)) * 5;
  }
}