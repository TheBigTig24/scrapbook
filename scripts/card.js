document.addEventListener('DOMContentLoaded', function() {
    // References to DOM Elements
    const prevBtn = document.querySelector("#prev-button");
    const nextBtn = document.querySelector("#next-button");
    const card = document.querySelector("#card");

    const paper1 = document.querySelector("#title-page");
    const paper2 = document.querySelector("#p2");

    // Event Listener
    prevBtn.addEventListener("click", goPrevPage);
    nextBtn.addEventListener("click", goNextPage);

    // Business Logic
    let currentLocation = 1;
    let numOfPapers = 2;
    let maxLocation = numOfPapers + 1;

    function opencard() {
        card.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }

    function closecard(isAtBeginning) {
        if(isAtBeginning) {
            card.style.transform = "translateX(0%)";
        } else {
            card.style.transform = "translateX(100%)";
        }
        
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function goNextPage() {
        if(currentLocation < maxLocation) {
            switch(currentLocation) {
                case 1:
                    opencard();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 2:
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {
        if(currentLocation > 1) {
            switch(currentLocation) {
                case 2:
                    closecard(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 3;
                    break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 2;
                    break;
                default:
                    throw new Error("unkown state");
            }

            currentLocation--;
        }
    }
});