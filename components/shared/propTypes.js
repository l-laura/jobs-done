import { string, node, shape, oneOf, arrayOf, objectOf } from 'prop-types';

export const stepStateType = oneOf(['disabled', 'active', 'checked']);

export const stepType = shape({
  name: string.isRequired,
  urls: arrayOf(string).isRequired
});

export const activitiesType = objectOf(arrayOf(string));

export const appDataType = shape({
  steps: arrayOf(stepType).isRequired,
  setPhrase: string.isRequired,
  activities: activitiesType.isRequired
});

export const qsFormField = shape({
  name: string.isRequired,
  type: node.isRequired
});

export const qsGoalForm = shape({
  whenSet: string.isRequired,
  whenDone: string.isRequired,
  urls: arrayOf(string),
  fields: arrayOf(qsFormField)
});

export const qsGoal = shape({
  id: string.isRequired,
  forms: arrayOf(qsGoalForm).isRequired
});

export const qsAppDataType = shape({
  goals: arrayOf(qsGoal).isRequired
});
