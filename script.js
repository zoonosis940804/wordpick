function toList(text) {
  return text
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);
}

const topicWordBank = {
  장소: toList(`
집,아파트,빌라,단독주택,학교,유치원,어린이집,도서관,서점,문구점,
편의점,마트,대형마트,백화점,시장,전통시장,상가,쇼핑몰,푸드코트,식당,
한식집,중식집,일식집,양식집,분식집,치킨집,피자가게,빵집,카페,아이스크림가게,
병원,치과,한의원,약국,보건소,경찰서,소방서,우체국,은행,시청,
구청,주민센터,법원,세무서,출입국사무소,박물관,미술관,과학관,수족관,동물원,
식물원,천문대,공원,놀이터,산책로,광장,정원,운동장,체육관,수영장,
축구장,야구장,농구장,배구장,테니스장,배드민턴장,볼링장,탁구장,스케이트장,빙상장,
헬스장,요가원,필라테스센터,산,숲,계곡,강,호수,바다,
해변,섬,동굴,폭포,들판,논,밭,목장,농장,과수원,
캠핑장,야영장,휴게소,도로,고속도로,횡단보도,인도,육교,지하도,터널,
다리,기차역,지하철역,버스정류장,공항,항구,선착장,주차장,주유소,세차장,
자동차정비소,공장,창고,발전소,정수장,하수처리장,건설현장,학원,태권도장,음악학원,
미술학원,교회,성당,절,사찰,호텔,리조트,펜션,게스트하우스,놀이공원,
워터파크,키즈카페,영화관,공연장,노래방,사진관,미용실,이발소,세탁소,찜질방,
목욕탕,온천,궁궐,성곽,전망대,관람차,케이블카역,스키장,방송국,연구소
  `),

  동물: toList(`
강아지,고양이,토끼,사자,호랑이,기린,코끼리,원숭이,판다,곰,
여우,늑대,다람쥐,하마,얼룩말,펭귄,독수리,부엉이,고슴도치,캥거루,
코알라,돌고래,고래,상어,문어,오징어,해마,바다거북,물개,바다사자,
치타,표범,재규어,미어캣,하이에나,라마,알파카,순록,사슴,노루,
멧돼지,돼지,소,말,당나귀,염소,양,닭,오리,거위,
칠면조,공작,비둘기,참새,까치,까마귀,백조,황새,홍학,앵무새,
타조,에뮤,키위새,카피바라,오랑우탄,침팬지,고릴라,수달,비버,오소리,
너구리,족제비,스컹크,북극곰,코뿔소,바이슨,들소,고라니,두더지,쥐,
햄스터,기니피그,친칠라,청설모,박쥐,고래상어,쥐가오리,해파리,불가사리,말미잘,
게,새우,가재,조개,굴,멍게,소라,전복,나비,벌,
개미,잠자리,무당벌레,메뚜기,사마귀,매미,귀뚜라미,반딧불이,모기,파리,
딱정벌레,장수풍뎅이,하늘소,사슴벌레,흰개미,노린재,바퀴벌레,거미,전갈,지네,
도마뱀,이구아나,카멜레온,악어,코브라,비단뱀,거북이,개구리,두꺼비,도롱뇽,
금붕어,붕어,잉어,연어,참치,고등어,갈치,정어리,메기,농어,
청어,방어,복어,장어,홍어,숭어,멸치,쏨뱅이,쥐치,열대어
  `),

  식물: toList(`
할미꽃,민들레,해바라기,장미,튤립,벚꽃,개나리,진달래,나팔꽃,무궁화,
매화,철쭉,코스모스,국화,백합,수선화,동백꽃,목련,라벤더,데이지,
팬지,카네이션,프리지아,안개꽃,히아신스,접시꽃,봉선화,채송화,금잔화,맨드라미,
능소화,연꽃,수련,억새,갈대,나리꽃,수국,진달래꽃,들국화,작약,
소나무,잣나무,전나무,편백나무,단풍나무,은행나무,느티나무,버드나무,벚나무,참나무,
자작나무,플라타너스,아카시아나무,대나무,야자나무,사과나무,배나무,복숭아나무,감나무,대추나무,
매실나무,귤나무,유자나무,무화과나무,석류나무,호두나무,밤나무,올리브나무,자두나무,체리나무,
선인장,알로에,고사리,클로버,이끼,미역,다시마,김,파래,해초,
시금치,상추,배추,양배추,브로콜리,콜리플라워,양상추,당근,무,오이,
호박,애호박,가지,토마토,감자,고구마,양파,마늘,대파,쪽파,
부추,고추,파프리카,옥수수,완두콩,강낭콩,병아리콩,검은콩,서리태,녹두,
참깨,들깨,보리,밀,쌀,귀리,수수,조,기장,율무,
인삼,도라지,더덕,연근,우엉,버섯,표고버섯,느타리버섯,새송이버섯,팽이버섯,
목이버섯,송이버섯,꽃양배추,케일,청경채,근대,고들빼기,취나물,쑥,냉이
  `),

  나라: toList(`
대한민국,일본,중국,대만,몽골,북한,베트남,태국,라오스,캄보디아,
미얀마,말레이시아,싱가포르,인도네시아,필리핀,브루나이,동티모르,인도,파키스탄,방글라데시,
네팔,부탄,스리랑카,몰디브,아프가니스탄,카자흐스탄,우즈베키스탄,키르기스스탄,타지키스탄,투르크메니스탄,
이란,이라크,사우디아라비아,아랍에미리트,카타르,쿠웨이트,오만,예멘,요르단,이스라엘,
레바논,시리아,튀르키예,키프로스,조지아,아르메니아,아제르바이잔,러시아,우크라이나,벨라루스,
폴란드,독일,프랑스,영국,아일랜드,네덜란드,벨기에,룩셈부르크,스위스,오스트리아,
체코,슬로바키아,헝가리,스페인,포르투갈,이탈리아,그리스,스웨덴,노르웨이,핀란드,
덴마크,아이슬란드,에스토니아,라트비아,리투아니아,루마니아,불가리아,세르비아,크로아티아,슬로베니아,
보스니아헤르체고비나,몬테네그로,북마케도니아,알바니아,몰도바,미국,캐나다,멕시코,과테말라,벨리즈,
온두라스,엘살바도르,니카라과,코스타리카,파나마,쿠바,자메이카,도미니카공화국,아이티,바하마,
바베이도스,트리니다드토바고,콜롬비아,베네수엘라,가이아나,수리남,에콰도르,페루,볼리비아,칠레,
아르헨티나,우루과이,파라과이,브라질,모로코,알제리,튀니지,리비아,이집트,수단,
에티오피아,케냐,탄자니아,우간다,르완다,부룬디,콩고민주공화국,콩고공화국,가봉,카메룬,
나이지리아,가나,코트디부아르,세네갈,말리,니제르,차드,남수단,남아프리카공화국,나미비아,
보츠와나,짐바브웨,잠비아,모잠비크,마다가스카르,모리셔스,세이셸,호주,뉴질랜드,파푸아뉴기니,
피지,사모아,통가,바누아투,솔로몬제도,키리바시,투발루,미크로네시아,팔라우,마셜제도
  `),

  직업: toList(`
의사,간호사,치과의사,약사,수의사,물리치료사,작업치료사,임상병리사,방사선사,응급구조사,
소방관,경찰관,군인,해군,공군,우주비행사,파일럿,승무원,관제사,기관사,
버스기사,택시기사,트럭기사,택배기사,지하철기관사,기차기관사,선장,항해사,어부,요리사,
제빵사,파티시에,바리스타,영양사,농부,목축업자,원예사,정원사,선생님,교수,
유치원교사,보육교사,특수교사,체육교사,음악교사,미술교사,강사,학원강사,연구원,과학자,
수학자,천문학자,생물학자,화학자,물리학자,기상캐스터,기상연구원,프로그래머,소프트웨어개발자,데이터분석가,
인공지능연구원,게임개발자,웹디자이너,그래픽디자이너,제품디자이너,건축가,토목기술자,기계공학자,전기기사,전자기술자,
정비사,자동차정비사,용접사,목수,도배사,배관공,페인트공,조경사,환경미화원,청소전문가,
배우,가수,작곡가,작사가,연주자,지휘자,화가,조각가,만화가,일러스트레이터,
사진작가,아나운서,기자,PD,방송작가,소설가,번역가,통역사,변호사,판사,
검사,법무사,세무사,회계사,은행원,투자분석가,보험설계사,부동산중개사,상담사,심리상담사,
사회복지사,공무원,외교관,매니저,마케터,영업사원,창업가,CEO,비서,사서,
큐레이터,학예사,승마선수,운동선수,코치,심판,트레이너,메이크업아티스트,헤어디자이너,네일아티스트
  `),

  음식: toList(`
김밥,비빔밥,볶음밥,주먹밥,오므라이스,덮밥,불고기,갈비,삼겹살,닭갈비,
찜닭,닭볶음탕,치킨,후라이드치킨,양념치킨,간장치킨,탕수육,짜장면,짬뽕,라면,
우동,냉면,막국수,국수,칼국수,수제비,떡국,만둣국,순두부찌개,김치찌개,
된장찌개,부대찌개,청국장,미역국,콩나물국,북엇국,설렁탕,갈비탕,삼계탕,육개장,
곰탕,떡볶이,순대,튀김,어묵,핫도그,토스트,샌드위치,햄버거,피자,
파스타,리조또,스파게티,스테이크,수프,샐러드,카레,오믈렛,계란말이,계란찜,
잡채,전,김치전,파전,감자전,부침개,유부초밥,초밥,돈가스,함박스테이크,
떡,인절미,송편,약과,호떡,붕어빵,와플,팬케이크,도넛,케이크,
컵케이크,쿠키,마카롱,초콜릿,젤리,아이스크림,빙수,요거트,과일샐러드,사과파이,
타르트,푸딩,치즈케이크,브라우니,우유,딸기우유,바나나우유,오렌지주스,사과주스,포도주스,
레몬에이드,콜라,사이다,식혜,수정과,매실차,유자차,녹차,홍차,보리차,
코코아,커피,라떼,카푸치노,에스프레소,버블티,밀크티,두유,콩국수,물회,
회,해물탕,아귀찜,감자탕,순대국,돼지국밥,떡만두국,비지찌개,된장국,시래기국
  `),

  운동: toList(`
축구,풋살,농구,배구,야구,소프트볼,핸드볼,럭비,미식축구,탁구,
테니스,배드민턴,스쿼시,골프,볼링,당구,포켓볼,양궁,사격,펜싱,
유도,태권도,합기도,가라테,검도,씨름,레슬링,복싱,킥복싱,주짓수,
체조,리듬체조,기계체조,트램폴린,수영,다이빙,아티스틱수영,수구,조정,카누,
카약,요트,서핑,윈드서핑,패들보드,스키,알파인스키,크로스컨트리스키,스노보드,스케이트,
피겨스케이팅,쇼트트랙,아이스하키,컬링,썰매,봅슬레이,루지,스켈레톤,사이클,산악자전거,
BMX,트라이애슬론,마라톤,단거리달리기,중거리달리기,장거리달리기,허들,높이뛰기,멀리뛰기,세단뛰기,
창던지기,원반던지기,포환던지기,해머던지기,줄넘기,에어로빅,요가,필라테스,크로스핏,웨이트트레이닝,
근력운동,스트레칭,줄다리기,피구,발야구,족구,게이트볼,인라인스케이트,클라이밍,볼더링,
하이킹,등산,트레킹,걷기,파크런,달리기,무용,발레,댄스스포츠,브레이킹,
힙합댄스,치어리딩,승마,폴로,조깅,플랭크,버피테스트,스쿼트,푸시업,윗몸일으키기,
턱걸이,짐볼운동,케틀벨운동,로잉머신,사이클링,스텝운동,셔플댄스,프리스비,스케이트보드,탁구복식
  `),

  탈것: toList(`
자동차,승용차,소형차,경차,세단,SUV,전기차,하이브리드차,수소차,스포츠카,
오픈카,리무진,택시,버스,시내버스,마을버스,고속버스,관광버스,전세버스,트럭,
덤프트럭,냉동트럭,탱크로리,견인차,소방차,구급차,경찰차,청소차,굴착기,불도저,
지게차,크레인차,레미콘,오토바이,스쿠터,전동킥보드,자전거,산악자전거,로드자전거,BMX,
전기자전거,세발자전거,킥보드,인라인스케이트,기차,KTX,새마을호,무궁화호,전철,지하철,
트램,모노레일,케이블카,곤돌라,리프트,화물열차,증기기관차,디젤기관차,전기기관차,비행기,
여객기,화물기,경비행기,전투기,헬리콥터,드론,열기구,글라이더,우주선,로켓,
인공위성,우주왕복선,캡슐선,잠수함,잠수정,배,유람선,여객선,화물선,컨테이너선,
유조선,어선,요트,카누,카약,고무보트,페리,제트스키,범선,돛단배,
노젓는배,썰매,개썰매,전동휠,호버보드,트랙터,경운기,콤바인,ATV,오프로드차,
캠핑카,카라반,트레일러,유모차,휠체어,전동휠체어,손수레,마차,전차,전동차,
무인자동차,자율주행차,셔틀버스,공항리무진,택배밴,미니밴,승합차,밴,스쿠터보드,관광열차
  `),

  학교: toList(`
교실,운동장,도서관,과학실,미술실,음악실,컴퓨터실,강당,급식실,보건실,
상담실,교무실,교장실,행정실,체육관,복도,계단,현관,화장실,신발장,
사물함,책상,의자,칠판,화이트보드,전자칠판,빔프로젝터,노트북,태블릿,마우스,
키보드,프린터,복사기,스캐너,연필,샤프,볼펜,색연필,사인펜,형광펜,
지우개,연필깎이,자,각도기,컴퍼스,풀,가위,테이프,공책,노트,
받아쓰기공책,수학익힘책,교과서,참고서,문제집,독서록,알림장,시간표,가방,필통,
실내화,체육복,명찰,마스크,물통,도시락,급식카드,숙제,시험,퀴즈,
발표,토론,모둠활동,조별과제,실험,관찰일지,독서,일기,받아쓰기,쪽지시험,
중간고사,기말고사,방학숙제,소풍,현장학습,수학여행,체육대회,운동회,학예회,합창대회,
백일장,과학탐구대회,안전교육,조회,종례,수업,쉬는시간,점심시간,청소시간,동아리,
학생회,선생님,담임선생님,교장선생님,교감선생님,사서선생님,보건선생님,영양사선생님,친구,짝꿍,
반장,부반장,학급회의,규칙,예절,질문,답변,평가,성적표,상장,
스티커,칭찬카드,벌점,상점,학부모상담,독서시간,봉사활동,방과후수업,학습지,발표자료
  `),

  우주: toList(`
태양,수성,금성,지구,달,화성,목성,토성,천왕성,해왕성,
왜행성,명왕성,세레스,에리스,하우메아,마케마케,위성,인공위성,자연위성,소행성,
혜성,유성,운석,별,항성,행성,은하,은하수,성운,성단,
블랙홀,중성자별,백색왜성,초신성,적색거성,청색거성,쌍성,우주먼지,우주복,우주선,
로켓,발사대,우주정거장,국제우주정거장,탐사선,달착륙선,화성탐사선,로버,망원경,우주망원경,
천문대,천문학,천체관측,별자리,황도12궁,오리온자리,북두칠성,북극성,카시오페이아자리,큰곰자리,
작은곰자리,백조자리,전갈자리,사자자리,쌍둥이자리,처녀자리,물병자리,물고기자리,양자리,황소자리,
게자리,천칭자리,사수자리,염소자리,중력,무중력,자전,공전,일식,월식,
개기일식,부분일식,개기월식,부분월식,조석,만조,간조,우주왕복선,우주캡슐,귀환캡슐,
추진체,연료탱크,산소탱크,우주비행사,사령관,지상관제,궤도,저궤도,정지궤도,탈출속도,
빛,빛의속도,광년,천문단위,파섹,우주배경복사,태양풍,자기장,오로라,우주쓰레기,
달기지,화성기지,외계행성,생명탐사,신호탐지,안드로메다은하,우리은하,허블망원경,제임스웹망원경,아르테미스,
아폴로,보이저,카시니,뉴호라이즌스,스푸트니크,달궤도선,우주인터넷,우주관광,우주실험,행성고리
  `),
};

const topicWordBankFinal = Object.fromEntries(
  Object.entries(topicWordBank).map(([topic, words]) => [topic, [...new Set(words)]])
);

const allowedTopics = Object.keys(topicWordBankFinal);

const form = document.getElementById("drawForm");
const topicSelect = document.getElementById("topicSelect");
const countInput = document.getElementById("countInput");
const numberModeInput = document.getElementById("numberModeInput");
const clearAllBtn = document.getElementById("clearAllBtn");
const statusText = document.getElementById("statusText");
const historyCount = document.getElementById("historyCount");
const swipeHint = document.getElementById("swipeHint");
const resultsTrack = document.getElementById("resultsTrack");
const emptyState = document.getElementById("emptyState");
const quickTopics = document.getElementById("quickTopics");

function shuffle(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function pickWords(topic, count) {
  const pool = topicWordBankFinal[topic] || [];
  if (pool.length === 0) {
    return [];
  }

  const shuffled = shuffle(pool);
  if (shuffled.length >= count) {
    return shuffled.slice(0, count);
  }

  const result = [...shuffled];
  let cursor = 0;
  while (result.length < count) {
    result.push(shuffled[cursor % shuffled.length]);
    cursor += 1;
  }
  return result;
}

function makeWordItem(word, numbered, index) {
  const li = document.createElement("li");
  li.className = numbered ? "word-item" : "word-chip";
  li.textContent = numbered ? `${index + 1}. ${word}` : word;
  return li;
}

function updateCardWords(card, words, numbered) {
  const wordList = card.querySelector(".word-list");
  const meta = card.querySelector(".card-meta");
  const topic = card.dataset.topic || "";

  wordList.innerHTML = "";
  words.forEach((word, index) => {
    wordList.appendChild(makeWordItem(word, numbered, index));
  });

  meta.textContent = `${topic} 하위어 사전에서 뽑았어요.`;
}

function createResultCard(topic, count, words, numbered) {
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
  updateCardWords(card, words, numbered);

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
  const words = pickWords(topic, count);
  const card = createResultCard(topic, count, words, numbered);
  resultsTrack.appendChild(card);
  updateBoardState();
  card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

  statusText.textContent = numbered
    ? `"${topic}" 주제 하위어 ${count}개를 번호순으로 뽑았어요.`
    : `"${topic}" 주제 하위어 ${count}개를 뽑았어요.`;
}

function handleSubmit(event) {
  event.preventDefault();

  const topic = topicSelect.value;
  const requestedCount = Number.parseInt(countInput.value, 10);
  const count = Number.isFinite(requestedCount) ? Math.min(Math.max(requestedCount, 1), 20) : 6;
  const numbered = Boolean(numberModeInput?.checked);

  if (!allowedTopics.includes(topic)) {
    statusText.textContent = "미리 준비된 주제에서 선택해 주세요.";
    topicSelect.focus();
    return;
  }

  drawTopicWords(topic, count, numbered);
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
  const words = pickWords(topic, count);

  updateCardWords(card, words, numbered);
  card.classList.remove("pop-in");
  requestAnimationFrame(() => {
    card.classList.add("pop-in");
  });

  statusText.textContent = numbered
    ? `"${topic}" 카드 하위어를 번호순으로 다시 뽑았어요.`
    : `"${topic}" 카드 하위어를 다시 뽑았어요.`;
}

function createTopicChip(topic) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "topic-chip";
  button.dataset.topic = topic;
  button.textContent = topic;
  button.addEventListener("click", () => {
    topicSelect.value = topic;
    topicSelect.focus();
  });
  return button;
}

function initializeTopicControls() {
  allowedTopics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = `${topic} (${topicWordBankFinal[topic].length}개)`;
    topicSelect.appendChild(option);

    quickTopics.appendChild(createTopicChip(topic));
  });

  if (allowedTopics.length > 0) {
    topicSelect.value = allowedTopics[0];
  }
}

function validateTopicBank() {
  const insufficient = allowedTopics.filter((topic) => topicWordBankFinal[topic].length < 100);
  if (insufficient.length > 0) {
    console.warn("100개 미만 주제:", insufficient);
  }
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

initializeTopicControls();
validateTopicBank();
updateBoardState();
