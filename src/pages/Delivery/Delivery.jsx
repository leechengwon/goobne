import styled from 'styled-components';
import Button from '../../components/Button/Button';
import OrderMethod from './Components/OrderMethod';

const Delivery = () => {
  return (
    <DeliveryMain>
      <DeliveryWrap>
        <SwiperBox>swiper</SwiperBox>
        <MethodWrap>
          <MethodTitle>주문방법선택</MethodTitle>
          <DeliveryMethod>
            <OrderMethod />
          </DeliveryMethod>
          <DeliveryMethodBottom>
            <DeliveryBottomLeft>
              <li>개인정보 수집 이용 동의 (필수)</li>
              <li>수집정보: 배달지 주소</li>
              <li>수집목적: 제품 배달서비스 제공</li>
              <li>보유기간: 관련 법령에 따라 보관 후 파기</li>
              <li>(전자상거래 등에서의 소비자보호에 관한 법률 5년)</li>
            </DeliveryBottomLeft>
            <DeliveryBottomRight>
              <di>해당 배달 주소로 주문을 진행하시겠습니까?</di>
              <Button size="medium">선택</Button>
            </DeliveryBottomRight>
          </DeliveryMethodBottom>
        </MethodWrap>
      </DeliveryWrap>
    </DeliveryMain>
  );
};

export default Delivery;

const FlexCenter = `
  display: flex;
  justify-content: center;
`;

const FlexBetween = `
  display: flex;
  justify-content: space-between;
`;

const DeliveryMain = styled.main`
  width: 100%;
`;

const DeliveryWrap = styled.section`
  width: 71%;
  margin: auto;
`;

const SwiperBox = styled.div`
  width: 100%;
  height: 156px;
  border: 1px solid;
`;

const MethodWrap = styled.div`
  ${FlexCenter};
  flex-direction: column;
  margin-top: 40px;
`;

const MethodTitle = styled.span`
  ${FlexCenter};
  font-size: 30px;
  font-weight: 800;
`;

const DeliveryMethod = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const DeliveryMethodBottom = styled.div`
  ${FlexBetween};
`;

const DeliveryBottomLeft = styled.ul`
  font-size: 11px;
  color: ${props => props.theme.grayscaleD};

  & > li {
    line-height: 1.4;

    &::before {
      content: '-';
      margin-right: 5px;
    }

    &:first-child::before,
    &:last-child::before {
      display: none;
    }
  }
`;

const DeliveryBottomRight = styled.div`
  ${FlexBetween};
  flex-direction: column;
  font-size: 14px;
`;