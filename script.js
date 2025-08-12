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
    // 取得要顯示結果的區域
    const questionArea = document.getElementById('question-area');
    const resultArea = document.getElementById('result-area');
    const resultDescriptionElement = document.getElementById('result-description');
    
    // ▼▼▼ 以下是本次修改的核心 ▼▼▼
    const resultCodeContainer = document.getElementById('result-code-container');

    // 組合使用者的四個答案，變成最終的人格代碼
    const personalityCode = userAnswers.join('');

    // 1. 清空舊的字母框 (為了「再測一次」功能)
    resultCodeContainer.innerHTML = '';

    // 2. 將人格代碼拆分成單獨的字母陣列，例如 "ISTJ" -> ["I", "S", "T", "J"]
    const letters = personalityCode.split('');

    // 3. 遍歷字母陣列，為每一個字母都建立一個帶有樣式的 DOM 元素
    letters.forEach(letter => {
        const letterBox = document.createElement('div'); // 建立一個 <div>
        letterBox.className = 'code-letter';          // 加上我們在 CSS 設計好的樣式
        letterBox.textContent = letter;               // 把字母放進去
        resultCodeContainer.appendChild(letterBox);   // 把這個字母框加到容器裡
    });
    // ▲▲▲ 修改核心結束 ▲▲▲


    // 根據不同的人格代碼，顯示對應的描述 (這部分不變)
    switch (personalityCode) {
        case 'ISTJ':
            resultDescriptionElement.innerText = "你是「物流師」型人格(ISTJ)。你嚴謹、務實且可靠。你尊重事實，履行職責，是組織中不可或缺的穩定力量。";
            break;
        case 'ENFP':
            resultDescriptionElement.innerText = "你是「競選者」型人格(ENFP)。你熱情、富有創造力且善於交際的自由精神，總能找到微笑的理由。";
            break;
        // --- 您可以在這裡繼續添加其他14種人格的描述 ---
        case 'INFP':
            resultDescriptionElement.innerText = "你是「調停者」型人格(INFP)。你理想主義、忠於自己的價值觀。你看似文靜，內心卻充滿了熱情與火焰。";
            break;
        default:
            resultDescriptionElement.innerText = "為這個獨特的人格組合，寫下屬於您的精彩註解吧！";
            break;
    }

    // 隱藏問題，顯示結果 (這部分不變)
    questionArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}
}
// --- 我們要新增的函式 ---
function restartTest() {
    // 1. 重置所有狀態變數
    userAnswers.length = 0; // 清空使用者答案陣列
    currentQuestion = 1;     // 將問題計數器重置回 1

    // 2. 重置使用者介面 (UI)
    // 隱藏所有問題區塊和結果區塊
    const allBlocks = document.querySelectorAll('.question-block, #result-area');
    allBlocks.forEach(block => {
        block.classList.add('hidden');
    });

    // 只顯示第一個問題
    const firstQuestion = document.getElementById('q1');
    firstQuestion.classList.remove('hidden');
}