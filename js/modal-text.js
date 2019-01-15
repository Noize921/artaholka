function getText(e) {
    e.preventDefault();

    const value = document.getElementsByName('product-content')[0].value;

    let arr = value.split(' ');
    let txt;

    for (let i = 0; i < arr.length; i++) {
        txt += `${arr[i]} `;
        if (i % 5 === 0) txt += "<br/>";
    }

    console.log(value, '\n\n');
    console.log(txt);
    
    // Get the modal
    var modal = document.getElementById('p-modal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var read = document.getElementById('read');
    var modalTxt = document.getElementById("txt001");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalTxt.innerHTML = txt;
    // captionText.innerHTML = this.alt;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}