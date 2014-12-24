var allLinks = document.links;
for(var i=0; i<allLinks.length; i++) {
    allLinks[i].addEventListener("mouseover", function() {
        console.log(this.href);
    });
}
