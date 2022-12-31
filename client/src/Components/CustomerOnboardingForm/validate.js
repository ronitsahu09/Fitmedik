import { validateNumber, validateUrl } from "../../Utils/HelperFunctions";
import { employeeSizeOptions, hospitalTypeOptions } from "./data";

export const validateHospSection = (
  hospDetails = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: 0,
  },
  hospDetailsError = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: "",
  },
  setHospDetailsError
) => {
  let isValid = true;

  let temp = hospDetailsError;

  if (hospDetails.name === "") {
    isValid = false;
    temp = { ...temp, name: "Name field is empty" };
  } else {
    temp = { ...temp, name: "" };
  }

  if (!employeeSizeOptions.includes(hospDetails.employeeSize)) {
    isValid = false;
    temp = {
      ...temp,
      employeeSize: "Invalid input for hospital employee size",
    };
  } else {
    temp = { ...temp, employeeSize: "" };
  }

  if (!hospitalTypeOptions.includes(hospDetails.type)) {
    isValid = false;
    temp = {
      ...temp,
      type: "Invalid input for hospital type",
    };
  } else {
    temp = { ...temp, type: "" };
  }

  if (hospDetails.city === "") {
    isValid = false;
    temp = {
      ...temp,
      city: "Hospital city field is empty",
    };
  } else {
    temp = { ...temp, city: "" };
  }

  if (hospDetails.country === "") {
    isValid = false;
    temp = {
      ...temp,
      country: "Hospital country field is empty",
    };
  } else {
    temp = { ...temp, country: "" };
  }

  if (hospDetails.link === "") {
    isValid = false;
    temp = {
      ...temp,
      link: "Website link field is empty",
    };
  } else if (!validateUrl(hospDetails.link)) {
    isValid = false;
    temp = {
      ...temp,
      link: "Invalid URL provided",
    };
  } else {
    temp = { ...temp, link: "" };
  }

  if (!validateNumber(hospDetails.subscriptionCount)) {
    isValid = false;
    temp = {
      ...temp,
      subscriptionCount: "Invalid number",
    };
  } else if (Number(hospDetails.subscriptionCount) < 0) {
    isValid = false;
    temp = {
      ...temp,
      subscriptionCount: "Invalid number",
    };
  } else {
    temp = { ...temp, subscriptionCount: "" };
  }

  setHospDetailsError(temp);

  return isValid;
};

export const validateManagerSection = (
  managerDetails = [
    {
      name: "",
      title: "",
      email: "",
      index: 0,
      validated: false,
    },
  ]
) => {
  let isValid = true;
  managerDetails.forEach((val) => {
    isValid &&= val.validated;
  });
  return isValid;
};
