const userAnswers = [];
let currentQuestionIndex = 0; // 改用索引值 0-3

const questionBlocks = document.querySelectorAll('.question-block');
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');

function recordAnswer(answer) {
    userAnswers.push(answer);
    
    // 隱藏目前問題
    questionBlocks[currentQuestionIndex].classList.add('hidden');
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionBlocks.length) {
        // 顯示下一個問題
        questionBlocks[currentQuestionIndex].classList.remove('hidden');
    } else {
        // 所有問題回答完畢，顯示結果
        showResult();
    }
}

function showResult() {
    const resultDescriptionElement = document.getElementById('result-description');
    const resultCodeContainer = document.getElementById('result-code-container');
    const personalityCode = userAnswers.join('');

    resultCodeContainer.innerHTML = ''; // 清空舊內容
    const letters = personalityCode.split('');
    letters.forEach(letter => {
        const letterBox = document.createElement('div');
        letterBox.className = 'code-letter';
        letterBox.textContent = letter;
        resultCodeContainer.appendChild(letterBox);
    });

    switch (personalityCode) {
        case 'ISTJ': resultDescriptionElement.innerText = "【物流師】你嚴謹、務實且可靠。你尊重事實，履行職責，是組織中不可或缺的穩定力量。"; break;
        case 'ISFJ': resultDescriptionElement.innerText = "【守衛者】你非常專注而溫暖，時刻準備著保護你所愛的人。你富有同情心，且極度忠誠。"; break;
        case 'INFJ': resultDescriptionElement.innerText = "【提倡者】你安靜而神秘，但又鼓舞人心且不知疲倦的理想主義者。你深刻、有遠見，並希望能對世界產生正面的影響。"; break;
        case 'INTJ': resultDescriptionElement.innerText = "【建築師】你富有想像力和策略性的思想家，凡事都有計畫。你มอง得遠，並致力於將想法付諸實現。"; break;
        case 'ISTP': resultDescriptionElement.innerText = "【鑑賞家】你大膽而務實的實驗家，精通所有類型的工具。你享受動手解決問題的過程。"; break;
        case 'ISFP': resultDescriptionElement.innerText = "【探險家】你靈活而迷人的藝術家，總是準備好探索和體驗新事物。你活在當下，並從五官感受中尋找樂趣。"; break;
        case 'INFP': resultDescriptionElement.innerText = "【調停者】你詩意、善良且利他，總是準備好幫助有需要的人。你看似文靜，內心卻充滿了熱情與火焰。"; break;
        case 'INTP': resultDescriptionElement.innerText = "【邏輯學家】你充滿創造力的發明家，對知識有著無法抑制的渴望。你享受探索理論與觀念，尋找事物背後的邏輯。"; break;
        case 'ESTP': resultDescriptionElement.innerText = "【企業家】你聰明、精力充沛且極具洞察力的人，享受冒險和活在當下。你善於抓住機會，並將其轉化為現實。"; break;
        case 'ESFP': resultDescriptionElement.innerText = "【表演者】你自發、精力充沛且熱情的表演者，他們周圍的生活從不沉悶。你熱愛成為眾人焦點，為大家帶來歡樂。"; break;
        case 'ENFP': resultDescriptionElement.innerText = "【競選者】你熱情、富有創造力且善於交際的自由靈魂，總能找到微笑的理由。你充滿活力，善於激勵他人。"; break;
        case 'ENTP': resultDescriptionElement.innerText = "【辯論家】你聰明好奇的思想者，無法抗拒任何智力上的挑戰。你熱愛腦力激盪，從不同角度探索問題。"; break;
        case 'ESTJ': resultDescriptionElement.innerText = "【總經理】你出色的管理者，在管理事務或人員方面無與倫比。你果斷、有條理，並專注於達成結果。"; break;
        case 'ESFJ': resultDescriptionElement.innerText = "【執政官】你極富同情心、善於交際且受歡迎的人，總是熱心幫助他人。你享受和諧的社群生活。"; break;
        case 'ENFJ': resultDescriptionElement.innerText = "【主人公】你富有魅力和鼓舞人心的領導者，能夠吸引聽眾並對他們產生正面的影響。"; break;
        case 'ENTJ': resultDescriptionElement.innerText = "【指揮官】你大膽、富有想像力且意志堅強的領導者，總能找到或創造解決辦法。你天生就能夠帶領團隊，實現共同目標。"; break;
        default: resultDescriptionElement.innerText = "為這個獨特的人格組合，寫下屬於您的精彩註解吧！"; break;
    }

    questionArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
}

function restartTest() {
    userAnswers.length = 0;
    currentQuestionIndex = 0;
    
    resultArea.classList.add('hidden');
    questionBlocks.forEach(block => block.classList.add('hidden'));
    
    questionArea.classList.remove('hidden');
    questionBlocks[0].classList.remove('hidden');
}