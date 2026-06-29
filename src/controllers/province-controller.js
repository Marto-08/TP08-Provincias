import httpStatus from "http-status-codes";
import provinceService from "../services/province-service.js";

const extractErrorMessage = (error) => {
  if (error instanceof AggregateError && Array.isArray(error.errors) && error.errors.length) {
    return error.errors.map((inner) => inner?.message || String(inner)).join("; ");
  }

  if (error.message) {
    return error.message;
  }

  return "Error interno del servidor.";
};

const sendErrorResponse = (res, error) => {
  const status = error.statusCode || httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  const message = extractErrorMessage(error);
  return res.status(status).send(message);
};

export const getAll = async (req, res) => {
  try {
    const provinces = await provinceService.getAllProvinces();
    return res.status(httpStatus.StatusCodes.OK).json(provinces);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const province = await provinceService.getProvinceById(id);
    return res.status(httpStatus.StatusCodes.OK).json(province);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export const create = async (req, res) => {
  try {
    const province = await provinceService.createProvince(req.body);
    return res.status(httpStatus.StatusCodes.CREATED).json(province);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const province = await provinceService.updateProvince(req.body);
    return res.status(httpStatus.StatusCodes.CREATED).json(province);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await provinceService.deleteProvince(id);
    return res.status(httpStatus.StatusCodes.OK).json({ message: "Provincia eliminada correctamente." });
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};
