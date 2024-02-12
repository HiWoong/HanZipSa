import styled from 'styled-components';
import { useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import NavigationBar from '../../components/common/NavigationBar';
import Image from '../../components/common/Image';
import Paragraph from '../../components/common/Paragraph';
import Input from '../../components/common/Input';
import LongInputBox from '../../components/common/LongInputBox';
import BoardsTags from '../../components/boards/BoardsTags';
import { updateArticle } from '../../apis/api/board';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 40px;
`;

const SubTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: light;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-content: center;
  gap: 8px;
  overflow: scroll;
  /* background: #f0d9ff; */
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 여기는 '전체' 선택지가 없어용
const allTags = [
  '맛집 추천',
  '동네 소식',
  '집사 후기',
  '동네 모임',
  '생활 꿀팁',
  '일상 공유',
];
const tagLength = allTags.length;

function CreateBoard() {
  // NavigationBAr 사용 위한 변수 선언
  const navigate = useNavigate();
  const onPrevious = () => {
    navigate(-1);
  };
  const onNext = () => {
    updateArticle(boardId, newTitle, newcontent, newtagList);
    navigate(`/boards/${boardId}`);
    window.location.reload();
    // window.location.replace(`/boards/${boardId}`);
    console.log('게시글 수정 완료');
  };

  // tagList를 숫자 배열로 반환하는 함수
  const tagChanger = (allTags, tempTagList) => {
    const tagList = [];
    allTags.forEach((tag, index) => {
      if (tempTagList.includes(tag)) {
        tagList.push(index + 1);
      }
    });
    return tagList;
  };

  // 이전 페이지로부터 props 받기(tagList는 숫자로 변환해야 함)
  const { boardId } = useParams();
  const location = useLocation();
  const title = location.state.title;
  const content = location.state.content;
  const tempTagList = location.state.tagList;
  const tagList = tagChanger(allTags, tempTagList);

  // useState로 변수 선언하기
  const [newTitle, setNewTitle] = useState(title);
  const [newtagList, setNewtagList] = useState(tagList);
  const [newcontent, setNewcontent] = useState(content);

  // // tagCheckList의 상태를 관리할 useState 함수
  // const tagCheckList = Array.from({ length: tagLength }, () => false);
  // const [isSelected, setIsSelected] = useState(tagCheckList);

  // // 누르면 check값이 토글되는 함수
  // const toggleSelected = idx => {
  //   setIsSelected(array => [
  //     ...array.slice(0, idx),
  //     !array[idx],
  //     ...array.slice(idx + 1),
  //   ]);
  // };

  return (
    <Wrapper>
      <NavigationBar
        leftContent={
          <Image
            src={`${process.env.PUBLIC_URL}/images/keyboard_arrow_left.svg`}
            width={'40px'}
            height={'40px'}
            margin={'0 0 0 -12px'}
          ></Image>
        }
        onPrevious={onPrevious}
        rightContent="수정"
        onNext={onNext}
      ></NavigationBar>

      <ParagraphWrapper>
        <Paragraph
          gap="5px"
          fontSize="35px"
          sentences={['게시글 수정하기']}
        ></Paragraph>
      </ParagraphWrapper>

      <div>
        <SubTitle>제목</SubTitle>
        <Input
          type={'text'}
          width={'100%'}
          maxLength={50}
          defaultValue={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        ></Input>
      </div>

      <SubTitle>태그</SubTitle>
      <TagWrapper>
        {allTags.map((tag, idx) => (
          <BoardsTags
            key={idx}
            mode={tagList.includes(tag) ? 'LARGE_SELECTED' : 'LARGE'}
            tagname={tag}
            // onClick={() => toggleSelected(idx)}
          ></BoardsTags>
        ))}
      </TagWrapper>

      <LongInputBox
        title={'내용'}
        maxLength={300}
        defaultValue={newcontent}
        onChange={e => setNewcontent(e.target.value)}
      ></LongInputBox>
    </Wrapper>
  );
}

export default CreateBoard;
