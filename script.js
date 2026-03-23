const topicWordBank = {
  동물: [
    "강아지",
    "고양이",
    "토끼",
    "사자",
    "호랑이",
    "기린",
    "코끼리",
    "원숭이",
    "판다",
    "곰",
    "여우",
    "늑대",
    "다람쥐",
    "하마",
    "얼룩말",
    "펭귄",
    "독수리",
    "부엉이",
    "고슴도치",
    "캥거루",
  ],
  과일: [
    "사과",
    "바나나",
    "포도",
    "딸기",
    "복숭아",
    "수박",
    "참외",
    "키위",
    "오렌지",
    "자두",
    "망고",
    "멜론",
    "체리",
    "레몬",
    "블루베리",
    "감",
    "배",
    "파인애플",
    "유자",
    "귤",
  ],
  채소: [
    "당근",
    "오이",
    "양배추",
    "브로콜리",
    "토마토",
    "호박",
    "감자",
    "고구마",
    "양파",
    "마늘",
    "파프리카",
    "가지",
    "시금치",
    "버섯",
    "콩",
    "무",
    "상추",
    "옥수수",
    "완두콩",
    "부추",
  ],
  공룡: [
    "티라노사우루스",
    "트리케라톱스",
    "브라키오사우루스",
    "스테고사우루스",
    "벨로시랩터",
    "안킬로사우루스",
    "파라사우롤로푸스",
    "프테라노돈",
    "모사사우루스",
    "디플로도쿠스",
    "카르노타우루스",
    "이구아노돈",
    "스피노사우루스",
    "알로사우루스",
    "파키케팔로사우루스",
    "프로토케라톱스",
    "콤프소그나투스",
    "테리지노사우루스",
    "오비랍토르",
    "가스토니아",
  ],
  우주: [
    "태양",
    "지구",
    "달",
    "화성",
    "목성",
    "토성",
    "별자리",
    "은하수",
    "우주선",
    "로켓",
    "우주복",
    "블랙홀",
    "소행성",
    "혜성",
    "인공위성",
    "우주정거장",
    "천문대",
    "중력",
    "행성",
    "유성",
  ],
  운동: [
    "축구",
    "농구",
    "야구",
    "배구",
    "수영",
    "달리기",
    "줄넘기",
    "태권도",
    "배드민턴",
    "탁구",
    "테니스",
    "스케이트",
    "체조",
    "사이클",
    "볼링",
    "양궁",
    "핸드볼",
    "피구",
    "하키",
    "씨름",
  ],
  학교: [
    "교실",
    "칠판",
    "연필",
    "지우개",
    "공책",
    "가방",
    "급식",
    "운동장",
    "과학실",
    "도서관",
    "음악실",
    "미술실",
    "시험",
    "숙제",
    "선생님",
    "친구",
    "발표",
    "조회",
    "소풍",
    "시간표",
  ],
  음악: [
    "피아노",
    "바이올린",
    "기타",
    "드럼",
    "리코더",
    "노래",
    "합창",
    "멜로디",
    "리듬",
    "박자",
    "플루트",
    "첼로",
    "트럼펫",
    "탬버린",
    "캐스터네츠",
    "음표",
    "오케스트라",
    "작곡",
    "연주",
    "지휘자",
  ],
  직업: [
    "의사",
    "간호사",
    "소방관",
    "경찰관",
    "요리사",
    "선생님",
    "과학자",
    "우주비행사",
    "파일럿",
    "작가",
    "화가",
    "운동선수",
    "수의사",
    "디자이너",
    "건축가",
    "아나운서",
    "배우",
    "기상캐스터",
    "정원사",
    "발명가",
  ],
  날씨: [
    "맑음",
    "비",
    "눈",
    "구름",
    "바람",
    "천둥",
    "번개",
    "무지개",
    "안개",
    "폭염",
    "장마",
    "우산",
    "기온",
    "한파",
    "소나기",
    "태풍",
    "이슬",
    "햇살",
    "서리",
    "기상예보",
  ],
  바다: [
    "고래",
    "돌고래",
    "상어",
    "문어",
    "오징어",
    "해파리",
    "불가사리",
    "조개",
    "산호",
    "바다거북",
    "해마",
    "물고기",
    "파도",
    "해변",
    "등대",
    "잠수함",
    "해류",
    "모래성",
    "해초",
    "조수",
  ],
  곤충: [
    "나비",
    "개미",
    "잠자리",
    "무당벌레",
    "메뚜기",
    "벌",
    "딱정벌레",
    "매미",
    "사마귀",
    "귀뚜라미",
    "하늘소",
    "장수풍뎅이",
    "흰개미",
    "모기",
    "파리",
    "반딧불이",
    "애벌레",
    "번데기",
    "거미",
    "노린재",
  ],
  탈것: [
    "자동차",
    "버스",
    "지하철",
    "기차",
    "비행기",
    "헬리콥터",
    "자전거",
    "오토바이",
    "배",
    "요트",
    "트럭",
    "택시",
    "스쿠터",
    "열기구",
    "우주선",
    "전동킥보드",
    "소방차",
    "구급차",
    "트램",
    "케이블카",
  ],
  색깔: [
    "빨강",
    "주황",
    "노랑",
    "초록",
    "파랑",
    "남색",
    "보라",
    "분홍",
    "하늘색",
    "연두",
    "갈색",
    "검정",
    "흰색",
    "회색",
    "금색",
    "은색",
    "살구색",
    "민트색",
    "청록색",
    "자주색",
  ],
  감정: [
    "기쁨",
    "행복",
    "설렘",
    "뿌듯함",
    "자신감",
    "용기",
    "평온",
    "사랑",
    "감사",
    "놀람",
    "걱정",
    "두려움",
    "화남",
    "슬픔",
    "외로움",
    "지루함",
    "호기심",
    "신남",
    "부끄러움",
    "짜릿함",
  ],
  음식: [
    "김밥",
    "비빔밥",
    "떡볶이",
    "라면",
    "불고기",
    "잡채",
    "만두",
    "파스타",
    "피자",
    "햄버거",
    "샌드위치",
    "수프",
    "카레",
    "초밥",
    "우동",
    "국수",
    "치킨",
    "계란말이",
    "김치찌개",
    "된장찌개",
  ],
};

const topicAliases = {
  동물친구: "동물",
  반려동물: "동물",
  동물들: "동물",
  과일들: "과일",
  야채: "채소",
  채소들: "채소",
  dinosaurs: "공룡",
  dinosaur: "공룡",
  space: "우주",
  sports: "운동",
  sport: "운동",
  school: "학교",
  music: "음악",
  jobs: "직업",
  weather: "날씨",
  sea: "바다",
  ocean: "바다",
  insects: "곤충",
  bug: "곤충",
  vehicle: "탈것",
  transport: "탈것",
  색: "색깔",
  color: "색깔",
  colours: "색깔",
  emotion: "감정",
  feelings: "감정",
  food: "음식",
  먹을거리: "음식",
};

const fallbackSuffixes = [
  "탐험",
  "친구",
  "놀이",
  "여행",
  "연구",
  "퀴즈",
  "모험",
  "비밀",
  "이야기",
  "실험",
  "선물",
  "지도",
  "레벨",
  "챌린지",
  "마법",
  "리그",
  "캠프",
  "미션",
  "파티",
  "열쇠",
  "신호",
  "대장",
  "탑",
  "기지",
];

const form = document.getElementById("drawForm");
const topicInput = document.getElementById("topicInput");
const countInput = document.getElementById("countInput");
const numberModeInput = document.getElementById("numberModeInput");
const clearAllBtn = document.getElementById("clearAllBtn");
const statusText = document.getElementById("statusText");
const historyCount = document.getElementById("historyCount");
const swipeHint = document.getElementById("swipeHint");
const resultsTrack = document.getElementById("resultsTrack");
const emptyState = document.getElementById("emptyState");
const quickTopicButtons = document.querySelectorAll(".topic-chip");

function normalizeTopic(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function shuffle(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function getWordPool(topic) {
  const cleanedTopic = topic.trim();
  const normalizedTopic = normalizeTopic(cleanedTopic);
  const keys = Object.keys(topicWordBank);

  const exactKey = keys.find((key) => normalizeTopic(key) === normalizedTopic);
  if (exactKey) {
    return { words: topicWordBank[exactKey], matchedTopic: exactKey, fallback: false };
  }

  const aliasKey = topicAliases[normalizedTopic];
  if (aliasKey && topicWordBank[aliasKey]) {
    return { words: topicWordBank[aliasKey], matchedTopic: aliasKey, fallback: false };
  }

  const closeKey = keys.find((key) => {
    const normalizedKey = normalizeTopic(key);
    return normalizedKey.includes(normalizedTopic) || normalizedTopic.includes(normalizedKey);
  });

  if (closeKey) {
    return { words: topicWordBank[closeKey], matchedTopic: closeKey, fallback: false };
  }

  const fallbackWords = fallbackSuffixes.map((suffix) => `${cleanedTopic} ${suffix}`);
  return { words: fallbackWords, matchedTopic: cleanedTopic, fallback: true };
}

function pickWords(topic, count) {
  const poolInfo = getWordPool(topic);
  const uniqueWords = [...new Set(poolInfo.words)];
  let shuffled = shuffle(uniqueWords);

  if (shuffled.length < count) {
    const extra = shuffle(fallbackSuffixes).map((suffix) => `${topic} ${suffix}`);
    for (const word of extra) {
      if (!shuffled.includes(word)) {
        shuffled.push(word);
      }
      if (shuffled.length >= count) {
        break;
      }
    }
  }

  return {
    words: shuffled.slice(0, count),
    matchedTopic: poolInfo.matchedTopic,
    fallback: poolInfo.fallback,
  };
}

function makeWordItem(word, numbered, index) {
  const li = document.createElement("li");
  li.className = numbered ? "word-item" : "word-chip";
  li.textContent = numbered ? `${index + 1}. ${word}` : word;
  return li;
}

function updateCardWords(card, words, matchedTopic, fallback, numbered) {
  const wordList = card.querySelector(".word-list");
  const meta = card.querySelector(".card-meta");
  wordList.innerHTML = "";

  words.forEach((word, index) => {
    wordList.appendChild(makeWordItem(word, numbered, index));
  });

  if (fallback) {
    meta.textContent = "새 주제라서 맞춤 단어 꾸러미를 만들었어요.";
  } else {
    meta.textContent = `${matchedTopic} 주제 꾸러미에서 뽑았어요.`;
  }
}

function createResultCard(topic, count, words, matchedTopic, fallback, numbered) {
  const card = document.createElement("article");
  card.className = "result-card pop-in";
  card.dataset.topic = topic;
  card.dataset.count = String(count);
  card.dataset.numbered = String(numbered);

  const head = document.createElement("div");
  head.className = "card-head";

  const title = document.createElement("h3");
  title.className = "card-topic";
  title.textContent = `${topic} 단어`;

  const badge = document.createElement("span");
  badge.className = "card-badge";
  badge.textContent = `${count}개`;

  head.append(title, badge);

  const meta = document.createElement("p");
  meta.className = "card-meta";

  const wordList = document.createElement(numbered ? "ol" : "ul");
  wordList.className = numbered ? "word-list numbered" : "word-list";

  const actionRow = document.createElement("div");
  actionRow.className = "card-actions";

  const rerollButton = document.createElement("button");
  rerollButton.type = "button";
  rerollButton.className = "reroll-btn";
  rerollButton.textContent = "다시 뽑기";
  rerollButton.setAttribute("data-action", "reroll");
  actionRow.appendChild(rerollButton);

  card.append(head, meta, wordList, actionRow);
  updateCardWords(card, words, matchedTopic, fallback, numbered);

  return card;
}

function getResultCards() {
  return Array.from(resultsTrack.querySelectorAll(".result-card"));
}

function updateBoardState() {
  const cardCount = getResultCards().length;
  historyCount.textContent = `${cardCount}개 주제`;
  emptyState.hidden = cardCount > 0;
  swipeHint.hidden = cardCount < 5;
}

function drawTopicWords(topic, count, numbered) {
  const { words, matchedTopic, fallback } = pickWords(topic, count);
  const card = createResultCard(topic, count, words, matchedTopic, fallback, numbered);
  resultsTrack.appendChild(card);
  updateBoardState();
  card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  statusText.textContent = numbered
    ? `"${topic}" 주제로 단어 ${count}개를 번호순으로 뽑았어요.`
    : `"${topic}" 주제로 단어 ${count}개를 뽑았어요.`;
}

function handleSubmit(event) {
  event.preventDefault();

  const topic = topicInput.value.trim();
  const requestedCount = Number.parseInt(countInput.value, 10);
  const count = Number.isFinite(requestedCount) ? Math.min(Math.max(requestedCount, 1), 20) : 6;
  const numbered = Boolean(numberModeInput?.checked);

  if (!topic) {
    statusText.textContent = "주제를 먼저 입력해 주세요.";
    topicInput.focus();
    return;
  }

  drawTopicWords(topic, count, numbered);
  topicInput.select();
}

function clearAllCards() {
  resultsTrack.innerHTML = "";
  updateBoardState();
  statusText.textContent = "주제 보드를 깨끗하게 지웠어요.";
}

function handleReroll(targetButton) {
  const card = targetButton.closest(".result-card");
  if (!card) return;

  const topic = card.dataset.topic;
  const count = Number.parseInt(card.dataset.count, 10) || 6;
  const numbered = card.dataset.numbered === "true";
  const { words, matchedTopic, fallback } = pickWords(topic, count);

  updateCardWords(card, words, matchedTopic, fallback, numbered);
  card.classList.remove("pop-in");
  requestAnimationFrame(() => {
    card.classList.add("pop-in");
  });

  statusText.textContent = numbered
    ? `"${topic}" 카드 단어를 번호순으로 다시 뽑았어요.`
    : `"${topic}" 카드 단어를 다시 뽑았어요.`;
}

function handleQuickTopicClick(button) {
  topicInput.value = button.dataset.topic || "";
  topicInput.focus();
}

form.addEventListener("submit", handleSubmit);
clearAllBtn.addEventListener("click", clearAllCards);

resultsTrack.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  if (target.dataset.action === "reroll") {
    handleReroll(target);
  }
});

quickTopicButtons.forEach((button) => {
  button.addEventListener("click", () => handleQuickTopicClick(button));
});

updateBoardState();
