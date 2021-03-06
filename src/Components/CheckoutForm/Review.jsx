import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const Review = ({ token, shippingCost }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {" "}
        Order Summary{" "}
      </Typography>
      <List disablePadding>
        {token.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.id}>
            <ListItemText
              primary={product.product_name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            {token.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
