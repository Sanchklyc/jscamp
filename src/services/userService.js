import * as Messages from "../constants/messages.js"
import BusinessRules from "../core/business/businessRules.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import ErrorResult from "../core/results/ErrorResult.js";
import SuccessDataResult from "../core/results/SuccessDataResult.js"
import SuccessResult from "../core/results/SuccessResult.js";
import DependencyContainer from "../dependencyResolvers/dependencyContainer.js"

export default class UserService {
    constructor() {
        this.logger = DependencyContainer.getLogger();
        this.userDal = DependencyContainer.getUserDal();
        this.validator = DependencyContainer.getUserValidator();
    }


    getAll(){
       let result = this.userDal.getAll();
       return new SuccessDataResult(result,Messages.UsersListed);
    }

    add(user) {
        let validation = this.validator.validate(user);
        if(validation!=null) 
            return validation;

        let businessRules = BusinessRules.Run(this.userWithSameLastNameShouldNotExist(user.lastName));
        if(businessRules!=null)
            return businessRules;

        this.userDal.addNew(user);
        this.logger.log(user);
        return new SuccessResult(Messages.UserAdded);
    }
    
    getUserById(id) {
        let result = this.userDal.getById(id);
        return result == null ? new ErrorDataResult(result, Messages.UserNotFound) : new SuccessDataResult(result,Messages.UserListed);
    }

    getUsersSorted(property){
        let result = this.userDal.getSortedByPropertyName(property);
        return new SuccessDataResult(result,Messages.UsersListed);
    }


    userWithSameLastNameShouldNotExist(lastName){
         let result = this.userDal.getByLastName(lastName);
         if(result!=null)
             return new ErrorResult(Messages.UserWithSameLastNameAlreadyExists);
         return new SuccessResult();
    }
}