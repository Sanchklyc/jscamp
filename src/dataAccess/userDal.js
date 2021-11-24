import {users} from '../inMemoryDatabase/users.js';
export default class UserDal{

    constructor() {
        this.users = users;
    }

    getAll(){
        return this.users;
    }

    getById(id){
        return this.users.find(user=>user.id == id);
    }

    getSortedByPropertyName(property){
        let sortedArray = this.users.sort((a,b)=> {
            if(a[property] < b[property]) { return -1; }
            if(a[property] > b[property]) { return 1; }
            return 0;
        });
        return sortedArray;
    }

    getByLastName(lastName){
        return this.users.find(user=>user.lastName == lastName);
    }

    addNew(user){
        this.users.push(user);
    }

    removeById(id){
        this.users = this.users.filter(user=> user.id!=id);
    }

    update(userToUpdate){
        this.users[this.users.findIndex(user=>user.id==userToUpdate.id)] = userToUpdate;
    }
}