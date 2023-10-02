import Item from "../components/Item";
import Section from "../components/Section";
import Title from "../components/Title";

export default function Projects() {
  return (
    <Section id="jobs">
      <Title>Jobs</Title>
      <Item
        name="Desenvolvedor Front-end Jr"
        href=""
        source=""
        date="MAR 2022 - ATUAL"
        description="Encarregado da reformulação de um software legado, desempenhei um papel fundamental ao conceber um editor de blocos e fornecer uma visão revitalizada ao sistema."
      />

      <Item
        name="Estágiario de Desenvolvimento Mobile"
        href=""
        source=""
        date="JUL 2021 - Mar 2022"
        description="Encarregado da implementação de um aplicativo móvel destinado a simplificar a realização de tarefas vinculadas a um software legado."
      />
    </Section>
  );
}
