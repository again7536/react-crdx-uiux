interface MastheadProps {
  children: React.ReactNode;
  className?: string;
}

const Masthead = ({ children }: MastheadProps) => {
  return (
    <div id='krds-masthead'>
      <div className='toggle-wrap'>
        <div className='toggle-head'>
          <div className='inner'>
            <span className='nuri-txt'>{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
