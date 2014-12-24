// universal values for configurations
var statusBoxId = 'linkBox';
var leftBoxGap = '5px';
var boxBackgroundColor = '#FFFFCC'; // very pale yellow

// make the windows to display the link and style it
function createStatusBox() {
    var statusWin = document.createElement('div');
    // set the id for later reference
    statusWin.setAttribute('id', statusBoxId);
    // style
    statusWin.style.position = 'fixed';
    statusWin.style.bottom = '0';
    statusWin.style.left = leftBoxGap;
    statusWin.style.background = boxBackgroundColor;
    document.body.appendChild(statusWin);
}

// display the link passed in to the status box
function showLink(href) {
    document.getElementById(statusBoxId).innerText = href;
}

// display the link passed in to the status box
function clearLink() {
    document.getElementById(statusBoxId).innerText = "";
}

createStatusBox();
// add a mouseover callback for every link on page to:
//   1) add link to box on hover
//   2) clear that box on exit or click of element
var allLinks = document.links;
for(var i=0; i<allLinks.length; i++) {
    allLinks[i].addEventListener('mouseover', function() {
        showLink(this.href);
    });
    allLinks[i].addEventListener('mouseleave', function() {
        clearLink();
    });
    // edge case fix -- when a link is clicked and cursor moves, then user
    // navigates back, if safari doesn't reload the page the link will persist
    allLinks[i].addEventListener('click', function() {
        clearLink();
    });
}
