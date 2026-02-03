const btn = document.getElementById('colorBtn');

btn.addEventListener('click' ,() => {
    // This change the background randomly
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log("Color changed to: #" + randomColor);
})