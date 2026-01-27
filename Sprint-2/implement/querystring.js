function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // ignoring trailing & because it produces empty strings
    if (pair === "") continue;

    // finding the first occurrence of "="
    const firstEqual = pair.indexOf("=");
    
    let key, value;

    if (firstEqual !== -1) {
      // slice string and put into 2 parts
      key = pair.slice(0, firstEqual);
      value = pair.slice(firstEqual + 1);
    } else {        // empty value if there is no "="
      key = pair;
      value = "";
    }

    // check double key
    if (key in queryParams) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }

  } return queryParams;
}


// input ("name=Alicia&name=Pawel&name=Valerie")
// queryParams = {}
// keyValuePairs = ["name=Alicia", "name=Pawel", "name=Valerie"]

// FIRST LOOP
// pair: "name=Alicia"
// firstEqual = 4
// key = pair.slice(0, 4) = "name"
// value = pair.slice(5) = "Alicia"
// "name" is not in queryParams
// queryParams[name] = "Alicia"
// queryParams = {"name: Alicia"}
// first iteration done

// SECOND LOOP
// pair: "name=Pawel"
// firstEqual = 4
// key = pair.slice(0, 4) = "name"
// value = pair.slice(5) = "Pawel"
// "name" is in queryParams
// queryParams[name] = "Alicia" --> is not an Array
// queryParams[key] = [queryParams[key], value] (making value into an array)
// queryParams[name] = ["Alicia", "Pawel"]
// queryParams = {name: ["Alicia", "Pawel"]}
// second iteration done


// THIRD LOOP
// pair: "name=Valerie"
// firstEqual = 4
// key = pair.slice(0, 4) = "name"
// value = pair.slice(5) = "Valerie"
// "name" is in queryParams
// queryParams[name] = ["Alicia", "Pawel"] --> is an Array
// queryParams[name].push(Valerie); (pushing new value into the array)
// queryParams[name] = ["Alicia", "Pawel", "Valerie"]
// queryParams = {name: ["Alicia", "Pawel", "Valerie"]}
// third iteration done

module.exports = parseQueryString;
