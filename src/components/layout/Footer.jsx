import LanguageButton from "./LanguageButton";
const Footer = () => {
  return (
    <footer>
      <div className="con lg:p-0 p-5">
        <div>
          <a href="tel:01012341234">
            <p>
              질문이 있으신가요? 문의 전화:{" "}
              <span className="underline">00-308-321-0161 (수신자 부담)</span>
            </p>
          </a>

          <ul className="py-5 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 mobile:grid-cols-2">
            {items.map((item, i) => {
              return (
                <li key={i}>
                  <a className="hover:underline">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <LanguageButton full />
        <div className="my-5">
          <p className="mb-5">넷플릭스 대한민국</p>
          <ul>
            {items2.map((item, i) => {
              if (i === items2.length - 1) {
                return (
                  <li key={i}>
                    <a href={item.value} className="p-0 hover:underline">
                      {item.title}
                    </a>
                  </li>
                );
              }
              return (
                <li key={i}>
                  {item.title}: {item.value}
                </li>
              );
            })}
          </ul>
          <a href="https://www.naver.com" className="p-0 mt-5">
            <p>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.{" "}
              <span className="hover:underline text-sky-700">
                자세히 알아보기
              </span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const items = [
  "자주 묻는 질문",
  "고객 센터",
  "계정",
  "미디어 센터",
  "투자 정보(IR)",
  "입사 정보",
  "넷플릭스 지원 디바이스",
  "이용 약관",
  "개인정보 처리방침",
  "쿠키 설정",
  "회사 정보",
  "문의하기",
  "속도 테스트",
  "법적 고지",
  "오직 넷플릭스에서",
];

const items2 = [
  {
    title: "넷플릭스서비시스코리아 유한회사 통신파매업신고번호",
    value: "제2018-서울종로-0426호",
  },
  { title: "전화번호", value: "00-308-321-0161(수신자 부담)" },
  { title: "대표", value: "레지널드 숀 톰프슨" },
  { title: "이메일 주소", value: "korea@netflix.com" },
  {
    title: "주소",
    value:
      "대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161",
  },
  { title: "사업자등록번호", value: "166-87-00119" },
  { title: "클라우드 호스팅", value: "Amazon Web Services Inc." },
  {
    title: "공정거래위원회 웹사이트",
    value: "https://www.ftc.go.kr/www/index.do",
  },
];
