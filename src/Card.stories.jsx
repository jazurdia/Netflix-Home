import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    srcImg: { control: "text" },
    texto1: { control: "text" },
    texto2: { control: "text" },
  },
};

export function CardDefault(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading,react/react-in-jsx-scope
  return <Card {...args} />;
}
CardDefault.args = {
  srcImg: "https://i.imgur.com/9QXh1wF.png",
  texto1: "Crea perfiles para niños",
  texto2: "Crea un perfil para cada niño y personaliza su experiencia",
};
