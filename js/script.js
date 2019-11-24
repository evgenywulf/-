Holder.run();

$(function () {
    $("#invisible").show();

    var resize = true;
    $("#toggleResize").on("click", function () {
        resize = !resize;
        Holder.setResizeUpdate($(this).get(0), resize);
    });
});

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}

imageToBase64("images/thumb.jpg")
    .then(
        (response) => {
            let i = 1;
            while (i < 9) { // выводит 0, затем 1, затем 2

                var contentType = 'image/png';
                var b64Data = response;

                var blob = b64toBlob(b64Data, contentType);
                var blobUrl = URL.createObjectURL(blob);

                document.getElementById('img_holder_'+i).setAttribute('src', blobUrl);
                i++;
            }
            console.log(response); //iVBORw0KGgoAAAANSwCAIA...
        }
    )
    .catch(
        (error) => {

            let i = 0;
            while (i < 3) { // выводит 0, затем 1, затем 2
                document.getElementById('img_holder_'+i).setAttribute('src', 'images/thumb.webp');
                i++;
            }

            console.log(error); //Exepection error....
        }
    )

imageToBase64("images/top.jpg")
    .then(
        (response) => {

            var contentType = 'image/png';
            var b64Data = response;

            var blob = b64toBlob(b64Data, contentType);
            var blobUrl = URL.createObjectURL(blob);

            document.getElementById('img_holder_top').setAttribute('src', blobUrl);
            console.log(response); //iVBORw0KGgoAAAANSwCAIA...
        }
    )
    .catch(
        (error) => {
            document.getElementById('img_holder_top').setAttribute('src', 'images/top.webp');
            console.log(error); //Exepection error....
        }
    )