import React from 'react';
import { Helmet } from 'react-helmet';
import Sun from '../components/Sun';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'The Sun'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={description || 'A study into news site accessibility at the Sun'}
        />
      </Helmet>
      <Sun />
    </>
  );
};
