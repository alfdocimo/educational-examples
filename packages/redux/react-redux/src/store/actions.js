/**
 * Describes the actions that will specify the intent of the user.
 * In this case or app will only expose an action to increment a counter
 * 
 */

const Types = {
  INCREMENT: "INCREMENT",
};

const increment = () => ({
  type: Types.INCREMENT,
});

export { increment, Types };
