document.getElementById('pdfUploadForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    var pdfFileInput = document.getElementById('pdfFileInput');
    var titleInput = document.getElementById('titleInput');
    var authorInput = document.getElementById('authorInput');

    var formData = new FormData();
    formData.append('pdfFile', pdfFileInput.files[0]);
    formData.append('title', titleInput.value);
    formData.append('author', authorInput.value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Handle success response
                console.log('PDF uploaded successfully');
                // Update UI or show success message
            } else {
                // Handle error response
                console.error('Failed to upload PDF');
                // Update UI or show error message
            }
        }
    };
    xhr.send(formData);
});
