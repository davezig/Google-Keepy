import classes from "./Card.module.css";

// This is a wrapper that will give components a card styling.
// It can be wrapped around any component.
// The props.children that are being returned is the code between the Card tags where it's used

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
