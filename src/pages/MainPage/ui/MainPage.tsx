import { HrLine } from '@/shared';
import { ContactForm } from '@/widgets/ContactForm';
import { Page } from '@/widgets/Page';
import { About, Introduce, Projects } from '@/widgets/Sections';

const MainPage = () => {
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
