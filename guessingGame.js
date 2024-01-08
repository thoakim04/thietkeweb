// Tạo số ngẫu nhiên (0 hoặc 1)
const randomNumber = Math.floor(Math.random() * 2);

// Hàm kiểm tra sự đúng sai của số nhập vào
function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        return true;
    } else {
        return false;
    }
}

// Hàm chính
function guessingGame() {
    let userGuess;// Tạo số ngẫu nhiên từ 1 đến 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    // Hàm kiểm tra sự đúng sai của số nhập vào
    function checkGuess(userGuess) {
        if (userGuess === randomNumber) {
            return true;
        } else {
            return false;
        }
    }
    
    // Hàm chính
    function guessingGame() {
        let userGuess;
    
        do {
            // Yêu cầu người dùng nhập giá trị từ bàn phím
            userGuess = parseInt(prompt("Nhập một số từ 1 đến 10:"));
    
            // Kiểm tra sự đúng sai của số nhập vào
            if (checkGuess(userGuess)) {
                alert("Chúc mừng! Bạn đã đoán đúng số.");
            } else {
                alert("Số bạn đoán sai. Hãy thử lại.");
            }
    
        } while (!checkGuess(userGuess)); // Lặp lại cho đến khi đoán đúng số
    }
    
    // Gọi hàm chính khi trang web được tải
    guessingGame();
    

    do {
        // Yêu cầu người dùng nhập giá trị từ bàn phím
        userGuess = parseInt(prompt("Nhập một số (0 hoặc 1):"));

        // Kiểm tra sự đúng sai của số nhập vào
        if (checkGuess(userGuess)) {
            alert("Chúc mừng! Bạn đã đoán đúng số.");
        } else {
            alert("Số bạn đoán sai. Hãy thử lại.");
        }

    } while (!checkGuess(userGuess)); // Lặp lại cho đến khi đoán đúng số
}

// Gọi hàm chính khi trang web được tải
guessingGame();