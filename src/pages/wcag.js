import React from 'react';
import { Helmet } from 'react-helmet';
import Wcag from '../components/Wcag';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'News a11y'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'A study into news site accessibility'} />
      </Helmet>
      <Wcag />
    </>
  );
};
