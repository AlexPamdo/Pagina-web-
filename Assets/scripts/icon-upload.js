document.addEventListener('DOMContentLoaded', function() {
    const inputFile = document.getElementById('file');
    const inputFileContainer = inputFile.closest('.input-file');
    const fileCountElement = inputFileContainer.querySelector('.file-count');
  
    inputFile.addEventListener('change', function() {
      if (this.files.length > 0) {
        inputFileContainer.classList.add('file-selected');
        fileCountElement.textContent = this.files.length;
      } else {
        inputFileContainer.classList.remove('file-selected');
        fileCountElement.textContent = '0';
      }
    });
  });