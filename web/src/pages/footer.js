import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Description,
Social,
Icons,
} from "./FooterStyles.js";





const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Information</Heading>
			<FooterLink href="#">Adresse</FooterLink>
			<FooterLink href="#">Email</FooterLink>
			<FooterLink href="#">Téléphone</FooterLink>
		</Column>
		<Column>
			<Heading>Catégories</Heading>
			<FooterLink href="#">Tasse</FooterLink>
			<FooterLink href="#">Caftièrre</FooterLink>
			<FooterLink href="#">Assiette</FooterLink>
		</Column>
		<Column>
			<Heading>A propos de l'association</Heading>
			<Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Description>
		</Column>
		</Row>

        <Social>
                {/* Faceebook */}
        <Icons to='#' >
          <i class='fab fa-facebook' />
        </Icons>
                {/* Instagram */}
            <Icons to='#' >
          <i class='fab fa-instagram' />
          </Icons>

        {/* Linkdin */}
          <Icons to='#'>
          <i class='fab fa-linkedin-in' />
            </Icons>

        </Social>
	</Container>
	</Box>
);
};
export default Footer;
