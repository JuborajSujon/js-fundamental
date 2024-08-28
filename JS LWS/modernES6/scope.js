var lang = "Javascript";

function scope(topic) {
  lang = topic;

  console.log(`I am learning ${topic}`);
}

scope("ES6");

console.log(`I know ${lang}`);
