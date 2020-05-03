import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { addImage, getImage } from "../../actions/product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AddImage = ({
  history,
  product: { fileName, filePath },
  match,
  addImage,
  getImage,
}) => {
  useEffect(() => {
    getImage(match.params.id);
  }, [getImage, match.params.id]);

  const classes = useStyles();
  const [file, setFile] = useState("");
  const [currentFileName, setCurrentFileName] = useState("Choose File");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setCurrentFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const id = match.params.id;
    addImage(id, formData);
  };

  return (
    <div className={classes.root}>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          {/* icon */} Add An Image To Your Product
        </h4>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="custom-file mb-4">
            <input
              type="file"
              id="customFile"
              className="custom-file-input"
              onChange={onChange}
            />
            <label htmlFor="customFile" className="custom-file-label">
              {currentFileName}
            </label>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Upload
          </Button>
        </form>
        {fileName && filePath && (
          <Fragment>
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <h3 className="text-center">{fileName}</h3>
                <img style={{ width: "100%" }} src={filePath} alt="" />
              </div>
            </div>
            <Button
              style={{ paddingLeft: "30px" }}
              variant="contained"
              color="secondary"
              href="/homepage"
            >
              Back to all products
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

AddImage.propTypes = {
  addImage: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  getImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { addImage, getImage })(AddImage);
