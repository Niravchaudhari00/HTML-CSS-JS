console.log("weather app build by Nirav chaudahri");
async function fetchData() {
    // const key = '18f4eae53764fcd6bd2f8a24c04d1ee0'
    const url = `https://jsonplaceholder.typicode.com/posts/1`;

    let result = await fetch(url);
    let output = await result.json();

    renderData(output)
}

function renderData(data) {
    let id = document.createElement("p");
    id.textContent = `id : ${data.id}`;
    // console.log("weather app data : ", data.id);
    document.body.appendChild(id)
}