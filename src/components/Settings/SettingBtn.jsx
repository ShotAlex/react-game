import React from 'react';


const SettingBtn = ({cl = '', click, name = '', children}) => {
  const active = 'active';

  return (
    <button
      className={`settings-params__btn ${cl && active}`}
      name={name}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default React.memo(SettingBtn);
