import React, { Fragment } from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { deleteProduct } from "../../actions/product";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const ProductItem = ({
  product: { _id, name, desc, price, image },
  admin,
  deleteProduct,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link href={`/products/${_id}`} size="small" color="primary">
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{desc}</Typography>
          </CardContent>
        </Link>
        <CardActions>
          <Button>{price}</Button>
          {admin && (
            <Fragment>
              <Button
                onClick={(e) => deleteProduct(_id)}
                size="small"
                color="secondary"
              >
                Delete
              </Button>
              <Button href={`/${_id}/edit`} size="small" color="secondary">
                Edit
              </Button>
            </Fragment>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteProduct })(ProductItem);
