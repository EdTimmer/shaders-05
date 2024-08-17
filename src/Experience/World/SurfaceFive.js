import * as THREE from 'three'
import Experience from '../Experience'
import vertexShader from '../shaders/5/vertex_5.glsl'
import fragmentShader from '../shaders/5/fragment_5.glsl'

export default class SurfaceFive {
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
    this.geometry = new THREE.SphereGeometry(40, 32, 32);
    // this.geometry = new THREE.BoxGeometry(50, 50, 50, 32, 32, 32);
    // this.geometry = new THREE.TorusGeometry(26, 10, 16, 100);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
    this.mesh.rotation.set(Math.PI * 0.5, Math.PI * 0.5, 0);


    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
    this.scene.add(this.mesh);
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);
    this.mesh.rotation.y -= 0.001;
    // this.mesh.rotation.z -= 0.001;
    // this.mesh.rotation.x += 0.001;
    // this.mesh.rotation.y -= 0.001;
    // this.mesh.position.z = Math.sin(this.experience.time.elapsed * (-0.00005)) * 150;
    // this.mesh.position.x = 150 + Math.cos(this.experience.time.elapsed * (-0.00005)) * 150;
    // this.mesh.postion.z += Math.sin(this.experience.time.elapsed * (-0.0005)) * 150;
    // this.mesh.postion.x += Math.cos(this.experience.time.elapsed * (-0.0005)) * 150;
  }
}