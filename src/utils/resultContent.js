/*
  16가지 결과에 대한 정보가 모여있는 배열
*/
export const resultContent = [
  {
    type: "ISTJ",
    description: "한번 시작한 일은 끝까지 해내는 성격",
    character: "켈빈 클라인 씨케이 원",
    charDescription: "무난하며 자연스러운 산뜻한 향",
    subCharDescription: "#데일리 #중성적 #상쾌함",
    instruction: "전체적으로 차분하고 신중한 사람입니다. 규칙에 엄격하고 책임김이 너무 많은 당신에게 추천합니다.",
    imageSrc: "images/ckone.png"
  },{
    type: "ISFJ",
    description: "성실하고 온화하여 혐조를 잘하는 사람",
    character: "안나수이 로맨티카 이그조티카",
    charDescription: "은은하게 퍼지는 상쾌한 향",
    subCharDescription: "#여자향수 #데일리 #프루티",
    instruction: "내성적인데 상황에 따라서 잘 변하는 사람입니다. 타인의 감정을 잘 캐치하고 공감도 잘해주는 당신에게 추천합니다."

  },{
    type: "INFJ",
    description: "사람에 관한 뛰어난 통찰력을 가진 사람",
    character: "랑콤 미라클 시크릿 오 드 퍼품",
    charDescription: "과일향 꽃향이 섞인듯한 산뜻한 향",
    subCharDescription: "#달달함 #포근함 #데일리",
    instruction: "모든사람에게 다정하고 친절하지만 친하고 마음 맞는 사람이랑만 노는 걸 좋아하는 사람입니다. 공감을 잘해서 상담을 잘 해주는 당신에게 추천합니다."
  },{
    type: "INTJ",
    description: "전체를 조합해 비전을 제시하는 사람",
    character: "프라다 루나 로사",
    charDescription: "촉촉한 숲속 향기처럼 프레시한 향",
    subCharDescription: "#남자향수 #프레시 #라벤더",
    instruction: "항상 완벽을 추구하는 스타일이라서 세세한 계획 세우는 것을 좋아하는 사람입니다. 사실과 원리원칙을 중요시하고 효율성이 떨어지는 시스템을 싫어하는 당신에게 추천합니다."
  },{
    type: "ISTP",
    description: "논리적이고 뛰어난 상황 적응력을 가진 사람",
    character: "아닉구딸 에뚜왈 뒨 뉘 EDP",
    charDescription: "지속력이 뛰어나며 무게감 있는 향",
    subCharDescription: "#파우더향 #머스크향 #가을향수",
    instruction: "손재주가 뛰어나고 기계 조작을 매우 잘하는 공대생 스타일이지만 은근 활동적인 것을 좋아하는 사람입니다. 꽂히는건 무조건 해야하는 당신에게 추천합니다."
  },{
    type: "ISFP",
    description: "따뜻한 감성을 가진 겸손한 사람",
    character: "바이레도 블랑쉬",
    charDescription: "맑고 순수하고 깨끗한 향",
    subCharDescription: "#데일리 #중성적 #코튼",
    instruction: "순둥하고 안 착하다고 생각하는데 남들이 착하다고 하는 사람입니다. 타인의 니즈를 빠르고 섬세하게 캐치하지만 감정표현이 서툰 당신에게 추천합니다."
  },{
    type: "INFP",
    description: "이상적인 세상을 만들어가는 사람",
    character: "조말론 잉글리쉬 페어 앤 프리지아",
    charDescription: "은은하면서 신선하고 감미로운 향",
    subCharDescription: "#프리지아 #상큼함 #로즈",
    instruction: "잡생각이 많고 깨지기 쉬운 유리 멘탈을 소유한 사람입니다. 잔소리는 귀찮아서 안하고 싸우는 것도 싫어서 차라리 희생하고 남들에게 별거 아닌 일에도 크게 감동 받는 당신에게 추천합니다."
  },{
    type: "INTP",
    description: "비평적인 관점을 가진 뛰어난 전략가",
    character: "디올 쟈도르 오 드 퍼퓸 인피니심",
    charDescription: "끝없이 피어나는 독창적이고 관능적인 향",
    subCharDescription:"#여자향수 #그라스산 튜베로즈 #플로럴",
    instruction: "자기 주관이 뚜렷하고 호불호가 확실한 사람입니다. 귀찮은 게 제일 싫어서 일을 미루지만 한번 시작하면 끝을 보는 게으른 천재인 당신에게 추천합니다.ㄴ"
  },{
    type: "ESTP",
    description: "친구, 운동, 음식등 다양함을 선호하는 사람",
    character: "조말론 넥타린 블로섬 앤 허니",
    charDescription: "활발하고 상큼한 사랑스러운 느낌의 향",
    subCharDescription: "프루티 #복숭아 #데일리",
    instruction: "흥미 위주의 놀이를 좋아하고 유혹에 약한 사람입니다. 눈치가 빠르고 타인의 감정을 잘 캐치하는 당신에게 추천드립니다."
  },{
    type: "ESFP",
    description: "비전을 갖고 타인을 활력적으로 인도",
    character: "마크제이콥스 레인",
    charDescription: "비오는 날 촉촉한 풀향",
    subCharDescription: "#깨끗함 #청량함 #프레시",
    instruction: "사교적 긍정적 낙천적 이라는 단어가 너무 잘 어울리는 사람입니다. 거절을 잘하지 못하고 당신이 즐길수 있는 방향으로 모두를 움직이는 당신에게 추천합니다."
  },{
    type: "ENFP",
    description: "열정적으로 새 관계를 만드는 사람",
    character: "에르메스 보야지 데르메스 EDT",
    charDescription: "은은하게 남는 우디향이 매력적인 향",
    subCharDescription: "#중성적인 #머스크향 #홍차향",
    instruction: "가만히 있는 걸 싫어하는 자유로운 영혼이라 주의가 산만하고 어디로 튈지 모르고 표현력이 매우 풍부하고 대화하는 걸 좋아하는 당신에게 추천합니다."
  },{
    type: "ENTP",
    description: "풍부한 상상력으로 새로운 것에 도전하는 사람",
    character: "프라다 캔디 키스",
    charDescription: "매혹적인 부드러움과 시간이 지날수록 더 스윗한 향",
    subCharDescription: "#화이트 머스크 #달콤함 #여자향수",
    instruction: "혼자서 돌아다니는 게 제일 편하고 독립심이 강한 사람입니다. 정해진 틀이나 반복적인 일을 가장 싫어하는 당신에게 추천합니다."
  },{
    type: "ESTJ",
    description: "사무적, 실용적, 현실적으로 일을 많이하는 사람",
    character: "가브리엘 샤넬 에쌍스",
    charDescription: "달달하고 우아한 고급스러운 향",
    subCharDescription: "#플로럴 #자스민 #그라스 튜베로즈",
    instruction: "호불호가 매우 확실하고 리더 하는거 너무 싫은데 막상 하면 잘 하는 사람입니다. 과정보다 결과가 중요한 워커 홀릭인 당신에게 추천합니다."
  },{
    type: "ESFJ",
    description: "친절과 현실감을 바탕으로 타인에게 봉사하는 사람",
    character: "프레쉬 헤스페리데스",
    charDescription: "깨끗하면서 살짝 은은하게 달달한 향",
    subCharDescription: "#자몽향 #여름향수 #상큼함",
    instruction: "사회생활을 잘하고 자연스럽게 분위기를 주도하는 사람입니다. 공감 능력이 너무 좋아서 상대방의 기분을 잘 맞춰주는 당신에게 추천합니다."
  },{
    type: "ENFJ",
    description: "타인의 성장을 도모하고 협동하는 사람",
    character: "미스 디올 로즈 앤 로지스",
    charDescription: "장미꽃향기가 고스란히 담긴 향",
    subCharDescription: "#로즈 #머스크 #지속력",
    instruction: "말로 사람을 움직이게 하는 능력이 탁월한 사람입니다. 말을 이쁘게 하고 말로 사람을 홀리는 매력이 있어 대인 관계가 좋고 주변에 인기가 많으며 모두의 신뢰를 받는 당신에게 추천합니다."
  },{
    type: "ENTJ",
    description: "분위기를 고조시키는 우호적인 사람",
    character: "조말론 다크 앰버 앤 진저 릴리",
    charDescription: "다크하고 무게감이 있는 관능적인 향",
    subCharDescription: "#시크함 #진저향 #중성적인",
    instruction: "끈기와 책임감이 뛰어나 맡은 일에 최선을 다하는 사람입니다. 매사에 자신감이 넘치고 목표가 확실한 당신에게 추천합니다."
  }
]