import React from "react"
import Styled from "styled-components"

const CounterContainer = Styled.div`
  width: calc(100% + 20px);
  color: #fff;
  position: fixed;
  bottom: 0;
  left: -20px;
  background: #EF2327;
  display: flex;
  align-items: center;
  justify-content: center;
  .countdown{
    font-size: 1.6rem;
    line-height: 1.2;
    margin: 0;
    padding: 15px 0;
  }
`

const Counter = () => {
  const date1 = new Date("12/24/2019")
  const date2 = new Date()
  const timeDiff = Math.abs(date2.getTime() - date1.getTime())
  const diffDays = Math.ceil(timeDiff / 1000 / 60 / 60 / 24)

  console.log(date1 + " " + date2 + " " + timeDiff + " " + diffDays)
  return (
    <CounterContainer>
      <p className="countdown">
        Only {diffDays} days until our Christmas Eve services!
      </p>
    </CounterContainer>
  )
}

export default Counter
