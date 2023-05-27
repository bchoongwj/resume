// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Getting target anchor ref
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    // Calculating offset
    var headerOffset = 110;
    var targetPosition = target.getBoundingClientRect().top;
    var offsetPosition = targetPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });

    // Highlight and remove highlight after 1.5s
    target.classList.add('highlight');
    setTimeout(() => {
      target.classList.remove('highlight');
    }, 1500);

  });
});



// Collapsible button for Sections
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




