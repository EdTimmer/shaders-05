import * as THREE from 'three'
import Experience from '../../Experience'
import CubeOne from './CubeOne'
import CubeTwo from './CubeTwo'

export default class CenterGroup {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setInstance()
    this.setCubeOne()
    this.setCubeTwo()
    this.addCenterGroup()
  }

  setInstance() {
    this.instance = new THREE.Group();
  }
  
  setCubeOne() {
    this.cubeOne = new CubeOne();
    this.cubeOne.setMesh();
    this.instance.add(this.cubeOne.getMesh());
  }

  setCubeTwo() {
    this.cubeTwo = new CubeTwo();
    this.cubeTwo.setMesh();
    
    this.instance.add(this.cubeTwo.getMesh());
  }

  addCenterGroup() {
    this.scene.add(this.instance);
  }

  update() {
    if (this.cubeOne) {
      this.cubeOne.update();
    }
    if (this.cubeTwo) {
      this.cubeTwo.update();
    }

    this.instance.rotation.z -= 0.001
  }
}