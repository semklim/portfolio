import { FC } from 'react';
import './Page404.scss';
import { ButtonPushable } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';

const Page404: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <ButtonPushable
                  className="link_404"
                  btnTxt="Go Back"
                  onClick={() => navigate(-1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
