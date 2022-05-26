import axios from "axios";
import {makeAutoObservable} from "mobx";

 class Derailleur{

     constructor() {
         makeAutoObservable(this)
     }

     getInfo() {
         axios.get('https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62').then((response) => {
             this.users = response.data
         }).catch((error) => {
             console.warn(error, 'server error');
         })
     }
}

export default new Derailleur()