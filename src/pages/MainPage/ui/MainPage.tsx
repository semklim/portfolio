import { HrLine } from '@/shared/ui';
import { ContactForm } from '@/widgets/ContactForm';
import { Page } from '@/widgets/Page';
import { About, Introduce, Projects } from '@/widgets/Sections';
import WebApp from '@twa-dev/sdk';

const MainPage = () => {
  const data = JSON.parse(WebApp.initData);
  return (
    <Page>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Introduce />
      <About />
      <HrLine />
      <Projects />
      <HrLine />
      <ContactForm />
    </Page>
  );
};

export default MainPage;
