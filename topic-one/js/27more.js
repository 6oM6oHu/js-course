function getShippingCost(country) {
  let message;
  let price;

  switch (country) {
    case "China":
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Chile":
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Australia":
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    case "Jamaica":
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code below this line

  console.log(message);
  // Change code above this line

  return message;
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  console.log(message);

  return message;
}

getNameLength("Serhii");

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(`c-${courseTopicLength} f-${firstElement} l-${lastElement}`);

// Change code above this line
