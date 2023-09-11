import { Page } from '@/widgets/Page';
import { About, Introduce } from '@/widgets/Sections';

const MainPage = () => {
  return (
    <Page>
      <Introduce />
      <About />
    </Page>
  );
};

export default MainPage;
