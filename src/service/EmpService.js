import axios from "axios";

const BASE_API_URL="http://localhost:8080/api/v1";

class Empservice{
   saveEmp(emp){
     return axios.post(BASE_API_URL+"/saveEmp",emp);
   }
   getAllEmp(){
    return axios.get(BASE_API_URL+"/")
   }
   getEmpById(id){
    return axios.get(BASE_API_URL+"/"+id);
   }
   deleteEmp(id){
    return axios.delete(BASE_API_URL+"/deleteEmp/"+id);
   }
   updateEmp(emp){
    return axios.put(BASE_API_URL+"/editEmp/"+emp.id,emp);
   }
}
export default new Empservice();