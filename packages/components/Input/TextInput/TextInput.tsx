import Button, { ButtonProps } from '@/components/Action/Button/Button';
import Icon from '@/components/Others/Icon/Icon';
import { InputHTMLAttributes, useState } from 'react';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  hint?: string;
  status?: 'error' | 'success' | 'information' | 'none';
  size?: 'small' | 'medium' | 'large';
  buttons?: React.ReactElement<ButtonProps>[] | React.ReactElement<ButtonProps>;
  onDelete?: () => void;
}

const TextInput = ({
  id,
  label,
  hint,
  status = 'none',
  size = 'medium',
  buttons,
  onDelete,
  type,
  ...props
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasButtons = buttons || !!onDelete || type === 'password';
  const realType = type === 'password' && showPassword ? 'text' : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <div className="form-tit">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className={`form-conts is-${status} ${hasButtons ? 'btn-ico-wrap' : ''}`} data-delete={!!onDelete}>
        <input {...props} id={id} type={realType} className={`krds-input ${size}`} />
        <div className="btn-group">
          {!!onDelete && (
            <Button
              variant="icon"
              color="none"
              className="pure btn-delete-input"
              screenReaderTextForIcon="내용 삭제"
              onClick={onDelete}
            >
              <Icon name="delete-fill" />
            </Button>
          )}
          {type === 'password' && (
            <Button
              variant="icon"
              color="none"
              onClick={handleShowPassword}
              screenReaderTextForIcon="입력한 비밀번호 보기/가리기"
            >
              <Icon name={showPassword ? 'pw-visible-on' : 'pw-visible'} />
            </Button>
          )}
          {buttons}
        </div>
      </div>
      {hint && <p className="form-hint">{hint}</p>}
    </div>
  );
};

export default TextInput;
