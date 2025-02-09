/*
  FormGroup component is not included in original KRDS, but added for consistency.
*/

interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="form-group">{children}</div>;
};

export default FormGroup;
