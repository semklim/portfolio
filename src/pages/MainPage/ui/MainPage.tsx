import { Page } from '@/widgets/Page';
import { About, Introduce, Projects } from '@/widgets/Sections';

const MainPage = () => {
  return (
    <Page>
      <Introduce />
      <About />
      <Projects />
    </Page>
  );
};

export default MainPage;
