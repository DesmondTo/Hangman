import React from 'react';
import LoadingSpin from 'react-loading-spin';

function LoadingPage(props) {
  const LoadingSpinner = () => (
    <div className={'Spinner'}>
      <LoadingSpin size="250px" primaryColor="black" />
    </div>
  );
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '30vh',
        }}
      >
        <h1>
          Preparing to hang the man...do you have what it takes to save him?
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '30vh',
        }}
      >
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default LoadingPage;
