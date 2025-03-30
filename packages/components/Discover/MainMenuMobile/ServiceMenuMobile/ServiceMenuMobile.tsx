interface ServiceMenuMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

const ServiceMenuMobile = ({ title, className, ...props }: ServiceMenuMobileProps) => {
  return (
    <a {...props} className={`link ${className}`}>
      {title}
    </a>
  );
};

export default ServiceMenuMobile;
export type { ServiceMenuMobileProps };
