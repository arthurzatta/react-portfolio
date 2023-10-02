import Item from "../components/Item";
import Section from "../components/Section";
import Title from "../components/Title";

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Item
        name="Adocão"
        href=""
        source="GITHUB"
        date=""
        description="Aplicativo criado com a proposta de simplificar a localização de animais perdidos ou disponíveis para adoção."
      />
    </Section>
  );
}
