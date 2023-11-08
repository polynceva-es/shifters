import "./Button.css";

export const Button: React.FC = (props) => {
    const {title} = props;
  return (
    <button>{title}</button>
  );
}