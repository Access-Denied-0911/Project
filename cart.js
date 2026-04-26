let bag = JSON.parse(localStorage.getItem("bag")) || [];

function addToBag(productId) {
    bag.push(productId);
    saveAndRefresh();
}

function removeFromBag(productId) {
    const index = bag.indexOf(productId);
    if (index > -1) {
        bag.splice(index, 1);
    }
    saveAndRefresh();
}

function saveAndRefresh() {
    // 1. Save to localStorage
    localStorage.setItem("bag", JSON.stringify(bag));
    
    // 2. Update the header count
    updateBagCount();
    
    // 3. Trigger UI update if on the bag page
    // We check if the functions from bag.js are available
    if (typeof loadBagItemObjects === "function") {
        loadBagItemObjects();
        displayBagItems();
        displayPriceSummary();
    }
}

function updateBagCount() {
    const bagCountElement = document.getElementById("bag-count");
    if (bagCountElement) {
        bagCountElement.innerText = bag.length;
        bagCountElement.style.display = bag.length > 0 ? "flex" : "none";
    }
}

// Initial count set
updateBagCount();
