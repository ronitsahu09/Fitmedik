export const validateEvent = (
  event = {
    name: "",
    desc: "",
    type_of_event: "",
    location: "",
    duration: "",
    price: "",
    type_of_delivery: "",
    about: "",
    expectedOutcome: "",
    link: "",
  },
  eventError = {
    name: "",
    desc: "",
    type: "",
    location: "",
    duration: "",
    price: "",
    deliveryType: "",
    whatHappens: "",
    expectedOutcome: "",
    redirectLink: "",
  },
  setEventError
) => {
  let isValid = true;
  let temp = eventError;

  if (event.name.length === 0) {
    isValid = false;
    temp = { ...temp, name: "Field is empty" };
  } else {
    temp = { ...temp, name: "" };
  }

  if (event.desc.length === 0) {
    isValid = false;
    temp = { ...temp, desc: "Field is empty" };
  } else {
    temp = { ...temp, desc: "" };
  }
  console.log(event.type_of_event);
  if (event.type_of_event.length === 0) {
    isValid = false;
    temp = { ...temp, type: "Field is empty" };
  } else if (
    event.type_of_event !== "offline" &&
    event.type_of_event !== "online"
  ) {
    isValid = false;
    temp = { ...temp, type: "Invalid data ('online' or 'offline' only)" };
  } else {
    temp = { ...temp, type: "" };
  }

  if (event.location.length === 0) {
    isValid = false;
    temp = { ...temp, location: "Field is empty" };
  } else {
    temp = { ...temp, location: "" };
  }

  if (event.duration.length === 0) {
    isValid = false;
    temp = { ...temp, duration: "Field is empty" };
  } else {
    temp = { ...temp, duration: "" };
  }

  if (event.price.length === 0) {
    isValid = false;
    temp = { ...temp, price: "Field is empty" };
  } else {
    temp = { ...temp, price: "" };
  }

  if (event.type_of_delivery.length === 0) {
    isValid = false;
    temp = { ...temp, deliveryType: "Field is empty" };
  } else {
    temp = { ...temp, deliveryType: "" };
  }

  if (event.about.length === 0) {
    isValid = false;
    temp = { ...temp, whatHappens: "Field is empty" };
  } else {
    temp = { ...temp, whatHappens: "" };
  }

  if (event.expectedOutcome.length === 0) {
    isValid = false;
    temp = { ...temp, expectedOutcome: "Field is empty" };
  } else {
    temp = { ...temp, expectedOutcome: "" };
  }

  if (event.link.length === 0) {
    isValid = false;
    temp = { ...temp, redirectLink: "Field is empty" };
  } else {
    temp = { ...temp, redirectLink: "" };
  }

  setEventError(temp);

  return isValid;
};
