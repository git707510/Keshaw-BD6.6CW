let employees = [
  {
    employeeId: 1,
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    department: 1,
    roleId: 1,
  },
  {
    employeeId: 2,
    name: 'Priya Singh',
    email: 'priya.sigh@example.com',
    department: 2,
    roleId: 2,
  },
  {
    employeeId: 3,
    name: 'Ankit Verma',
    email: 'ankit.verma@example.com',
    department: 1,
    roleId: 3,
  },
];

function getAllEmployees() {
  return employees;
}

function getEmployeesById(id) {
  return employees.find((employee) => employee.employeeId === id);
}

module.exports = { getAllEmployees, getEmployeesById };
