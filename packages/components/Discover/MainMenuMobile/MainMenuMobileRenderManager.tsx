import { MainMenuMobileProps } from './MainMenuMobile';
import MainMenuMobileRendererType1 from './MainMenuMobileRendererType1';
import MainMenuMobileRendererType2 from './MainMenuMobileRendererType2';

const MainMenuMobileRenderManager = ({ type, ...props }: Omit<MainMenuMobileProps, 'children'>) => {
  return type === 'type1' ? <MainMenuMobileRendererType1 {...props} /> : <MainMenuMobileRendererType2 {...props} />;
};

export default MainMenuMobileRenderManager;
