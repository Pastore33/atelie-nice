const location = {
  streetAddress: "Rua João Paulo, 141 — Parque Real",
  addressLocality: "Diadema",
  addressRegion: "SP",
  addressCountry: "BR",
};
export const business = {
  name: "Ateliê Nice",
  previousName: "Confecção da Nice",
  slogan: "A arte de costurar, o cuidado em cada detalhe.",
  phone: "+55 11 99622-7091",
  tel: "tel:+5511996227091",
  whatsapp: "https://wa.me/5511996227091",
  location,
  address: `${location.streetAddress}, ${location.addressLocality} — ${location.addressRegion}`,
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      `${location.streetAddress}, ${location.addressLocality}, ${location.addressRegion}`,
    ),
};
export const navigation = [
  { href: "/", label: "Início" },
  { href: "/servicos/", label: "Serviços" },
  { href: "/sobre/", label: "Sobre a Nice" },
  { href: "/galeria/", label: "Galeria" },
  { href: "/contato/", label: "Contato" },
];
export const services = [
  {
    id: "escolares",
    title: "Uniformes escolares",
    description:
      "Uniformes para diferentes escolas, confeccionados conforme os modelos e as especificações que você precisa.",
    detail:
      "Traga o modelo ou as orientações da escola. Conversamos sobre medidas, tecidos e quantidade para preparar uma proposta adequada à sua necessidade.",
    icon: "school",
  },
  {
    id: "profissionais",
    title: "Uniformes profissionais",
    description:
      "Peças personalizadas para empresas, comércios e profissionais, com atenção ao conforto e ao acabamento.",
    detail:
      "Conte sobre a rotina da sua equipe e o modelo desejado. A confecção considera as medidas e as necessidades de uso de cada peça.",
    icon: "shirt",
  },
  {
    id: "sob-medida",
    title: "Roupas sob medida",
    description:
      "Suas ideias, suas medidas e seu estilo em peças feitas com cuidado, do tecido ao último ponto.",
    detail:
      "Uma conversa sobre suas preferências é o começo. Medidas, escolha de tecido e acabamento orientam a confecção da sua peça.",
    icon: "ruler",
  },
  {
    id: "ajustes",
    title: "Ajustes e reformas",
    description:
      "Barras, ajustes de tamanho e reformas para melhorar o caimento e dar continuidade à história das suas roupas.",
    detail:
      "Avaliamos a peça e a alteração desejada para orientar as possibilidades de ajuste. Entre em contato e explique o que precisa mudar.",
    icon: "scissors",
  },
] as const;
export const photos = [
  {
    src: "/images/costura.webp",
    alt: "Nice trabalhando com tecido em uma máquina de costura",
    caption: "O cuidado em cada ponto",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/nice.webp",
    alt: "Nice com fita métrica e avental no ambiente do ateliê",
    caption: "Quem está por trás de cada detalhe",
    width: 1086,
    height: 1448,
  },
  {
    src: "/images/uniformes.webp",
    alt: "Tecidos e peças de uniforme dispostos sobre uma mesa no ateliê",
    caption: "Tecidos, formas e possibilidades",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/corte.webp",
    alt: "Nice cortando tecido sobre uma mesa de trabalho",
    caption: "Precisão desde o primeiro corte",
    width: 1448,
    height: 1086,
  },
];
