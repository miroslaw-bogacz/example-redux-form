const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export function contactFormValidation(data) {
  const errors = {};
  const { person = {}, type, questions = [], issue } = data;

  if (!person.name) {
    errors.person = errors.person || {};
    errors.person.name = "is required";
  }

  if (person.name && (person.name.length < 3 || person.name.length > 15)) {
    errors.person = errors.person || {};
    errors.person.name = "name should has min 3 and max 15 chars";
  }

  if (!person.email) {
    errors.person = errors.person || {};
    errors.person.email = "is required";
  }

  if (person.email && !emailPattern.test(person.email)) {
    errors.person = errors.person || {};
    errors.person.email = "wrong format";
  }

  if (!person.phoneNumber) {
    errors.person = errors.person || {};
    errors.person.phoneNumber = "is required";
  }

  if (!person.age) {
    errors.person = errors.person || {};
    errors.person.age = "is required";
  }

  if (person.age < 18) {
    errors.person = errors.person || {};
    errors.person.age = "age should be higher than 18";
  }

  if (!type) {
    errors.type = "is required";
  }

  if (type === "questions") {
    if (!questions.length) {
      errors.questions = { _error: "is required" };
    }

    questions.forEach((question, index) => {
      errors.questions = errors.questions || [];

      if (!question) {
        errors.questions[index] = "is required";
      }
    });
  }

  if (type === "issue" && !issue) {
    errors.issue = "is required";
  }

  console.log(errors);

  return errors;
}
