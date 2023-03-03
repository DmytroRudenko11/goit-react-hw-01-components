import styled from 'styled-components';

function Stats({ stats }) {
  return (
    <StatsList>
      <StatsItem>
        <LabelName>Followers</LabelName>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <LabelName>Views</LabelName>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <LabelName>Likes</LabelName>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
}

export default Stats;

const StatsList = styled.ul`
  font-family: Montserrat, sans-serif;
  background-color: aliceblue;
  display: flex;
`;

const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% / 3);
  height: 100px;
  border: 1px solid #adf7e9;
  &:nth-child(2) {
    border-left: none;
    border-right: none;
  }
`;

const LabelName = styled.span`
  font-size: 14px;
  color: gray;
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #212121;
`;
