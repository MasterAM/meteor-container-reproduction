import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

function Component({ isLoading, stateFromParent }) {
    console.log('stateFromParent', stateFromParent);
    return (
      <div>{stateFromParent}</div>
  )
}

export default createContainer(props => {
  const handle = Meteor.subscribe('somePub');
  console.log('computation running!');
  return {
    isLoading: !handle.ready(),
    stateFromParent: props.someState,
  };
}, Component);
