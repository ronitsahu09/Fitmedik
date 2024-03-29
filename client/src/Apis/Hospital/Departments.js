import * as api from "../index";

export const GetAllDepartmentsApi = async (token, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.get(headerInfo, `/allDept`);
    setters.setLoading(false);
    setters.setError(false);
    setters.setAddOpen(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    setters.setDepartments(response);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setAddOpen(false);
    setters.setErrorText(e.toString());
  }
};

export const AddDepartmentApi = async (token, department, emails, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const data = { name: department, users: emails };

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.post(headerInfo, data, "/addDept");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    GetAllDepartmentsApi(token, setters);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const AddDepartmentUserApi = async (
  token,
  departmentId,
  emails,
  setters
) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const data = { department: departmentId, emails };

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.post(headerInfo, data, "/addUser");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    GetDepartmentUsersApi(token, departmentId, setters);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const GetDepartmentUsersApi = async (token, departmentId, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.get(headerInfo, `/allUsers/${departmentId}`);
    setters.setLoading(false);
    setters.setError(false);
    setters.setAddOpen(false);
    setters.setErrorText("");
    console.log(response);
    if (response.error) throw new Error(response.error);
    const temp = [];
    response.forEach((val) => {
      temp.push(val.email);
    });
    setters.setEmails(temp);
    setters.setEmployees(response);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setAddOpen(false);
    setters.setErrorText(e.toString());
  }
};
