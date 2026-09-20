export type PageType =
  | "Serviço"
  | "Problema"
  | "Produto"
  | "Setor"
  | "Institucional"
  | "Hub"
  | "Blog"
  | "Conversão";

export type PageSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PageDef = {
  slug: string; // "" = home
  nav: string;
  type: PageType;
  priority: string;
  keyword: string;
  secondary: string[];
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  related?: { label: string; to: string }[];
};

const lorem =
  "Texto de preenchimento. O conteúdo definitivo desta seção será enviado posteriormente e deve trabalhar a palavra-chave da página no corpo do texto, mantendo linguagem acessível e tom técnico de autoridade.";

const s = (heading: string, bullets?: string[]): PageSection => ({
  heading,
  body: lorem,
  bullets,
});

export const HOME: PageDef = {
  slug: "",
  nav: "Home",
  type: "Institucional",
  priority: "Alta",
  keyword: "empresa de tratamento de água",
  secondary: [
    "análise e tratamento de água",
    "empresa de análise de água",
    "qualidade da água",
    "vidagua",
  ],
  title: "Vid'Água — Empresa de Tratamento de Água | 30+ anos",
  description:
    "Empresa de tratamento de água com mais de 30 anos de experiência em análise, tratamento e legalização de poços. Laudos conforme a Portaria 888. Atendimento nacional.",
  h1: "Vid'Água – Mais de 30 anos tratando e cuidando da qualidade da água.",
  intro:
    "Laudos técnicos em conformidade com a Portaria 888 e registro junto ao DAEE. Atendemos residências, condomínios e indústrias em todo o Brasil.",
  sections: [],
};

export const PAGES: PageDef[] = [
  {
    slug: "analise-de-agua",
    nav: "Análise de Água",
    type: "Serviço",
    priority: "Alta",
    keyword: "análise de água",
    secondary: [
      "análise de água preço",
      "análise de água quanto custa",
      "análise de água para beber",
      "análise de água portaria 2914",
      "análise de água potabilidade",
      "análise de água conformidade",
      "análise de água urgente",
      "onde fazer análise de água",
      "teste de qualidade da água",
      "laboratório análise de água",
    ],
    title: "Análise de Água: Laudo de Potabilidade e Preço | Vid'Água",
    description:
      "Análise de água com laudo técnico de potabilidade conforme a Portaria 2914. Saiba onde fazer, quanto custa e quais parâmetros são avaliados.",
    h1: "Análise de Água",
    intro:
      "Da dúvida inicial sobre onde fazer a análise até o laudo técnico em mãos, com parâmetros conforme a legislação vigente.",
    sections: [
      s("O que é a análise de água e quando fazer", [
        "Água de poço artesiano",
        "Água de rede pública com alteração de cor, gosto ou odor",
        "Exigência de órgão fiscalizador",
      ]),
      s("Parâmetros avaliados e a Portaria 2914"),
      s("Relatório de análise de água"),
      s("Parecer técnico e certificado de análise"),
      s("Laudo técnico de água: prazos e validade"),
      s("Análise de água: preço e quanto custa"),
      s("Análise urgente e coleta rápida"),
      s("Perguntas frequentes"),
    ],
    related: [
      { label: "Tratamento de Água", to: "/tratamento-de-agua" },
      { label: "Monitoramento Contínuo", to: "/monitoramento-qualidade-agua" },
    ],
  },
  {
    slug: "tratamento-de-agua",
    nav: "Tratamento de Água",
    type: "Serviço",
    priority: "Alta",
    keyword: "tratamento de água",
    secondary: [
      "tratamento de água portaria 888",
      "tratamento de água preço",
      "tratamento de água residencial",
      "tratamento de água para beber",
      "tratamento de água condomínio",
      "sistema de tratamento de água",
      "equipamento tratamento água",
      "instalação tratamento água",
      "manutenção tratamento água",
    ],
    title: "Tratamento de Água: Sistemas, Instalação e Preço | Vid'Água",
    description:
      "Sistemas de tratamento de água para residências, condomínios e indústrias, em conformidade com a Portaria 888. Projeto, instalação e manutenção.",
    h1: "Tratamento de Água",
    intro:
      "Página pilar de serviços: diagnóstico, dimensionamento, instalação e manutenção de sistemas de tratamento.",
    sections: [
      s("Como funciona um sistema de tratamento de água"),
      s("Portaria 888 e os padrões de potabilidade"),
      s("Tratamento residencial e para condomínios"),
      s("Equipamentos e instalação"),
      s("Manutenção do sistema"),
      s("Tratamento de água: preço e quanto custa"),
    ],
    related: [
      { label: "Água Dura", to: "/agua-dura" },
      { label: "Água com Ferro e Manganês", to: "/agua-com-ferro-manganes" },
      { label: "Água Turva, Cheiro e Cloro", to: "/agua-turva-cheiro-cloro" },
      { label: "Contaminação da Água", to: "/contaminacao-agua" },
      { label: "Manutenção de Sistemas", to: "/manutencao-sistemas-tratamento" },
    ],
  },
  {
    slug: "agua-dura",
    nav: "Água Dura",
    type: "Problema",
    priority: "Média-Alta",
    keyword: "água dura",
    secondary: [
      "água dura tratamento",
      "como tratar água dura",
      "dureza da água",
      "abrandamento de água",
      "água com calcário",
    ],
    title: "Água Dura: Causas, Sintomas e Tratamento | Vid'Água",
    description:
      "Água dura entope tubulações e reduz a vida útil de equipamentos. Entenda a dureza da água e as soluções de abrandamento.",
    h1: "Água Dura: Tratamento e Solução",
    intro: "Sinais de dureza, medição em mg/L de CaCO₃ e caminhos de abrandamento.",
    sections: [
      s("Como identificar água dura", [
        "Sabão que não faz espuma",
        "Crostas brancas em torneiras e chuveiros",
        "Manchas em louças e vidros",
      ]),
      s("Causas da dureza da água"),
      s("Consequências para tubulações e equipamentos"),
      s("Tratamento: abrandamento por resina"),
      s("Manutenção e regeneração"),
    ],
    related: [
      { label: "Abrandador de Água", to: "/abrandador-de-agua" },
      { label: "Análise de Água", to: "/analise-de-agua" },
    ],
  },
  {
    slug: "agua-com-ferro-manganes",
    nav: "Ferro e Manganês",
    type: "Problema",
    priority: "Média-Alta",
    keyword: "água com ferro",
    secondary: [
      "água amarelada",
      "água com manganês",
      "remover ferro da água",
      "água com gosto de ferrugem",
      "filtro para ferro na água",
    ],
    title: "Água com Ferro e Manganês: Como Tratar | Vid'Água",
    description:
      "Água amarelada, com manchas ou gosto de ferrugem indica ferro e manganês. Veja como identificar e tratar.",
    h1: "Água com Ferro e Manganês",
    intro: "Coloração, manchas em roupas e sabor metálico têm origem e tratamento definidos.",
    sections: [
      s("Sintomas típicos"),
      s("Origem do ferro e do manganês na água"),
      s("Oxidação e filtração"),
      s("Dimensionamento do sistema"),
      s("Manutenção periódica"),
    ],
    related: [
      { label: "Filtros de Água", to: "/filtros-de-agua" },
      { label: "Análise de Água", to: "/analise-de-agua" },
    ],
  },
  {
    slug: "agua-turva-cheiro-cloro",
    nav: "Água Turva e Cheiro",
    type: "Problema",
    priority: "Média",
    keyword: "água com cheiro",
    secondary: [
      "água turva tratamento",
      "água turva",
      "água com cheiro tratamento",
      "água com cloro forte",
    ],
    title: "Água Turva, com Cheiro ou Cloro Forte: Soluções | Vid'Água",
    description:
      "Água turva, com odor ou excesso de cloro tem solução técnica por filtração e dosagem correta. Entenda as causas.",
    h1: "Água Turva, com Cheiro ou Cloro Forte",
    intro: "Sintomas diferentes com uma mesma linha de solução: filtração e dosagem adequada.",
    sections: [
      s("Água turva: causas e tratamento"),
      s("Água com cheiro: o que pode indicar"),
      s("Cloro forte não é sinal de qualidade"),
      s("Filtração e ajuste de dosagem"),
    ],
    related: [
      { label: "Filtros de Água", to: "/filtros-de-agua" },
      { label: "Bomba Dosadora de Cloro", to: "/bomba-dosadora-cloro" },
    ],
  },
  {
    slug: "contaminacao-agua",
    nav: "Contaminação",
    type: "Problema",
    priority: "Alta",
    keyword: "contaminação da água",
    secondary: [
      "água contaminada",
      "bactérias na água",
      "coliformes na água",
      "análise microbiológica da água",
      "contaminação química da água",
    ],
    title: "Contaminação da Água: Biológica e Química | Vid'Água",
    description:
      "Suspeita de bactérias, coliformes ou contaminação química? Entenda os riscos, a análise necessária e o tratamento.",
    h1: "Contaminação Biológica e Química da Água",
    intro: "Riscos à saúde exigem análise laboratorial antes de qualquer tratamento.",
    sections: [
      s("Sinais de contaminação"),
      s("Contaminação biológica: coliformes e E. coli"),
      s("Contaminação química"),
      s("Análise microbiológica e físico-química"),
      s("Desinfecção e tratamento corretivo"),
    ],
    related: [
      { label: "Análise de Água", to: "/analise-de-agua" },
      { label: "Tratamento de Água", to: "/tratamento-de-agua" },
    ],
  },
  {
    slug: "legalizacao-poco-artesiano",
    nav: "Legalização de Poço",
    type: "Serviço",
    priority: "Alta",
    keyword: "outorga de poço artesiano",
    secondary: [
      "legalização de poço artesiano",
      "poço artesiano legal",
      "como legalizar poço artesiano",
      "poço artesiano registro DAEE",
      "poço artesiano documentação",
    ],
    title: "Legalização e Outorga de Poço Artesiano | Vid'Água",
    description:
      "Como legalizar poço artesiano: outorga, registro no DAEE, documentos e prazos. Assessoria técnica completa.",
    h1: "Legalização de Poço Artesiano",
    intro: "Processo burocrático descomplicado: entenda a outorga e quando ela é necessária.",
    sections: [
      s("O que é outorga de uso da água"),
      s("Quando a outorga é necessária e quando há dispensa"),
      s("Registro no DAEE"),
      s("Documentação exigida"),
      s("Prazos e renovação"),
    ],
    related: [{ label: "Manutenção de Poço Artesiano", to: "/manutencao-poco-artesiano" }],
  },
  {
    slug: "manutencao-poco-artesiano",
    nav: "Manutenção de Poço",
    type: "Serviço",
    priority: "Alta",
    keyword: "tratamento de água de poço",
    secondary: [
      "manutenção de poço artesiano",
      "limpeza de poço artesiano",
      "desinfecção de poço",
      "poço artesiano água suja",
    ],
    title: "Manutenção e Tratamento de Poço Artesiano | Vid'Água",
    description:
      "Limpeza, desinfecção e tratamento de água de poço artesiano com laudo técnico. Manutenção preventiva e corretiva.",
    h1: "Manutenção e Tratamento de Poço Artesiano",
    intro: "Poço bem mantido entrega água segura e evita paradas não programadas.",
    sections: [
      s("Periodicidade recomendada"),
      s("Limpeza e desinfecção"),
      s("Tratamento da água de poço"),
      s("Laudo após manutenção"),
    ],
    related: [{ label: "Legalização de Poço Artesiano", to: "/legalizacao-poco-artesiano" }],
  },
  {
    slug: "bomba-dosadora-cloro",
    nav: "Bomba Dosadora de Cloro",
    type: "Produto",
    priority: "Média",
    keyword: "bomba dosadora de cloro",
    secondary: [
      "bomba dosadora cloro preço",
      "dosadora de cloro para poço",
      "clorador automático",
      "instalação bomba dosadora",
    ],
    title: "Bomba Dosadora de Cloro: Modelos e Instalação | Vid'Água",
    description:
      "Bomba dosadora de cloro para poços e sistemas de abastecimento. Dosagem precisa, instalação e manutenção.",
    h1: "Bomba Dosadora de Cloro",
    intro: "Cloração automática com dosagem controlada e registro de consumo.",
    sections: [
      s("Para que serve"),
      s("Modelos e capacidade de dosagem"),
      s("Instalação e ajuste"),
      s("Manutenção e insumos"),
    ],
    related: [{ label: "Produtos Químicos", to: "/produtos-quimicos-agua" }],
  },
  {
    slug: "bomba-dosadora-agua",
    nav: "Bomba Dosadora de Água",
    type: "Produto",
    priority: "Média",
    keyword: "bomba dosadora de água",
    secondary: [
      "bomba dosadora industrial",
      "bomba dosadora água preço",
      "dosagem de produtos químicos",
    ],
    title: "Bomba Dosadora de Água: Aplicações e Preço | Vid'Água",
    description:
      "Bombas dosadoras para dosagem precisa de produtos químicos em sistemas residenciais e industriais.",
    h1: "Bomba Dosadora de Água",
    intro: "Dosagem proporcional e confiável para diferentes portes de instalação.",
    sections: [
      s("Aplicações"),
      s("Modelos industriais"),
      s("Dimensionamento"),
      s("Preço e condições"),
    ],
    related: [{ label: "Tratamento para Empresas", to: "/tratamento-de-agua-industrial" }],
  },
  {
    slug: "filtros-de-agua",
    nav: "Filtros de Água",
    type: "Produto",
    priority: "Alta",
    keyword: "filtro de água",
    secondary: [
      "filtro água poço artesiano",
      "filtro água residencial",
      "filtro água comprar",
      "filtro água preço",
      "elementos filtrantes",
      "filtro de carvão ativado",
      "filtro de areia",
      "filtro industrial água",
    ],
    title: "Filtros de Água: Residenciais e Industriais | Vid'Água",
    description:
      "Filtros de água para poço artesiano, uso residencial e industrial: carvão ativado, areia e elementos filtrantes.",
    h1: "Filtros de Água",
    intro: "Linha completa de filtração, do ponto de uso ao sistema industrial.",
    sections: [
      s("Filtro para poço artesiano"),
      s("Filtro residencial"),
      s("Filtro de carvão ativado"),
      s("Filtro de areia"),
      s("Filtro industrial"),
      s("Elementos filtrantes e troca"),
    ],
    related: [{ label: "Tratamento de Água", to: "/tratamento-de-agua" }],
  },
  {
    slug: "abrandador-de-agua",
    nav: "Abrandador de Água",
    type: "Produto",
    priority: "Média",
    keyword: "abrandador de água",
    secondary: [
      "abrandador de água preço",
      "abrandador resina",
      "amaciador de água",
      "abrandador industrial",
    ],
    title: "Abrandador de Água: Como Funciona e Preço | Vid'Água",
    description:
      "Abrandador de água por resina catiônica para reduzir a dureza e proteger tubulações e equipamentos.",
    h1: "Abrandador de Água",
    intro: "Solução direta para água dura em residências, condomínios e indústrias.",
    sections: [
      s("Como funciona a resina catiônica"),
      s("Dimensionamento por vazão e dureza"),
      s("Regeneração e consumo de sal"),
      s("Preço e manutenção"),
    ],
    related: [{ label: "Água Dura", to: "/agua-dura" }],
  },
  {
    slug: "desmineralizador-de-agua",
    nav: "Desmineralizador",
    type: "Produto",
    priority: "Média",
    keyword: "desmineralizador de água",
    secondary: ["água desmineralizada", "deionizador de água", "desmineralizador industrial"],
    title: "Desmineralizador de Água: Aplicações | Vid'Água",
    description:
      "Desmineralizador de água para processos que exigem baixa condutividade. Projeto, instalação e suporte técnico.",
    h1: "Desmineralizador de Água",
    intro: "Remoção de sais dissolvidos para aplicações industriais e laboratoriais.",
    sections: [
      s("O que é água desmineralizada"),
      s("Aplicações industriais"),
      s("Leitos de troca iônica"),
      s("Manutenção e regeneração"),
    ],
  },
  {
    slug: "agua-destilada",
    nav: "Água Destilada",
    type: "Produto",
    priority: "Baixa-Média",
    keyword: "água destilada",
    secondary: ["água destilada preço", "água destilada comprar"],
    title: "Água Destilada: Comprar e Preço | Vid'Água",
    description: "Água destilada para uso laboratorial, industrial e automotivo. Consulte preço e condições.",
    h1: "Água Destilada",
    intro: "Fornecimento com controle de qualidade e embalagens adequadas ao uso.",
    sections: [s("Usos da água destilada"), s("Embalagens disponíveis"), s("Preço e pedidos")],
  },
  {
    slug: "produtos-quimicos-agua",
    nav: "Produtos Químicos",
    type: "Produto",
    priority: "Média",
    keyword: "produtos químicos para tratamento de água",
    secondary: [
      "cloro para tratamento de água",
      "sal para abrandador",
      "coagulante para água",
      "insumos tratamento de água",
    ],
    title: "Produtos Químicos para Tratamento de Água | Vid'Água",
    description:
      "Cloro, coagulantes, sal para abrandador e demais insumos para tratamento de água com orientação técnica de uso.",
    h1: "Produtos Químicos para Tratamento de Água",
    intro: "Insumos com ficha técnica e orientação de dosagem.",
    sections: [
      s("Linha de produtos"),
      s("Dosagem e segurança"),
      s("Armazenamento"),
      s("Fornecimento recorrente"),
    ],
  },
  {
    slug: "monitoramento-qualidade-agua",
    nav: "Monitoramento",
    type: "Serviço",
    priority: "Alta",
    keyword: "monitoramento da qualidade da água",
    secondary: [
      "controle de qualidade da água",
      "análise periódica de água",
      "plano de monitoramento de água",
      "laudos periódicos",
    ],
    title: "Monitoramento da Qualidade da Água | Vid'Água",
    description:
      "Planos de monitoramento com coletas periódicas, laudos recorrentes e acompanhamento técnico contínuo.",
    h1: "Monitoramento da Qualidade da Água",
    intro: "Rotina de coletas e laudos que mantém a conformidade ao longo do ano.",
    sections: [
      s("Como funciona o plano de monitoramento"),
      s("Periodicidade das coletas"),
      s("Laudos e histórico"),
      s("Ações corretivas"),
    ],
    related: [{ label: "Análise de Água", to: "/analise-de-agua" }],
  },
  {
    slug: "manutencao-sistemas-tratamento",
    nav: "Manutenção de Sistemas",
    type: "Serviço",
    priority: "Média-Alta",
    keyword: "manutenção de sistema de tratamento de água",
    secondary: [
      "manutenção preventiva tratamento de água",
      "manutenção corretiva filtro",
      "troca de elementos filtrantes",
      "assistência técnica tratamento de água",
    ],
    title: "Manutenção de Sistemas de Tratamento de Água | Vid'Água",
    description:
      "Manutenção preventiva e corretiva de sistemas de tratamento: filtros, dosadoras, abrandadores e acessórios.",
    h1: "Manutenção de Sistemas de Tratamento",
    intro: "Contratos preventivos e atendimento corretivo com peças e insumos.",
    sections: [
      s("Manutenção preventiva"),
      s("Manutenção corretiva"),
      s("Troca de elementos filtrantes"),
      s("Contratos de assistência"),
    ],
  },
  {
    slug: "tratamento-de-agua-industrial",
    nav: "Para Empresas",
    type: "Setor",
    priority: "Alta",
    keyword: "tratamento de água industrial",
    secondary: [
      "tratamento água indústria",
      "tratamento água condomínio",
      "sistema filtração comercial",
      "bomba dosadora industrial",
    ],
    title: "Tratamento de Água Industrial e Comercial | Vid'Água",
    description:
      "Soluções de tratamento de água para indústrias, condomínios e empresas: projeto, instalação e manutenção.",
    h1: "Tratamento de Água para Empresas",
    intro: "Hub do setor empresarial: projetos dimensionados por segmento e volume.",
    sections: [
      s("Diagnóstico e projeto"),
      s("Sistemas de filtração comercial"),
      s("Dosagem industrial"),
      s("Conformidade e laudos"),
    ],
    related: [
      { label: "Hotéis", to: "/tratamento-agua-hotel" },
      { label: "Restaurantes", to: "/tratamento-agua-restaurante" },
      { label: "Piscinas", to: "/tratamento-agua-piscina" },
      { label: "Academias, Clínicas e Consultórios", to: "/tratamento-agua-comercial" },
    ],
  },
  {
    slug: "tratamento-agua-hotel",
    nav: "Hotéis",
    type: "Setor",
    priority: "Média",
    keyword: "tratamento de água para hotéis",
    secondary: ["tratamento água pousada", "água quente hotel", "filtração hotel"],
    title: "Tratamento de Água para Hotéis e Pousadas | Vid'Água",
    description:
      "Tratamento de água para hotéis e pousadas: conforto do hóspede, proteção de equipamentos e conformidade sanitária.",
    h1: "Tratamento de Água para Hotéis",
    intro: "Alta rotatividade exige água consistente em todos os pontos de uso.",
    sections: [s("Desafios do segmento"), s("Solução recomendada"), s("Manutenção e laudos")],
  },
  {
    slug: "tratamento-agua-restaurante",
    nav: "Restaurantes",
    type: "Setor",
    priority: "Média",
    keyword: "tratamento de água para restaurantes",
    secondary: ["filtro água cozinha industrial", "água para máquina de gelo", "vigilância sanitária água"],
    title: "Tratamento de Água para Restaurantes | Vid'Água",
    description:
      "Água tratada para cozinhas industriais, máquinas de gelo e conformidade com a vigilância sanitária.",
    h1: "Tratamento de Água para Restaurantes",
    intro: "Segurança alimentar começa pela qualidade da água.",
    sections: [s("Pontos críticos"), s("Filtração para cozinha industrial"), s("Laudos e fiscalização")],
  },
  {
    slug: "tratamento-agua-piscina",
    nav: "Piscinas",
    type: "Setor",
    priority: "Média",
    keyword: "tratamento de água de piscina",
    secondary: ["água de piscina verde", "dosagem cloro piscina", "manutenção piscina condomínio"],
    title: "Tratamento de Água de Piscina | Vid'Água",
    description:
      "Tratamento de água de piscina para condomínios, clubes e hotéis: equilíbrio químico, dosagem e manutenção.",
    h1: "Tratamento de Água de Piscina",
    intro: "Equilíbrio químico estável evita água turva e desconforto aos usuários.",
    sections: [s("Parâmetros de controle"), s("Dosagem automática"), s("Rotina de manutenção")],
  },
  {
    slug: "tratamento-agua-comercial",
    nav: "Academias e Clínicas",
    type: "Setor",
    priority: "Baixa-Média",
    keyword: "tratamento água academia",
    secondary: ["tratamento água clínica", "tratamento água consultório"],
    title: "Tratamento de Água para Academias, Clínicas e Consultórios | Vid'Água",
    description:
      "Soluções de tratamento de água para academias, clínicas e consultórios, com laudos e manutenção programada.",
    h1: "Tratamento de Água para Academias, Clínicas e Consultórios",
    intro: "Três segmentos com necessidades próximas e soluções compactas.",
    sections: [s("Academias"), s("Clínicas"), s("Consultórios")],
  },
  {
    slug: "tratamento-efluentes",
    nav: "Efluentes",
    type: "Serviço",
    priority: "Média",
    keyword: "tratamento de efluentes",
    secondary: ["estação de tratamento de efluentes", "efluente industrial", "descarte de efluentes"],
    title: "Tratamento de Efluentes Industriais | Vid'Água",
    description:
      "Projetos de tratamento de efluentes com foco em conformidade ambiental e redução de custo de descarte.",
    h1: "Tratamento de Efluentes",
    intro: "Conformidade ambiental com processos dimensionados para cada efluente.",
    sections: [s("Caracterização do efluente"), s("Processos de tratamento"), s("Conformidade e licenças")],
    related: [{ label: "Água de Reuso", to: "/agua-de-reuso" }],
  },
  {
    slug: "agua-de-reuso",
    nav: "Água de Reuso",
    type: "Serviço",
    priority: "Média",
    keyword: "água de reuso",
    secondary: ["reuso de água industrial", "sistema de reuso de água", "economia de água"],
    title: "Água de Reuso: Sistemas e Economia | Vid'Água",
    description:
      "Sistemas de água de reuso para indústrias e condomínios: redução de consumo e retorno sobre investimento.",
    h1: "Água de Reuso",
    intro: "Reduzir consumo de água potável com segurança técnica e sanitária.",
    sections: [s("Aplicações do reuso"), s("Tecnologias empregadas"), s("Retorno sobre investimento")],
  },
  {
    slug: "por-que-vidagua",
    nav: "Por que Vid'Água",
    type: "Institucional",
    priority: "Alta",
    keyword: "empresa confiável tratamento água",
    secondary: [
      "melhor empresa análise de água",
      "empresa especializada poço artesiano",
      "vidagua análise água",
      "vidagua tratamento água",
      "vidagua confiável",
    ],
    title: "Por que escolher a Vid'Água | Empresa Confiável em Tratamento de Água",
    description:
      "Mais de 30 anos, equipe técnica própria e laudos em conformidade. Conheça diferenciais, certificações e depoimentos.",
    h1: "Por que escolher a Vid'Água",
    intro: "Apresentação genuína: história, equipe, certificações e experiências de clientes.",
    sections: [
      s("Nossa história"),
      s("Diferenciais objetivos"),
      s("Certificações e conformidade"),
      s("Equipe técnica"),
      s("Depoimentos de clientes"),
    ],
  },
  {
    slug: "servicos",
    nav: "Serviços",
    type: "Hub",
    priority: "Alta",
    keyword: "serviços de tratamento de água",
    secondary: ["serviços análise de água", "serviços poço artesiano", "empresa de serviços de água"],
    title: "Serviços de Tratamento e Análise de Água | Vid'Água",
    description:
      "Todos os serviços da Vid'Água: análise, tratamento, poço artesiano, monitoramento e manutenção de sistemas.",
    h1: "Nossos Serviços",
    intro: "Hub de navegação com todos os serviços prestados.",
    sections: [],
    related: [
      { label: "Análise de Água", to: "/analise-de-agua" },
      { label: "Tratamento de Água", to: "/tratamento-de-agua" },
      { label: "Legalização de Poço Artesiano", to: "/legalizacao-poco-artesiano" },
      { label: "Manutenção de Poço Artesiano", to: "/manutencao-poco-artesiano" },
      { label: "Monitoramento da Qualidade da Água", to: "/monitoramento-qualidade-agua" },
      { label: "Manutenção de Sistemas", to: "/manutencao-sistemas-tratamento" },
      { label: "Tratamento de Efluentes", to: "/tratamento-efluentes" },
      { label: "Água de Reuso", to: "/agua-de-reuso" },
      { label: "Tratamento para Empresas", to: "/tratamento-de-agua-industrial" },
    ],
  },
  {
    slug: "produtos",
    nav: "Produtos",
    type: "Hub",
    priority: "Alta",
    keyword: "produtos para tratamento de água",
    secondary: [
      "equipamentos tratamento água",
      "comprar produtos tratamento água",
      "fornecedor produtos água",
    ],
    title: "Produtos para Tratamento de Água | Vid'Água",
    description:
      "Bombas dosadoras, filtros, abrandadores, desmineralizadores e produtos químicos para tratamento de água.",
    h1: "Nossos Produtos",
    intro: "Linha de produtos com foco em qualidade e conformidade técnica.",
    sections: [],
    related: [
      { label: "Bomba Dosadora de Cloro", to: "/bomba-dosadora-cloro" },
      { label: "Bomba Dosadora de Água", to: "/bomba-dosadora-agua" },
      { label: "Filtros de Água", to: "/filtros-de-agua" },
      { label: "Abrandador de Água", to: "/abrandador-de-agua" },
      { label: "Desmineralizador de Água", to: "/desmineralizador-de-agua" },
      { label: "Água Destilada", to: "/agua-destilada" },
      { label: "Produtos Químicos", to: "/produtos-quimicos-agua" },
    ],
  },
  {
    slug: "blog",
    nav: "Blog",
    type: "Blog",
    priority: "Média-Alta",
    keyword: "blog qualidade da água",
    secondary: ["dicas tratamento de água", "problemas comuns na água", "artigos sobre água"],
    title: "Blog sobre Qualidade e Tratamento de Água | Vid'Água",
    description:
      "Artigos sobre qualidade da água, problemas comuns, legislação e manutenção de sistemas de tratamento.",
    h1: "Blog",
    intro: "Conteúdo técnico em linguagem acessível. Categorias: Problemas Comuns, Qualidade da Água, Legislação e Manutenção.",
    sections: [],
  },
  {
    slug: "sobre",
    nav: "Sobre",
    type: "Institucional",
    priority: "Alta",
    keyword: "sobre a Vid'Água",
    secondary: ["história vidagua", "empresa de água desde 1990", "equipe vidagua"],
    title: "Sobre a Vid'Água | Mais de 30 Anos em Tratamento de Água",
    description:
      "Conheça a Vid'Água: história, propósito, equipe técnica e atuação em análise e tratamento de água no Brasil.",
    h1: "Sobre a Vid'Água",
    intro: "Apresentação institucional, sem linguagem de propaganda.",
    sections: [s("Nossa história"), s("Propósito e valores"), s("Equipe e estrutura"), s("Atuação nacional")],
  },
  {
    slug: "contato",
    nav: "Contato",
    type: "Conversão",
    priority: "Alta",
    keyword: "contato Vid'Água",
    secondary: [
      "orçamento tratamento de água",
      "falar com especialista em água",
      "solicitar análise de água",
    ],
    title: "Contato e Orçamento | Vid'Água",
    description:
      "Fale com os especialistas da Vid'Água e solicite seu orçamento de análise ou tratamento de água.",
    h1: "Entre em Contato",
    intro: "Fale com nossos especialistas e solicite seu orçamento.",
    sections: [],
  },
];

export const PAGES_BY_SLUG: Record<string, PageDef> = Object.fromEntries(
  PAGES.map((p) => [p.slug, p]),
);

export const NAV = [
  { label: "Serviços", to: "/servicos" },
  { label: "Produtos", to: "/produtos" },
  { label: "Para Empresas", to: "/tratamento-de-agua-industrial" },
  { label: "Blog", to: "/blog" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
];

export function headFor(p: PageDef) {
  const url = p.slug ? `/${p.slug}` : "/";
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { name: "keywords", content: [p.keyword, ...p.secondary].join(", ") },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
