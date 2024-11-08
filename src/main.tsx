import '@/app/styles/index.scss';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/provider/theme';
import App from '@/app/ui/App';
import WebApp from '@twa-dev/sdk';

WebApp.ready();
WebApp.expand();
WebApp.BackButton.show();
WebApp.BackButton.onClick(() => {
  WebApp.showPopup({
    title: "POPUP",
    message: "THIS IS POPUP",
    buttons: [
      {
        type: 'ok'
      },
      {
        type: 'close'
      }
    ]
  })
})

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
