interface IdentifierProps {
  children: React.ReactNode;
  logoUrl?: string;
  logoScreenReaderText?: string;
}

const Identifier = ({
  children,
  logoUrl,
  logoScreenReaderText = "KRDS - Korea Design System",
}: IdentifierProps) => {
  return (
    <div className='krds-identifier'>
      <span
        className='logo'
        style={logoUrl ? { backgroundImage: `url(${logoUrl})` } : undefined}
      >
        <span className='sr-only'>{logoScreenReaderText}</span>
      </span>
      <span className='ban-txt'>{children}</span>
    </div>
  );
};

export default Identifier;
