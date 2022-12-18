function createPersonData(data) {
  let person = data.results[0];
  const src = person.picture.large;
  const { first, last } = person.name;
  const {
    email,
    phone,
    dob: { age },
  } = person;
  const { number, name } = person.location.street;
  const { password } = person.login;

  return {
    name: `${first} ${last}`,
    street: `${number}, ${name}`,
    email,
    phone,
    age,
    password,
    src,
  };
}

export default createPersonData;
