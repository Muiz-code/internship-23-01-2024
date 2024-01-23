const IconText = ({
  icon,
  text,
  text2,
  divStyle,
  textStyle,
  text2Style,
  iconStyle,
}) => {
  return (
    <div className={divStyle}>
      <img src={icon} className={iconStyle} alt="icon is here" />
      <h1 className={textStyle}>{text}</h1>
      <h1 className={text2Style}>{text2}</h1>
    </div>
  );
};

export default IconText;
