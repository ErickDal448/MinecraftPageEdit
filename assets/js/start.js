
window.onload = function() {
    var elements = document.querySelectorAll('.mainIndex');
    elements.forEach(element => {
        element.style.display = 'block';
        setTimeout(function() {
          element.style.opacity = '1';
        }, 500);
    })
    
  }
  