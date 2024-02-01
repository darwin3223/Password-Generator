import React, { ReactNode } from 'react';

interface CenterComponentProps {
  children: ReactNode;
}

const CenterComponent: React.FC<CenterComponentProps> = ({ children }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
        backgroundColor: '#1f2937',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default CenterComponent;
