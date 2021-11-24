import { customers } from "../inMemoryDatabase/customers.js";

export default class CustomerDal{
    constructor() {
        this.customers = customers;
    }

    getAll(){
        return this.customers;
    }

    getById(id){
        return this.customers.find(customer=>customer.id == id);
    }

    getSortedByPropertyName(property){
        let sortedArray = this.customers.sort((a,b)=> {
            if(a[property] < b[property]) { return -1; }
            if(a[property] > b[property]) { return 1; }
            return 0;
        });
        return sortedArray;
    }

    addNew(customer){
        this.customers.push(customer);
    }

    removeById(id){
        this.customers = this.customers.filter(customer=> customer.id!=id);
    }

    update(customerToUpdate){
        this.customers[this.customers.findIndex(customer=>customer.id==customerToUpdate.id)] = customerToUpdate;
    }

    getByCreditCard(creditCard){
        return this.customers.find(customer=>customer.creditCardNumber == creditCard);
    }
}