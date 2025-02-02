import Button from "./Button";
import Icon from "../../Icon/Icon";

export default {
  title: "Action/Button",
  component: Button,
};

export const Primary = () => <Button color='primary'>버튼</Button>;

export const Secondary = () => <Button color='secondary'>버튼</Button>;

export const Tertiary = () => <Button color='tertiary'>버튼</Button>;

export const Text = () => <Button variant='text'>버튼</Button>;

export const IconButton = () => (
  <Button variant='icon'>
    <Icon name='login-go' />
  </Button>
);

export const IconButtonBorder = () => (
  <Button variant='icon-border'>
    <Icon name='login-go' />
  </Button>
);

export const Xsmall = () => <Button size='xsmall'>버튼</Button>;

export const Small = () => <Button size='small'>버튼</Button>;

export const Medium = () => <Button size='medium'>버튼</Button>;

export const Large = () => <Button size='large'>버튼</Button>;

export const Xlarge = () => <Button size='xlarge'>버튼</Button>;

export const Disabled = () => <Button disabled>버튼</Button>;
