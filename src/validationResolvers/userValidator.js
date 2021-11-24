import BaseValidator from "./baseValidator.js";


export default class UserValidator extends BaseValidator{
    validate(user){
        let result = this.applyAllRules(
            this.entityIsNotNullOrUndefined(user),
            this.requiredPropertiesAreFullfilled(user,"firstName,lastName,city,age"),
            this.minLength(user,"firstName",2),
            this.maxLength(user,"lastName",50)
            );
        return result.length > 0 ? result : null; 
    }
}