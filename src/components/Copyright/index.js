import styled from 'styled-components';

const Container = styled.div(props => {
  return {
    fontSize: '0.8rem',
    display: 'flex',
    position: 'fixed',
    bottom: props.theme.margin / 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    opacity: 0.6
  }
})

const Copyright = () => {
  return (
    <Container>
      <div>
        © Copyright 2023 Siân Stone
      </div>
    </Container>
  )
}

export default Copyright;