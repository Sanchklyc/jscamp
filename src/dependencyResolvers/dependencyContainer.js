import MongoLogger from "../core/crossCuttingConcerns/logging/mongoLogger.js";
import CustomerDal from "../dataAccess/customerDal.js";
import UserDal from "../dataAccess/userDal.js";
import CustomerService from "../services/customerService.js";
import UserService from "../services/userService.js";
import CustomerValidator from "../validationResolvers/customerValidator.js";
import UserValidator from "../validationResolvers/userValidator.js";

export default class DependencyContainer{
    static getLogger() { return new MongoLogger(); }
    
    static getUserDal() { return new UserDal(); }
    static getUserService() { return new UserService(); }
    static getUserValidator() { return new UserValidator(); }

    static getCustomerDal() { return new CustomerDal(); }
    static getCustomerValidator() { return new CustomerValidator(); }
    static getCustomerService(){ return new CustomerService(); }

}

