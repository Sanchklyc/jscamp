import CustomConsole from "../core/extensions/consoleExtensions.js";
import DependencyContainer from "../dependencyResolvers/dependencyContainer.js";

let userService = DependencyContainer.getUserService();
CustomConsole.logInfo(
  "〰〰〰〰〰〰〰〰 User Component Başlangıç 〰〰〰〰〰〰〰〰〰〰〰〰"
);
CustomConsole.logSuccess(
  "Call for UserService.GetAll Result is ➡",
  userService.getAll()
);
CustomConsole.logSuccess(
  "Call for UserService.Add Result is ➡",
  userService.add({
    id: 8,
    firstName: "Deneme",
    lastName: "123812",
    city: "Ankara",
    age: 36,
  })
);

CustomConsole.logDanger(
  "Call for UserService.Add with invalid user Result is ➡",
  userService.add({
    id: 8,
    firstName: "d",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
  })
);

CustomConsole.logDanger(
  "Call for UserService.Add with invalid business rule Result is ➡",
  userService.add({
    id: 8,
    firstName: "Engin",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
  })
);

CustomConsole.logSuccess(
  `Call for UserService.GetAll Result is ➡`,
  userService.getAll()
);
CustomConsole.logSuccess(
  "Call for UserService.GetUserById.1 Result is ➡",
  userService.getUserById(1)
);
CustomConsole.logDanger(
  "Call for UserService.GetUserById.1123 Result is ➡",
  userService.getUserById(1123)
);
CustomConsole.logSuccess(
  "Call for UserService.GetUsersSorted.firstName Result is ➡",
  userService.getUsersSorted("firstName")
);

CustomConsole.logInfo(
  "〰〰〰〰〰〰〰〰 User Component Bitiş 〰〰〰〰〰〰〰〰〰〰〰〰"
);
