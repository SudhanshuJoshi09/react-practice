import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {
	return (
		<ProgressBarWrapper data-testid="wrapper">
			<Progress data-testid="progress" progress={percent}/>
		</ProgressBarWrapper>
	)
}

const ProgressBarWrapper = styled.div`
	width: 100%;
	height: 20px;
	background-color: lightgrey;
	border-radius: 5px;
	overflow: hidden;
`

const capWidthOverFlow = (width) => {
	if(width > 100) return 100;
	if(width < 0) return 0;
	return width;
}


const Progress = styled.div`
	width: ${(props) => capWidthOverFlow(props.progress || 0)}%;
	height: 20px;
	border-radius: 5px;
	background-color: green;
`

export default ProgressBar
