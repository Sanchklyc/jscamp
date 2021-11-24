import CustomConsole from "../core/extensions/consoleExtensions.js";
import DependencyContainer from "../dependencyResolvers/dependencyContainer.js";

let customerService = DependencyContainer.getCustomerService();
CustomConsole.logInfo(
  "〰〰〰〰〰〰〰〰 Customer Component Başlangıç 〰〰〰〰〰〰〰〰〰〰〰〰"
);
CustomConsole.logSuccess(
  "Call for CustomerService.GetAll Result is ➡",
  customerService.getAll()
);
CustomConsole.logSuccess(
  "Call for CustomerService.Add Result is ➡",
  customerService.add({
    id: 8,
    firstName: "Deneme",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
    creditCardNumber: "123456",
  })
);

CustomConsole.logDanger(
  "Call for CustomerService.Add with invalid customer Result is ➡",
  customerService.add({
    id: 8,
    firstName: "d",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
    creditCardNumber: "16",
  })
);

CustomConsole.logDanger(
  "Call for CustomerService.Add with invalid business rule Result is ➡",
  customerService.add({
    id: 8,
    firstName: "Engin",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
    creditCardNumber: "12345",
  })
);

CustomConsole.logSuccess(
  `Call for CustomerService.GetAll Result is ➡`,
  customerService.getAll()
);
CustomConsole.logSuccess(
  "Call for CustomerService.GetUserById.1 Result is ➡",
  customerService.getCustomerById(1)
);
CustomConsole.logDanger(
  "Call for CustomerService.GetUserById.1123 Result is ➡",
  customerService.getCustomerById(1123)
);
CustomConsole.logSuccess(
  "Call for CustomerService.GetUsersSorted.firstName Result is ➡",
  customerService.getCustomersSorted("firstName")
);

CustomConsole.logInfo(
  "〰〰〰〰〰〰〰〰 Customer Component Bitiş 〰〰〰〰〰〰〰〰〰〰〰〰"
);
