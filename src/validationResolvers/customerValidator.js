import BaseValidator from "./baseValidator.js";


export default class CustomerValidator extends BaseValidator{
    validate(customer){
        let result = this.applyAllRules(
            this.entityIsNotNullOrUndefined(customer),
            this.requiredPropertiesAreFullfilled(customer,"creditCardNumber"),
            this.minLength(customer,"creditCardNumber",3),
            this.maxLength(customer,"creditCardNumber",20)
            );
        return result.length > 0 ? result : null; 
    }
}