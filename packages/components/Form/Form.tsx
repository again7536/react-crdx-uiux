/*
  Form component is not included in original KRDS, but added for consistency.
*/

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return (
    <form>
      <div className='fieldset'>{children}</div>
    </form>
  );
};

export default Form;
