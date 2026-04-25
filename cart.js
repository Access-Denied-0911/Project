let bag = [];

function addToBag(productId) {
    bag.push(productId);
    updateBagCount();
}

function updateBagCount() {
    const bagCountElement = document.getElementById("bag-count");

    if (bag.length === 0) {
        bagCountElement.style.display = "none";
    } else {
        bagCountElement.style.display = "flex";
        bagCountElement.innerText = bag.length;
    }
}

// run once on page load
updateBagCount();