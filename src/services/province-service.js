import ProvinceRepository from "../repositories/province-repository.js";
import Province from "../entities/province.js";
import { validarProvincia } from "../helpers/validaciones-helpers.js";

const buildError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const getAllProvinces = async () => ProvinceRepository.getAllAsync();

const getProvinceById = async (id) => {
  if (id === undefined || id === null || Number.isNaN(Number(id))) {
    throw buildError("El ID de la provincia no es válido.", 400);
  }

  const province = await ProvinceRepository.getByIdAsync(Number(id));
  if (!province) {
    throw buildError("Provincia no encontrada.", 404);
  }

  return province;
};

const createProvince = async (payload) => {
  const province = new Province(payload);
  const errors = validarProvincia(province);

  if (errors.length) {
    throw buildError(errors.join(" "), 400);
  }

  return ProvinceRepository.createAsync(province);
};

const updateProvince = async (payload) => {
  const province = new Province(payload);
  const errors = validarProvincia(province, true);

  if (errors.length) {
    throw buildError(errors.join(" "), 400);
  }

  const updated = await ProvinceRepository.updateAsync(province);
  if (!updated) {
    throw buildError("Provincia no encontrada.", 404);
  }

  return updated;
};

const deleteProvince = async (id) => {
  if (id === undefined || id === null || Number.isNaN(Number(id))) {
    throw buildError("El ID de la provincia no es válido.", 400);
  }

  const deleted = await ProvinceRepository.deleteByIdAsync(Number(id));
  if (!deleted) {
    throw buildError("Provincia no encontrada.", 404);
  }

  return deleted;
};

export default {
  getAllProvinces,
  getProvinceById,
  createProvince,
  updateProvince,
  deleteProvince,
};
