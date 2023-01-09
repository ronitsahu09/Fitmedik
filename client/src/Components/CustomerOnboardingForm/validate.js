import {
  validateDecimalNumber,
  validateNumber,
  validateUrl,
} from "../../Utils/HelperFunctions";
import {
  employeeSizeOptions,
  hospitalTypeOptions,
  avgPdOptions,
  avgSalOptions,
  noOfBedsOptions,
} from "./data";

const locCheck = (location = "") => {
  const coords = location.split(" ");
  const lat = Number(coords[0]);
  const long = Number(coords[1]);
  if (
    (!validateDecimalNumber(lat) && !validateNumber(lat)) ||
    (!validateDecimalNumber(long) && !validateNumber(long))
  )
    return false;
  return true;
};

export const validateHospSection = (
  hospDetails = {
    name: "",
    employee_size: "",
    typeOfHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
    location: "",
  },
  hospDetailsError = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: "",
    location: "",
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

  if (!employeeSizeOptions.includes(hospDetails.employee_size)) {
    isValid = false;
    temp = {
      ...temp,
      employeeSize: "Invalid input for hospital employee size",
    };
  } else {
    temp = { ...temp, employeeSize: "" };
  }

  if (!hospitalTypeOptions.includes(hospDetails.typeOfHospital)) {
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

  if (hospDetails.website === "") {
    isValid = false;
    temp = {
      ...temp,
      link: "Website link field is empty",
    };
  } else if (!validateUrl(hospDetails.website)) {
    isValid = false;
    temp = {
      ...temp,
      link: "Invalid URL provided",
    };
  } else {
    temp = { ...temp, link: "" };
  }

  if (!validateNumber(hospDetails.subscription_size)) {
    isValid = false;
    temp = {
      ...temp,
      subscriptionCount: "Invalid number",
    };
  } else if (Number(hospDetails.subscription_size) <= 0) {
    isValid = false;
    temp = {
      ...temp,
      subscriptionCount: "Invalid number",
    };
  } else {
    temp = { ...temp, subscriptionCount: "" };
  }

  if (hospDetails.location.length === 0) {
    isValid = false;
    temp = {
      ...temp,
      location: "Field is empty",
    };
  } else if (hospDetails.location.split(" ").length !== 2) {
    isValid = false;
    temp = {
      ...temp,
      location: "Invalid coordinates",
    };
  } else if (!locCheck(hospDetails.location)) {
    isValid = false;
    temp = {
      ...temp,
      location: "Invalid coordinates",
    };
  } else {
    temp = {
      ...temp,
      location: "",
    };
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

export const validateOpdtSection = (
  opdtDetails = {
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: 0,
    avgOpd: "",
    avgIpd: "",
  },
  opdtDetailsError = {
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: "",
    avgOpd: "",
    avgIpd: "",
  },
  setOpdtDetailsError
) => {
  let isValid = true;

  let temp = opdtDetailsError;

  if (!avgSalOptions.includes(opdtDetails.annualSalNurse)) {
    isValid = false;
    temp = {
      ...temp,
      annualSalNurse: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, annualSalNurse: "" };
  }
  if (!avgSalOptions.includes(opdtDetails.annualSalPhysician)) {
    isValid = false;
    temp = {
      ...temp,
      annualSalPhysician: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, annualSalPhysician: "" };
  }
  if (!avgSalOptions.includes(opdtDetails.annualSalPhysicianSupport)) {
    isValid = false;
    temp = {
      ...temp,
      annualSalPhysicianSupport: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, annualSalPhysicianSupport: "" };
  }
  if (!avgSalOptions.includes(opdtDetails.annualSalTechnician)) {
    isValid = false;
    temp = {
      ...temp,
      annualSalTechnician: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, annualSalTechnician: "" };
  }
  if (!avgSalOptions.includes(opdtDetails.annualSalAdminManagement)) {
    isValid = false;
    temp = {
      ...temp,
      annualSalAdminManagement: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, annualSalAdminManagement: "" };
  }

  if (!noOfBedsOptions.includes(opdtDetails.noOfBeds)) {
    isValid = false;
    temp = {
      ...temp,
      noOfBeds: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, noOfBeds: "" };
  }

  console.log(opdtDetails.averageOccupancy);
  if (
    !validateDecimalNumber(opdtDetails.averageOccupancy) &&
    !validateNumber(opdtDetails.averageOccupancy)
  ) {
    isValid = false;
    temp = {
      ...temp,
      averageOccupancy: "Invalid number",
    };
  } else if (
    Number(opdtDetails.averageOccupancy) > 100 ||
    Number(opdtDetails.averageOccupancy) < 0
  ) {
    isValid = false;
    temp = {
      ...temp,
      averageOccupancy: "Number is not a percentage",
    };
  } else {
    temp = { ...temp, averageOccupancy: "" };
  }

  if (!avgPdOptions.includes(opdtDetails.avgOpd)) {
    isValid = false;
    temp = {
      ...temp,
      avgOpd: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, avgOpd: "" };
  }
  if (!avgPdOptions.includes(opdtDetails.avgIpd)) {
    isValid = false;
    temp = {
      ...temp,
      avgIpd: "Invalid input for average annual salary",
    };
  } else {
    temp = { ...temp, avgIpd: "" };
  }

  setOpdtDetailsError(temp);

  return isValid;
};
