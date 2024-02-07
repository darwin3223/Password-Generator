/* eslint-disable @next/next/no-img-element */
"use client"

import ButtonPassGenerator from './components/ButtonPassGenerator';
import CenterComponent from './components/CenterComponent';
import TitleSection from './components/TitleSection';
import PasswordSection from './components/PasswordSection';
import ModuleSection from './components/ModuleSection';

export default function Page() {
  

 
  return (
    <div style={{ backgroundColor: '#000' }}>
      <CenterComponent>
       <TitleSection /> 
      
       <ButtonPassGenerator/>
      </CenterComponent>
      </div>
  );
}
