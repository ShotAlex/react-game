import React from 'react';


const RuleBtn = ({btn, descr}) => (
  <p className="rules-hotkeys__description">
    <span className="rules-hotkeys__description-key">{btn}</span> {descr}
  </p>
)

export default RuleBtn;