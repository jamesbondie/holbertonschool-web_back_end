/* eslint-disable */
export default function createReportObject(employeesList) {
	return {
		allEmployees: { ...employeesList },
		getNumberOfDepartments() {
			let count = 0;
			for (let department in employeesList)
			{
				if (employeesList.hasOwnProperty(department))
				{
					count++;
				}
			}
			return count;
		}
	  };
}
