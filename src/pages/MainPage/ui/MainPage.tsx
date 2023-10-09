import { ContactForm } from '@/widgets/ContactForm';
import { Page } from '@/widgets/Page';
import { About, Introduce, Projects } from '@/widgets/Sections';

const MainPage = () => {
  return (
    <Page>
      <Introduce />
      <About />
      <Projects />
      <ContactForm />
    </Page>
  );
};

export default MainPage;
