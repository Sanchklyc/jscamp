import ErrorResult from "../core/results/ErrorResult.js";

export default class BaseValidator {
  entityIsNotNullOrUndefined(entity) {
    if (!entity || entity == null) return new ErrorResult("Missing entity.");
    return null;
  }

  requiredPropertiesAreFullfilled(entity, properties) {
    properties.split(",").forEach((property) => {
      if (!entity[property])
        return new ErrorResult(`${property} field is required`);
    });
    return null;
  }

  minLength(entity, property, min) {
    if (entity[property].length < min)
      return new ErrorResult(
        `${property} field's minimum length should be ${min}.`
      );
    return null;
  }

  maxLength(entity, property, max) {
    if (entity[property].length > max)
      return new ErrorResult(
        `${property} field's maximum length should be ${min}.`
      );
    return null;
  }

  applyAllRules(...rules) {
    let invalidRules = [];
    rules.forEach((rule) => {
      if (rule != null) {
        invalidRules.push(rule);
      }
    });
    return invalidRules;
  }
}
