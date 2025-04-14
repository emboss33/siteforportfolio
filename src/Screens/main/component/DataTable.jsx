import styles from "./bodysection.module.css";
import num4 from "../../../Image/main/dava-m-num04.png";

const Datatable = () => {
  return (
    <div className={styles.section04_Container}>
      {/* 숫자 아이콘 */}
      <div className={styles.sectionNumber}>
        <img src={num4} alt="섹션 번호 4" />
      </div>

      {/* 타이틀 + 설명 */}
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>데이터 구매 사업비 구성</h2>
        <p className={styles.sectionSmallText}>
          데이터바우처 사업의 유형별로 정부지원금과 민간부담금이 다르게
          적용됩니다.
          <br />
          아래 표를 통해 정확한 지원 비율을 확인하세요.
        </p>
      </div>

      {/* 데스크탑 테이블 */}
      <div className={styles.tableWrapper}>
        <table className={styles.infoTable}>
          <thead>
            <tr>
              <th rowSpan="3" colSpan="2">
                구매
                <br />
                (정부지원금 기준)
              </th>
              <th colSpan="10">일반부문</th>
              <th>사회현안 해결</th>
            </tr>
            <tr>
              <th colSpan="2">초기중견기업</th>
              <th colSpan="2">중소기업</th>
              <th colSpan="2">소상공인</th>
              <th colSpan="2">청년기업</th>
              <th colSpan="2">예비창업자</th>
              <th rowSpan="2">공공기관 등</th>
            </tr>
            <tr>
              <th>금액</th>
              <th>비율</th>
              <th>금액</th>
              <th>비율</th>
              <th>금액</th>
              <th>비율</th>
              <th>금액</th>
              <th>비율</th>
              <th colSpan="2">금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.highlight} rowSpan="1">
                정부지원금
              </td>
              <td className={styles.highlight}>현금</td>
              <td>10,000,000</td>
              <td>75.0%</td>
              <td>10,000,000</td>
              <td>75.0%</td>
              <td>10,000,000</td>
              <td>75.0%</td>
              <td>10,000,000</td>
              <td>90.0%</td>
              <td colSpan="2">10,000,000</td>
              <td>10,000,000</td>
            </tr>
            <tr>
              <td className={styles.highlight} rowSpan="3">
                민간부담금
              </td>
              <td className={styles.highlight}>현금</td>
              <td>3,334,000</td>
              <td>25.0%</td>
              <td>334,000</td>
              <td>2.5%</td>
              <td>-</td>
              <td>0.0%</td>
              <td>-</td>
              <td>0.0%</td>
              <td colSpan="2">-</td>
              <td>-</td>
            </tr>
            <tr>
              <td className={styles.highlight}>
                현물
                <br />
                <span>(인건비)</span>
              </td>
              <td>-</td>
              <td>0.0%</td>
              <td>3,000,000</td>
              <td>22.5%</td>
              <td>3,334,000</td>
              <td>25.0%</td>
              <td>1,112,000</td>
              <td>10.0%</td>
              <td colSpan="2">-</td>
              <td>-</td>
            </tr>
            <tr>
              <td className={styles.highlight}>합계</td>
              <td>3,334,000</td>
              <td>25.0%</td>
              <td>3,334,000</td>
              <td>25.0%</td>
              <td>3,334,000</td>
              <td>25.0%</td>
              <td>1,112,000</td>
              <td>10.0%</td>
              <td colSpan="2">-</td>
              <td>-</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.totalLabel}>
                총사업비
              </td>
              <td>13,334,000</td>
              <td>100.0%</td>
              <td>13,334,000</td>
              <td>100.0%</td>
              <td>13,334,000</td>
              <td>100.0%</td>
              <td>11,112,000</td>
              <td>100.0%</td>
              <td colSpan="2">10,000,000</td>
              <td>10,000,000</td>
            </tr>
            <tr>
              <td colSpan="2" className={styles.totalLabel}>
                최종 견적 금액
              </td>
              <td>13,334,000</td>
              <td>100.0%</td>
              <td>10,334,000</td>
              <td>77.5%</td>
              <td>10,000,000</td>
              <td>75.0%</td>
              <td>10,000,000</td>
              <td>90.0%</td>
              <td colSpan="2">10,000,000</td>
              <td>10,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 모바일 카드형 뷰 */}
      <div className={styles.infoCardList}>
        {/* 예시 카드 - 초기중견기업 */}
        <div className={styles.infoCardItem}>
          <h4>초기중견기업</h4>
          <p>
            <strong>정부지원금:</strong> 10,000,000 (75%)
          </p>
          <p>
            <strong>현금부담:</strong> 3,334,000 (25%)
          </p>
          <p>
            <strong>총사업비:</strong> 13,334,000
          </p>
          <p>
            <strong>최종금액:</strong> 13,334,000
          </p>
        </div>

        <div className={styles.infoCardItem}>
          <h4>중소기업</h4>
          <p>
            <strong>정부지원금:</strong> 10,000,000 (75%)
          </p>
          <p>
            <strong>현금:</strong> 334,000 (2.5%)
          </p>
          <p>
            <strong>현물:</strong> 3,000,000 (22.5%)
          </p>
          <p>
            <strong>총사업비:</strong> 13,334,000
          </p>
          <p>
            <strong>최종금액:</strong> 10,334,000
          </p>
        </div>

        <div className={styles.infoCardItem}>
          <h4>청년기업</h4>
          <p>
            <strong>정부지원금:</strong> 10,000,000 (90%)
          </p>
          <p>
            <strong>현금:</strong> -
          </p>
          <p>
            <strong>현물:</strong> 1,112,000 (10%)
          </p>
          <p>
            <strong>총사업비:</strong> 11,112,000
          </p>
          <p>
            <strong>최종금액:</strong> 10,000,000
          </p>
        </div>

        {/* 필요한 항목 계속 추가 가능 */}
      </div>
    </div>
  );
};

export default Datatable;
