import * as THREE from "three"
import Experience from "../Experience"
import Environment from "./Environment"
import Box from "./Box"
import Sphere from "./Sphere"
import CenterGroup from "./CenterGroup/CenterGroup"

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resources = this.experience.resources
    this.debug = this.experience.debug

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('world')
    }

    // Wait for resources
    this.resources.on('ready', () => {
      // Setup
      this.box = new Box();
      this.sphere = new Sphere();
      this.CenterGroup = new CenterGroup();

      this.environment = new Environment()
    })
  }

  update() {
    if (this.camera) {
      this.camera.update()
    }
    if (this.box) {
      this.box.update()
    }
    if (this.sphere) {
      this.sphere.update()
    }
    if (this.CenterGroup) {
      this.CenterGroup.update()
    }
  }
}