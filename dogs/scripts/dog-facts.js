const data = async () => {
  try {
    const results = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await results.json();

    const fact = data.data[0].attributes.body;
    document.querySelector(".q-text").innerHTML = fact;
  } catch (error) {
    console.error(error);
  }
};

//   change the quote fact very 6seconds
setInterval(data, 6000);
