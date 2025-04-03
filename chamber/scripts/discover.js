async function main() {

    const data = await fetch("https://eddykamwi.github.io/wdd231/chamber/data/interests.json")
    const results = data.json()
    results.then(interests => {
        console.log(interests[0].name)
    })

}
main()