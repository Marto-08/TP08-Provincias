export default class Province {
  constructor({ id = null, name, full_name, latitude, longitude, display_order }) {
    this.id = id !== null && id !== undefined ? Number(id) : null;
    this.name = name;
    this.full_name = full_name;
    this.latitude = latitude !== undefined ? Number(latitude) : null;
    this.longitude = longitude !== undefined ? Number(longitude) : null;
    this.display_order = display_order !== undefined ? Number(display_order) : null;
  }
}
