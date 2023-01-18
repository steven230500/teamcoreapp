import {getApiUrl, getToken} from '../../../config/config';

export const getQuestions = () => {
  const apiUrl = getApiUrl();
  const token = getToken();

  const res = fetch(apiUrl + 'questions', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then(res => res.json());
  return res;
};

export const sendAnswers = answers => {
  const apiUrl = getApiUrl();
  const token = getToken();

  let bodyData = {
    date: Date.now(),
    data: answers,
  };

  console.log('data', bodyData);

  const res = fetch(apiUrl + 'answer', {
    method: 'POST',
    body: JSON.stringify(bodyData),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
};
