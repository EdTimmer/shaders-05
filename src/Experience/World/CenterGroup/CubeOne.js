import * as THREE from 'three'
import Experience from '../../Experience'
import vertexShader from '../../shaders/cube/vertex_cube.glsl'
import fragmentShader from '../../shaders/cube/fragment_cube.glsl'

export default class CubeOne {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

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
    this.geometry = new THREE.BoxGeometry(8, 8, 8, 32, 32, 32);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, -12, 0);
    this.mesh.rotation.set(0, Math.PI * 0.5, 0);

    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
  }

  getMesh() {

    return this.mesh;
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);

    this.mesh.rotation.y -= 0.005;
    this.mesh.rotation.x += 0.001;
    this.mesh.position.y = -16 + Math.sin(this.experience.time.elapsed * (-0.00015)) * 10;
  }
}