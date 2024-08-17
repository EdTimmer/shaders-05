import * as THREE from 'three'
import Experience from '../Experience'
import vertexShader from '../shaders/3/vertex_3.glsl'
import fragmentShader from '../shaders/3/fragment_3.glsl'

export default class SurfaceThree {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
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
    const points = [];
    for ( let i = 0; i < 11; i ++ ) {
      points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 30 + 8, ( i - 5 ) * 2 ) );
    }
    // this.geometry = new THREE.PlaneGeometry(50, 50, 32, 32);
    // this.geometry = new THREE.SphereGeometry(26, 32, 32);
    // this.geometry = new THREE.BoxGeometry(50, 50, 50, 32, 32, 32);
    // this.geometry = new THREE.CylinderGeometry(26, 26, 50, 32);
    this.geometry = new THREE.LatheGeometry( points );
    // this.geometry = new THREE.IcosahedronGeometry(26, 0);
    // this.geometry = new THREE.TorusGeometry(26, 10, 16, 100);
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 50, 0);
    this.mesh.rotation.set(Math.PI * 1.5, 0, 0);

    this.meshPosition = this.mesh.position;
    this.meshQuaternion = this.mesh.quaternion;
    this.scene.add(this.mesh);
  } 

  update() {    
    this.material.uniforms.u_Time.value = this.experience.time.getElapsedTime().toFixed(2);
    this.mesh.position.z = Math.sin(this.experience.time.elapsed * (-0.0005)) * 150;
    this.mesh.position.y = 150 + Math.cos(this.experience.time.elapsed * (-0.0005)) * 150;
    // this.mesh.position.z = Math.sin(this.experience.time.elapsed * (-0.00005)) * 15;
  }
}