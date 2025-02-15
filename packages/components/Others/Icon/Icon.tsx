import './Icon.scss';

type IconTypes =
  | 'angle up'
  | 'angle down'
  | 'angle left'
  | 'angle right'
  | 'angle disabled'
  | 'sch'
  | 'upload'
  | 'call'
  | 'faq'
  | 'like'
  | 'share'
  | 'more'
  | 'sch-plus'
  | 'go'
  | 'down'
  | 'filter'
  | 'reset'
  | 'log'
  | 'func'
  | 'func-up'
  | 'logout'
  | 'email'
  | 'print'
  | 'scrap'
  | 'del'
  | 'popup-close'
  | 'delete-fill'
  | 'plus'
  | 'setting'
  | 'link'
  | 'refresh'
  | 'toggle'
  | 'pw-visible'
  | 'pw-visible-on'
  | 'help'
  | 'page-next'
  | 'bread-home'
  | 'cal-move'
  | 'calendar'
  | 'success-fill'
  | 'information-fill'
  | 'error-fill'
  | 'complete-fill'
  | 'modal-close'
  | 'fold'
  | 'fold-right'
  | 'ellipsis'
  | 'swiper-play'
  | 'swiper-stop'
  | 'tooltip'
  | 'urgent-danger'
  | 'blog'
  | 'facebook'
  | 'instagram'
  | 'sns-x'
  | 'youtube'
  | 'all'
  | 'join'
  | 'my'
  | 'login-go'
  | 'global'
  | 'view-mode'
  | 'go-top'
  | 'login-type01'
  | 'login-type02'
  | 'login-type03'
  | 'login-type04'
  | 'login-type05'
  | 'login-type06'
  | 'flag'
  | 'file'
  | 'checkbox';

interface IconProps {
  name: IconTypes;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  pure?: boolean;
}

const Icon = ({ name, size = 'medium', pure = false }: IconProps) => {
  return <i className={`svg-icon ico-${name} ${size} ${pure ? 'pure' : ''}`}></i>;
};

export default Icon;
export type { IconTypes };
