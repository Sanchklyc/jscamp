import * as Messages from "../constants/messages.js"
import BusinessRules from "../core/business/businessRules.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import ErrorResult from "../core/results/ErrorResult.js";
import SuccessDataResult from "../core/results/SuccessDataResult.js"
import SuccessResult from "../core/results/SuccessResult.js";
import DependencyContainer from "../dependencyResolvers/dependencyContainer.js"

export default class CustomerService {
    constructor() {
        this.logger = DependencyContainer.getLogger();
        this.customerDal = DependencyContainer.getCustomerDal();
        this.validator = DependencyContainer.getCustomerValidator();
        this.userService = DependencyContainer.getUserService(); // Bir servis başka bir entity'nin Data Acces katmanını değil, servisini implemente etmelidir.
    }


    getAll(){
       let result = this.customerDal.getAll();
       return new SuccessDataResult(result,Messages.CustomersListed);
    }

    add(customer) {
        let validation = this.validator.validate(customer);
        if(validation!=null) 
            return validation;

        let businessRules = BusinessRules.Run(this.customerWithSameCreditCardShouldNotExist(customer.creditCardNumber));
        if(businessRules!=null)
            return businessRules;

        // customer for add model objesinden credit cart alanını çıkardığımızda UserForAddModel'i alırız.
        this.userService.add(customer);
        this.customerDal.addNew(customer);
        this.logger.log(customer);
        return new SuccessResult(Messages.CustomerAdded);
    }
    
    getCustomerById(id) {
        let result = this.customerDal.getById(id);
        return result == null ? new ErrorDataResult(result, Messages.CustomerNotFound) : new SuccessDataResult(result,Messages.CustomerListed);
    }

    getCustomersSorted(property){
        let result = this.customerDal.getSortedByPropertyName(property);
        return new SuccessDataResult(result,Messages.CustomersListed);
    }


    customerWithSameCreditCardShouldNotExist(creditCard){
         let result = this.customerDal.getByCreditCard(creditCard);
         if(result!=null)
             return new ErrorResult(Messages.CustomerWithSameCreditCardAlreadyExists);
         return new SuccessResult();
    }
}