//Nhận diện ví MetaMask
const {ethereum} = window;
if (typeof ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

//Tạo sự kiện nút bấm để kết nối ví
const ethereumButton = document.querySelector('.btn-connect_wallet');
ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts'});
});

let currentAccount = null;
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // Do any other work!
    }
}

ethereum
    .request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
    });
