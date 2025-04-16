
  const data = async () => {
    const results = (await fetch("https://dogapi.dog/api/v2/facts")).json();

      results.then((data) => {
        const fact = data.data[0].attributes.body
      const para = document.querySelector(".q-text");
      para.innerHTML = fact;
    });
  };

//   change the quote fact very 6seconds
  setInterval(data,6000)
