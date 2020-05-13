import axios from "axios";

const ApiCall = () => {
  return axios.get("https://randomuser.me/api/?results=50");
}

export default ApiCall;