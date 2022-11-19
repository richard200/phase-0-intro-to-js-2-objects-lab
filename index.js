// Write your solution in this file!
const employee = {
    name: "Richard",
    streetaddress: "Ngeti"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    
    return {
      ...obj,
      [key]: value,
    };
  }
  

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; 
        return employee;
}


let newEmployee;

function deleteFromEmployeeByKey(obj, key, value){
    
    let newEmployee = { ...obj };

    newEmployee[key] = value;
  
    return newEmployee;
  }

     newEmployee = deleteFromEmployeeByKey(
        employee, key, value
    );
    deleteFromEmployeeByKey(key);
    

    function destructivelyDeleteFromEmployeeByKey(employee, key, value){
        newEmployee = delete employee.key;
        delete employee[key];
        return employee;
        

    };

   
    
      