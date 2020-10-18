const { Service, Characteristic } = require('../types');
const WyzeAccessory = require('./WyzeAccessory');

module.exports = class WyzeCameraV2 extends WyzeAccessory {
  constructor(plugin, homeKitAccessory) {
    super(plugin, homeKitAccessory);

    this.getCharacteristic(Characteristic.EventSnapshotsActive)
        .on('set', this.setEventSnapshotsActive.bind(this))
        .on('get', this.getEventSnapshotsActive.bind(this));
    this.getCharacteristic(Characteristic.HomeKitCameraActive)
        .on('set', this.setHomeKitCameraActive.bind(this))
        .on('get', this.getHomeKitCameraActive.bind(this));
  }

  getCameraService() {
    this.plugin.log.debug(`[CameraV2] Retrieving previous service for "${this.display_name}"`);
    let service = this.homeKitAccessory.getService(service.CameraOperatingMode);

    if (!service) {
      this.plugin.log.debug(`[CameraV2] Adding service for "${this.display_name}"`);
      service = this.homeKitAccessory.addService(service.CameraOperatingMode);
    }

    return service;
  }

  updateCharacteristics(device) {
    this.plugin.log.debug(`[CameraV2] Updating status of "${this.display_name}"`);
    //this.getOnCharacteristic().updateValue(device.device_params.open_close_state);
  }

  setEventSnapshotsActive(vaule,callback){

  }
  getEventSnapshotsActive(vaule,callback){

  }
  setHomeKitCameraActive(vaule,callback){

  }
  getHomeKitCameraActive(value,callback)
  {
    this.plugin.log(`Getting Power for ${this.display_name}`);

  }

};
