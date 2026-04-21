const waifuImages = document.getElementById('waifuImages');

getWaifuImage();

function getWaifuImage() {
    fetch('https://api.waifu.im/images')
    .then((response) => response.json())
    .then((data) => {
        waifuImages.innerHTML = `
            <img src="${data.items[0].url}">
            <p>Source: <a href="${data.items[0].source}">${data.items[0].source}</a></p>
            <button class="glow-on-hover" onclick="getWaifuImage()">Get Waifu Image</button>
        `;
    })
    .catch(error => console.log(error))
}
