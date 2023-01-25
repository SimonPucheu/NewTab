var nameInput = document.querySelector('section#title #name');
chrome.storage.sync.get(['name']).then((result) => {
    nameInput.value = result.name || '';
});
nameInput.oninput = function () {
    chrome.storage.sync.set({ 'name': this.value });
}