import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((res) => {
      const results = [];

      res.forEach((el) => {
        if (el.status === 'fulfilled') {
          results.push({ status: el.status, value: el.value });
        } else {
          results.push({ status: el.status, value: `${el.reason}` });
        }
      });
      return results;
    });
}
