import * as types from '../constants/ActionTypes';
import database from '../firebase/firebase';

export function stop(activityName) {
  return {
    type: types.STOP,
    payload: activityName,
  };
}

export function addActivity(activityName) {
  return {
    type: types.ADD_ACTIVITY,
    payload: activityName,
  };
}

export const addActivityToDB = (activityName, activityTime, dateMoment) => {
  const activityStats = {
    name: activityName,
    time: activityTime,
    date: dateMoment,
  };

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (activityName !== '') {
      return database.ref(`users/${uid}/activities`).push(activityStats).then((ref) => {
        dispatch(stop(activityStats.name));
      });
    }
  };
};

export function setActivities(activities) {
  return {
    type: types.SET_ACTIVITY_LIST,
    payload: activities,
  };
}

export function stoppedFetching() {
  return {
    type: types.STOPPED_FETCHING,
    payload: false,
  };
}

export function isFetching() {
  return {
    type: types.IS_FETCHING,
    payload: true,
  };
}

export const startSetActivities = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  if (uid !== undefined) {
    dispatch(isFetching());
    database.ref(`users/${uid}/activities`)
      .once('value')
      .then((snapshot) => {
        const activityList = [];
        snapshot.forEach((childSnapshot) => {
          activityList.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setActivities(activityList));
        dispatch(stoppedFetching());
      });
  }
};
