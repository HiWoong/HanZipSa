import styled from 'styled-components';
import Notice from '../components/common/Notice';
import Image from '../components/common/Image';
import BoldText from '../components/common/BoldText';
import Paragraph from '../components/common/Paragraph';
import MenuBar from '../components/common/MenuBar';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 20px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function UserMyPage({ name }) {
  const MenuList = [
    '사용 내역 보기',
    '작성한 게시물 확인하기',
    '간편 결제 수단 등록하기',
    '본인 인증하기',
    '집사 되기',
    '비밀번호 변경하기',
  ];

  return (
    <Wrapper>
      <Notice
        upper={[
          <Image
            src={process.env.PUBLIC_URL + '/images/profile_img.svg'}
            width={'60px'}
            height={'60px'}
          ></Image>,
          <Paragraph
            gap={'20px'}
            fontSize={'13px'}
            sentences={[
              <BoldText
                fontSize={'20px'}
                boldContent={'곽희웅'}
                normalContent={' 사용자님'}
              ></BoldText>,
              '내 정보 수정하기',
            ]}
          ></Paragraph>,
        ]}
        nextPage={'/'}
      ></Notice>
      <Notice
        upper={[
          <Image
            src={process.env.PUBLIC_URL + '/images/family.svg'}
            width={'30px'}
            height={'30px'}
            margin={'2px 0 0 0'}
          ></Image>,
          <ContentWrapper>
            <BoldText
              fontSize={'20px'}
              boldContent={'계정 연동하기'}
            ></BoldText>
            <Image
              src={process.env.PUBLIC_URL + '/images/right_arrow.svg'}
              width={'24px'}
              height={'24px'}
            ></Image>
          </ContentWrapper>,
        ]}
        nextPage={'/'}
      ></Notice>
      {MenuList.map((content, idx) => (
        <Notice
          key={idx}
          upper={[
            <ContentWrapper>
              <BoldText
                fontSize={'18px'}
                boldContent={null}
                normalContent={content}
              ></BoldText>
              <Image
                src={process.env.PUBLIC_URL + '/images/right_arrow.svg'}
                width={'24px'}
                height={'24px'}
              ></Image>
            </ContentWrapper>,
          ]}
          nextPage={'/'}
        ></Notice>
      ))}
      <MenuBar currentMenu="USER"></MenuBar>
    </Wrapper>
  );
}

export default UserMyPage;