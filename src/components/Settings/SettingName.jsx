import React from 'react';

const SettingName = ({title}) => {
  return (
    <h2 className='settings-params__title'>
      {title}
    </h2>
  );
};

export default React.memo(SettingName);