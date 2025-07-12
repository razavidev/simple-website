interface AccentBtnProps {
  value: string;
  classes?: string;
}

const AccentBtn = ({ value, classes = "" }: AccentBtnProps) => {
  return <button className={`--accent-btn ${classes}`}>{value}</button>;
};

export default AccentBtn;
