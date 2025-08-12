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

    // 根據不同的人格代碼，顯示對應的描述
    switch (personalityCode) {
        // 分析家 (NT)
        case 'INTJ':
            resultDescriptionElement.innerText = "【建築師】富有想像力和策略性的思想家，凡事都有計畫。你มอง得遠，並致力於將想法付諸實現。";
            break;
        case 'INTP':
            resultDescriptionElement.innerText = "【邏輯學家】充滿創造力的發明家，對知識有著無法抑制的渴望。你享受探索理論與觀念，尋找事物背後的邏輯。";
            break;
        case 'ENTJ':
            resultDescriptionElement.innerText = "【指揮官】大膽、富有想像力且意志堅強的領導者，總能找到或創造解決辦法。你天生就能夠帶領團隊，實現共同目標。";
            break;
        case 'ENTP':
            resultDescriptionElement.innerText = "【辯論家】聰明好奇的思想者，無法抗拒任何智力上的挑戰。你熱愛腦力激盪，從不同角度探索問題。";
            break;

        // 外交家 (NF)
        case 'INFJ':
            resultDescriptionElement.innerText = "【提倡者】安靜而神秘，但又鼓舞人心且不知疲倦的理想主義者。你深刻、有遠見，並希望能對世界產生正面的影響。";
            break;
        case 'INFP':
            resultDescriptionElement.innerText = "【調停者】詩意、善良且利他的人，總是準備好幫助有需要的人。你看似文靜，內心卻充滿了熱情與火焰。";
            break;
        case 'ENFJ':
            resultDescriptionElement.innerText = "【主人公】富有魅力和鼓舞人心的領導者，能夠吸引聽眾並對他們產生正面的影響。";
            break;
        case 'ENFP':
            resultDescriptionElement.innerText = "【競選者】熱情、富有創造力且善於交際的自由靈魂，總能找到微笑的理由。你充滿活力，善於激勵他人。";
            break;

        // 守護者 (SJ)
        case 'ISTJ':
            resultDescriptionElement.innerText = "【物流師】務實、注重事實的個體，其可靠性無可懷疑。你尊重傳統和秩序，是組織中不可或缺的穩定力量。";
            break;
        case 'ISFJ':
            resultDescriptionElement.innerText = "【守衛者】非常專注而溫暖的守護者，時刻準備著保護他們所愛的人。你富有同情心，且極度忠誠。";
            break;
        case 'ESTJ':
            resultDescriptionElement.innerText = "【總經理】出色的管理者，在管理事務或人員方面無與倫比。你果斷、有條理，並專注於達成結果。";
            break;
        case 'ESFJ':
            resultDescriptionElement.innerText = "【執政官】極富同情心、善於交際且受歡迎的人，總是熱心幫助他人。你享受和諧的社群生活。";
            break;

        // 探險家 (SP)
        case 'ISTP':
            resultDescriptionElement.innerText = "【鑑賞家】大膽而務實的實驗家，精通所有類型的工具。你享受動手解決問題的過程。";
            break;
        case 'ISFP':
            resultDescriptionElement.innerText = "【探險家】靈活而迷人的藝術家，總是準備好探索和體驗新事物。你活在當下，並從五官感受中尋找樂趣。";
            break;
        case 'ESTP':
            resultDescriptionElement.innerText = "【企業家】聰明、精力充沛且極具洞察力的人，享受冒險和活在當下。你善於抓住機會，並將其轉化為現實。";
            break;
        case 'ESFP':
            resultDescriptionElement.innerText = "【表演者】自發、精力充沛且熱情的表演者，他們周圍的生活從不沉悶。你熱愛成為眾人焦點，為大家帶來歡樂。";
            break;
            
        default:
            resultDescriptionElement.innerText = "這是一個獨特的組合，請為它寫下您的專屬註解吧！";
            break;
    }

    // 讓結果區塊顯示出來
    resultArea.classList.remove('hidden');
}