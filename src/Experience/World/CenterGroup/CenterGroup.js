import * as THREE from 'three'
import Experience from '../../Experience'
import SurfaceOne from './SurfaceOne'
import SurfaceTwo from './SurfaceTwo'

export default class CenterGroup {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    // this.camera = this.experience.camera.instance;
    // this.mouse = new THREE.Vector2();
    // this.raycaster = new THREE.Raycaster();

    this.setInstance()
    this.setSurfaceOne()
    this.setSurfaceTwo()
    this.addCenterGroup()
  }

  setInstance() {
    this.instance = new THREE.Group();
  }
  
  setSurfaceOne() {
    this.surfaceOne = new SurfaceOne();
    this.surfaceOne.setMesh();
    
    // this.SurfaceOne.geometry.rotateX(Math.PI * 2.5);
    // this.SurfaceOne.instance.mesh.position.set(0, 0, 60);
    // this.SurfaceOne.instance.rotateX(Math.PI * 2.5);
    // this.SurfaceOne.instance.position.set(0, 0, 60.0);
    // this.SurfaceOne.mesh.position.set(0, 0, 60.0);
    this.instance.add(this.surfaceOne.getMesh());
    // this.SurfaceOne.setPosition(0, 0, 60);
    // this.SurfaceOne.geometry.rotateX(-Math.PI * 2.5);
    // this.SurfaceOne.geometry.rotateZ(Math.PI);
  }

  setSurfaceTwo() {
    this.surfaceTwo = new SurfaceTwo();
    this.surfaceTwo.setMesh();
    
    
    // this.SurfaceTwo.mesh.position.set(0, 0, -60.0);
    // this.SurfaceTwo.geometry.rotateX(Math.PI * 2.5);
    // this.SurfaceTwo.mesh.position.set(0, 0, -60.0);
    this.instance.add(this.surfaceTwo.getMesh());
    // this.surfaceTwo.instance.position.set(0, 0, 20);
    // this.SurfaceTwo.setPosition(51.96, 0, -30);
    // this.SurfaceTwo.geometry.rotateX(Math.PI * 2.5);
    // this.SurfaceTwo.geometry.rotateY(Math.PI * 1.75);
  }

  addCenterGroup() {
    this.scene.add(this.instance);
  }

  update() {
    if (this.surfaceOne) {
      this.surfaceOne.update();
    }
    if (this.surfaceTwo) {
      this.surfaceTwo.update();
    }

    // this.instance.rotation.x -= 0.001;
    // this.instance.rotation.y -= 0.001;
    this.instance.rotation.z -= 0.001
  }
}