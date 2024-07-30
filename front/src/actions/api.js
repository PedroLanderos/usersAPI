import axios from "axios";

//the base url from our server
const baseUrl = "http://localhost:5041/api/"


export default {

    //this function is going to call al the endpoints from the asp.net controller, concatenating the baseURL, the main api call and adding the method and if its required an additional parameter   
    candidate(url = baseUrl + 'APICandidates/') {
        return {
            fetchAll: () => axios.get(url), //select *
            fetchById: id => axios.get(url + id), //select + where
            create: newRecord => axios.post(url, newRecord), //insert
            update: (id, updateRecord) => axios.put(url + id, updateRecord), //update
            delete: id => axios.delete(url + id) //delete
        }
    }
}