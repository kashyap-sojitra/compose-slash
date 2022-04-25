export default function handleSend(inputText, commands) {
  let input = String(inputText).trim();
  let message = "";
  let check = -1;
  const inputArray = input.split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].startsWith("/")) {
      check = i;
      break;
    }
  }

  if (check !== -1) {
    const operation = inputArray[0].substring(1).toLocaleLowerCase();
    let itr = 2;
    let result = parseInt(inputArray[1]);

    const command = commands.find(f => f.operation === operation);
    if (command) {
      message = command.rule(itr, inputArray, result);
    } else {
      message = inputText
    }
  } else {
    if (input.indexOf("/") !== -1) {
      let operation;
      if (input.indexOf(" ", input.indexOf("/") + 1) === -1) {
        operation = input
          .substring(input.indexOf("/") + 1)
          .toLocaleLowerCase()
          .trim();
        if (operation === "upper") {
          let subS = input.substring(0, input.indexOf("/"));
          let result =
            subS.substring(0, subS.lastIndexOf(" ")) +
            subS
              .substring(subS.lastIndexOf(" "), input.indexOf("/"))
              .toUpperCase();
          message = result;
        } else if (operation === "lower") {
          let subS = input.substring(0, input.indexOf("/"));
          let result =
            subS.substring(0, subS.lastIndexOf(" ")) +
            subS
              .substring(subS.lastIndexOf(" "), input.indexOf("/"))
              .toLowerCase();
          message = result;
        } else {
          message = input
        }
      } else {
        let start = input.indexOf("/") + 1;
        let end = input.indexOf("/") + 1;
        while (input[end] !== " ") {
          end++;
        }
        operation = input.substring(start, end);
        if (operation === "upper") {
          let subS = input.substring(0, input.indexOf("/"));
          let result =
            subS.substring(0, subS.lastIndexOf(" ")) +
            subS
              .substring(subS.lastIndexOf(" "), input.indexOf("/"))
              .toUpperCase() +
            input.substring(end);
          message = result;
        } else if (operation === "lower") {
          let subS = input.substring(0, input.indexOf("/"));
          let result =
            subS.substring(0, subS.lastIndexOf(" ")) +
            subS
              .substring(subS.lastIndexOf(" "), input.indexOf("/"))
              .toLowerCase() +
            input.substring(end);
          message = result;
        } else {
          message = input
        }
      }
    } else {
      message = input;
    }
  }

  return message;
}
