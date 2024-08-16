import * as THREE from "three"
import Experience from "../Experience"
import Environment from "./Environment"
import SurfaceOne from "./SurfaceOne"
import SurfaceTwo from "./SurfaceTwo"
import SurfaceThree from "./SurfaceThree"
import SurfaceFour from "./SurfaceFour"
import SurfaceFive from "./SurfaceFive"
import SurfaceSix from "./SurfaceSix"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resources = this.experience.resources
    this.debug = this.experience.debug
    // this.axisHelper = new THREE.AxesHelper(100)

    // this.scene.add(this.axisHelper)

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('world')
    }

    // if (this.camera) {
    //   this.camera.instance.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2)
    // }



    // Wait for resources
    this.resources.on('ready', () => {
      // Setup
      // this.surfaceOne = new SurfaceOne();
      // this.surfaceTwo = new SurfaceTwo();
      // this.surfaceThree = new SurfaceThree();
      this.surfaceFour = new SurfaceFour();
      this.surfaceFive = new SurfaceFive();
      // this.surfaceSix = new SurfaceSix();

      this.environment = new Environment()
           
      // Make camera look at the center of surfaceFour
      // this.camera.instance.lookAt(this.surfaceFive.mesh.position)
      // this.camera.instance.rotation.z = Math.PI / 3;



      // Pass engineGroup to the camera
      // this.camera.setTarget(-150, 0, 0)
      // this.camera.instance.rotateY(Math.PI * 1.5)
      // this.camera.instance.rotateY(Math.PI * 1.5)
    })
  }

  update() {
    if (this.camera) {
      this.camera.update()
    }

    // if (this.surfaceOne) { 
    //   this.surfaceOne.update()
    // }
    // if (this.surfaceTwo) {
    //   this.surfaceTwo.update()
    // }
    // if (this.surfaceThree) {
    //   this.surfaceThree.update()
    // }
    if (this.surfaceFour) {
      this.surfaceFour.update()
    }
    if (this.surfaceFive) {
      this.surfaceFive.update()
    }
    // if (this.surfaceSix) {
    //   this.surfaceSix.update()
    // }
  }
}