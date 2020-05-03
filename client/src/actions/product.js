import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  GET_PRODUCT,
  PRODUCT_DELETED,
  FILE_SUCCESS,
  FILE_ERROR,
  FILE_FOUND,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addProduct = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/products", formData, config);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    dispatch(setAlert("Product added", "success"));
    history.push("/homepage");
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  if (window.confirm("Are you sure? This cannot be undone!"))
    try {
      await axios.delete(`/api/products/${id}`);

      dispatch({
        type: PRODUCT_DELETED,
        payload: id,
      });
      dispatch(setAlert("Product deleted", "success"));
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
};

export const editProduct = (id, formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(`/api/products/${id}`, formData, config);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    dispatch(setAlert("Product updated", "success"));
    history.push("/homepage");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

export const addImage = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post(
      `/api/products/${id}/add-image`,
      formData,
      config
    );
    dispatch({
      type: FILE_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("File Upload Successful", "success"));
  } catch (err) {
    err.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getImage = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}/get-image`);
    dispatch({
      type: FILE_SUCCESS,
      payload: res.data,
    });
    //dispatch(setAlert("File Upload Successful", "success"));
  } catch (err) {
    err.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch({
      type: FILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
