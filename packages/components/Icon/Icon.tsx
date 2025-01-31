interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  return <i className={`svg-icon ico-${name}`}></i>;
};

export default Icon;
