export const commands = [
  {
    operation: "add",
    rule: function(itr, inputArray, result) {
      while (itr < inputArray.length) {
        result += parseInt(inputArray[itr]);
        itr++;
      }
      return result;
    }
  },
  {
    operation: "sub",
    rule: function(itr, inputArray, result) {
      while (itr < inputArray.length) {
        result -= parseInt(inputArray[itr]);
        itr++;
      }
      return result;
    }
  },
  {
    operation: "multiply",
    rule: function(itr, inputArray, result) {
      while (itr < inputArray.length) {
        result *= parseInt(inputArray[itr]);
        itr++;
      }
      return result;
    }
  },
  {
    operation: "divide",
    rule: function(itr, inputArray, result) {
      if (inputArray[2] === 0) {
        result = "Can't divide by 0";
      } else {
        result = parseInt(inputArray[1]) / parseInt(inputArray[2]);
      }
      return result;
    }
  },
  {
    operation: "mod",
    rule: function(itr, inputArray, result) {
      if (inputArray[2] === 0) {
        result = inputArray[1] + "%" + inputArray[2] + " not possible.";
      } else {
        result = parseInt(inputArray[1]) % parseInt(inputArray[2]);
      }
      return result;
    }
  },
  {
    operation: "power",
    rule: function(itr, inputArray, result) {
      return Math.pow(parseInt(inputArray[1]), parseInt(inputArray[2]));;
    }
  },
  {
    operation: "max",
    rule: function(itr, inputArray, result) {
      while (itr < inputArray.length) {
        result = Math.max(result, parseInt(inputArray[itr]));
        itr++;
      }
      return result;
    }
  },
  {
    operation: "min",
    rule: function(itr, inputArray, result) {
      while (itr < inputArray.length) {
        result = Math.min(result, parseInt(inputArray[itr]));
        itr++;
      }
      return result;
    }
  },
  {
    operation: "sort",
    rule: function(itr, inputArray, result) {
      const numberArray = inputArray.slice(1).map(n => parseInt(n)) 
      return numberArray.sort((a,b) => a - b).join(" ");
    }
  }
]