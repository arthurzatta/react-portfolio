import Description from "../components/Description";
import Section from "../components/Section";
import Title from "../components/Title";

export default function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Description>
        Sou um estudante proativo e flexível de Engenharia de Computação, atualmente cursando o CEFET-MG. Com dois anos
        de experiência no desenvolvimento de aplicações web, minha trajetória inclui a responsabilidade de implementar
        novas soluções para a reestruturação de um software legado e de facilitar a aquisição de licenças para um
        sistema de multicanais, desenvolvendo uma aplicação móvel.
      </Description>
    </Section>
  );
}
