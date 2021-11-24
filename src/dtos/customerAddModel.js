import UserAddModel from "./userAddModel";

export default class CustomerAddModel extends UserAddModel{
    constructor(firstName, lastName, city,age,creditCard){
        super(firstName,lastName,city,age);
        this.creditCart=creditCard;
    }
}