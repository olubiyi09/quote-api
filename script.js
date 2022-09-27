const btn = document.querySelector(".get-quotes");
const quotes = document.querySelector(".quotes");
const quoteNumber = document.getElementById("number");
const URL = "https://type.fit/api/quotes";
btn.addEventListener("click", getQuote);

function getQuote(e) {
  e.preventDefault();

  if (quoteNumber.value.length == 0) {
    return alert("Please enter a number");
  } else {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(JSON.stringify(data));
        data = shuffle(data);
        let output = "";

        for (let i = 0; i < data.length; i++) {
          if (i == quoteNumber.value) {
            break;
          }
          output += `
            <li>Quote: ${data[i].text}</li>
            <li>Author: ${data[i].author}</li>
            <hr>
          `;
        }
        quotes.innerHTML = output;
      });
  }
}

// Function to shuffle the quote
function shuffle(quotes) {
  let currentIndex = quotes.length,
    tempValue,
    randomIndex;

  // while elements exist in the array
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    // Decree currentIndex bt 1
    currentIndex--;
    // swap the last element with curentIndex
    tempValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
