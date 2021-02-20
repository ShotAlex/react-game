import React from 'react';
import rulesImg from './../assets/images/rules.jpg';
import MainLayout from "../containers/MainLayout";

const Rules = () => {
  return (
    <MainLayout score={false} >
      <article className="rules">
        <img className="rules__image" src={rulesImg} alt="Rules"/>
      </article>
    </MainLayout>
  );
};

export default Rules;