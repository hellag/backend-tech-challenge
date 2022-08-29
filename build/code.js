window.onload = function getArtwork() {
    let url = "http://localhost:3000/getart";
    fetch(url, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
        console.log(data);
    })
        .catch(err => {
        console.log(err);
    });
};
//# sourceMappingURL=code.js.map