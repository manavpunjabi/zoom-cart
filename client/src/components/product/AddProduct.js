import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addProduct } from "../../actions/product";

const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    // file: "",
    // setFileName: "Choose File",
  });

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");

  const { name, desc, price } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  };

  const onSubmitFile = (e) => {
    const fileData = new FormData();
    fileData.append("file", file);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Add Product</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            placeholder="name"
            required
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Description</label>
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => onChange(e)}
            placeholder="description"
            required
            id="desc"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => onChange(e)}
            placeholder="price"
            required
            id="number"
            className="form-control"
          />
        </div>
        <label htmlFor="image">Image</label>
        <div className="custom-file">
          <input
            type="file"
            name="file"
            id="customFile"
            className="custom-file-input"
            placeholder="choose file"
            onChange={onChangeFile}
          />
          <label htmlFor="customFile" className="custom-file-label">
            {fileName}
          </label>
          <input
            type="button"
            value="Upload"
            className="btn btn-primary mt-4"
            onClick={onSubmitFile}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary my-4 btn-block"
        />
        <Link to="/homepage">Go Back</Link>
      </form>
    </Fragment>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(AddProduct);
