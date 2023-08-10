let moviereviewcontainer = document.getElementById("movieReviewsContainer");

let addbutton = document.getElementById("addBtn");

let reviewscontainer = document.getElementById("reviewsContainer");

function addbuttonclicked() {
    let inputtitle = document.getElementById("titleInput");
    let movietitle = inputtitle.value;

    let reviewelement = document.getElementById("reviewTextarea");
    let reviewmatter = reviewelement.value;

    if (inputtitle.value === "") {
        alert("enter the movie title");
    }

    let movienameh1 = document.createElement("h1");
    movienameh1.textContent = "movietitle: " + movietitle;
    reviewscontainer.appendChild(movienameh1);

    let movieReview = document.createElement("p");
    movieReview.textContent = "Review: " + reviewmatter;
    reviewscontainer.appendChild(movieReview);

    inputtitle.value = "";
    reviewelement.value = "";

}