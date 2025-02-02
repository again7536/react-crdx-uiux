// <a href="https://www.naver.com" class="krds-btn small link">
// 	<span class="underline">텍스트 사이의 링크 (높이 값 초기화)</span>
// 	<i class="svg-icon ico-go"></i>
// </a>
// <a href="#!" class="krds-btn medium link basic">
// 	<span class="underline">공유하기</span>
// 	<i class="svg-icon ico-share"></i>
// </a>
// <a href="#!" class="krds-btn large link basic">
// 	<span>바로가기</span>
// 	<i class="svg-icon ico-go"></i>
// </a>
// <a href="#!" class="krds-btn large link disabled">
// 	<span class="underline">바로가기</span>
// 	<i class="svg-icon ico-go"></i>
// </a>

import Icon from "@/components/Icon/Icon";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  size?: "small" | "medium" | "large";
  underline?: boolean;
  disabled?: boolean;
  basic?: boolean;
  icon?: "go" | "angle right";
}

const Link = ({
  children,
  href,
  className,
  size = "medium",
  underline = false,
  disabled = false,
  basic = false,
  icon = "go",
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      href={href}
      className={`krds-btn ${size} link ${basic ? "basic" : ""} ${
        disabled ? "disabled" : ""
      } ${className}`}
    >
      <span className={underline ? "underline" : ""}>{children}</span>
      {icon && <Icon name={icon} />}
    </a>
  );
};

export default Link;
