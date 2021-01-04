const errorAnimation = (name) => `
  &.${name}-enter {
  }
  
  &.${name}-enter-active {
    box-shadow: 0 4px 16px 0px #F1C2C2, 0 -4px 16px 0px #F1C2C2;
    transition: box-shadow 500ms;
  }
  &.${name}-enter-done {
    box-shadow: 0 4px 16px 0px #F1C2C2, 0 -4px 16px 0px #F1C2C2;
  }

  &.${name}-exit{
  }

  &.${name}-exit-active {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.29), 0 0 16px 0 rgba(0, 0, 0, 0.08);
    transition: box-shadow 500ms;
  }
`;

export { errorAnimation };
