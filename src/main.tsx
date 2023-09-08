import '@/app/styles/index.scss';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/provider/theme';
import App from '@/app/ui/App';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
