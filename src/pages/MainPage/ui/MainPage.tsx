import { HrLine } from '@/shared/ui';
import { ContactForm } from '@/widgets/ContactForm';
import { Page } from '@/widgets/Page';
import { About, Introduce, Projects } from '@/widgets/Sections';
import WebApp from '@twa-dev/sdk';

const MainPage = () => {
  console.log(JSON.stringify(WebApp.initDataUnsafe, null, 2))
  return (
    <Page>
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
