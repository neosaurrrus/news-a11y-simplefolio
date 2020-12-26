import React from 'react';
import { Helmet } from 'react-helmet';
import Mirror from '../components/Mail';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'The Daily Mirror'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={description || 'A study into news site accessibility at the Daily Mail'}
        />
      </Helmet>
      <Mirror />
    </>
  );
};
