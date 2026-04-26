const searchInput = document.getElementById("featureSearch");
const searchBtn = document.getElementById("searchBtn");
const searchMsg = document.getElementById("searchMsg");
const featureCards = document.querySelectorAll(".feature-card");

function searchFeatures() {
    const searchValue = searchInput.value.toLowerCase().trim();
    let matchCount = 0;

    featureCards.forEach(function(card) {
        const keywords = card.getAttribute("data-keywords").toLowerCase();
        const text = card.innerText.toLowerCase();

        if (searchValue === "" || keywords.includes(searchValue) || text.includes(searchValue)) {
            card.style.display = "block";
            matchCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (searchValue === "") {
        searchMsg.textContent = "Showing all features.";
        searchMsg.style.color = "#1f4ed8";
    } else if (matchCount > 0) {
        searchMsg.textContent = matchCount + " feature(s) found.";
        searchMsg.style.color = "green";
    } else {
        searchMsg.textContent = "No matching features found.";
        searchMsg.style.color = "red";
    }
}

searchBtn.addEventListener("click", searchFeatures);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchFeatures();
    }
});