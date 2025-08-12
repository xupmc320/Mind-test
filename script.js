// 用一個陣列來儲存使用者的四個答案
const userAnswers = [];

// 記錄目前回答到第幾題 (從1開始)
let currentQuestion = 1;

// 這是新的核心函式，處理答題、換題、以及顯示最終結果
function recordAnswer(answer) {
    // 1. 將使用者的答案存起來
    userAnswers.push(answer);

    // 2. 隱藏目前的題目
    const currentQuestionBlock = document.getElementById('q' + currentQuestion);
    currentQuestionBlock.classList.add('hidden');

    // 3. 推進到下一題
    currentQuestion++;

    // 4. 檢查是否所有題目都已回答完畢
    if (currentQuestion > 4) {
        // 如果是，就顯示結果
        showResult();
    } else {
        // 如果不是，就顯示下一題
        const nextQuestionBlock = document.getElementById('q' + currentQuestion);
        nextQuestionBlock.classList.remove('hidden');
    }
}

// 這個函式用來顯示最終結果
function showResult() {
    // 組合使用者的四個答案，變成最終的人格代碼
    const personalityCode = userAnswers.join('');

    // 取得結果顯示區塊
    const resultArea = document.getElementById('result-area');
    const resultCodeElement = document.getElementById('result-code');
    const resultDescriptionElement = document.getElementById('result-description');

    // 顯示人格代碼
    resultCodeElement.innerText = personalityCode;
    
    // 根據不同的人格代碼，顯示對應的描述
    // 這部分是您可以大展身手的地方！
    switch (personalityCode) {
        case 'ISTJ':
            resultDescriptionElement.innerText = "你是「物流師」型人格(ISTJ)。你嚴謹、務實且可靠。你尊重事實，履行職責，是組織中不可或缺的穩定力量。";
            break;
        case 'ENFP':
            resultDescriptionElement.innerText = "你是「競選者」型人格(ENFP)。你熱情、富有創造力且善於交際。你總能看到生命的可能性，並用你的熱忱去感染他人。";
            break;
        // --- 您可以在這裡繼續添加其他14種人格的描述 ---
        case 'INFP':
            resultDescriptionElement.innerText = "你是「調停者」型人格(INFP)。你理想主義、忠於自己的價值觀。你看似文靜，內心卻充滿了熱情與火焰。";
            break;
        default:
            resultDescriptionElement.innerText = "為這個獨特的人格組合，寫下屬於您的精彩註解吧！";
            break;
    }

    // 讓結果區塊顯示出來
    resultArea.classList.remove('hidden');
}