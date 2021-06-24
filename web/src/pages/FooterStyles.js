import styled from 'styled-components'

export const Box = styled.div`
padding: 80px 60px;
background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
bottom: 0;
width: 100%;
margin-top: 100px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: -50px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 150px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
display:contents

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #FB7200;
margin-bottom: 40px;
font-weight: bold;
width:450px;
`;

export const Description = styled.p`
font-size: 15px;
color: #fff;
margin-bottom: 40px;
font-weight: semibold;
width:500px;
`;

export const Social = styled.p`
font-size: 15px;
font-weight: semibold;
margin-top 70px;
display:flex;
justify-content:center;
margin-right:50px

`;

export const Icons = styled.p`
font-size: 40px;
color: #FB7200;
cursor:pointer;

margin-left:50px;

`;

