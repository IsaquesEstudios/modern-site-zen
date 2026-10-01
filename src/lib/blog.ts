import torneira from "@/assets/agua-dura-torneira.jpg.asset.json";
import filtros from "@/assets/filtros-vidagua.png.asset.json";
import poco from "@/assets/poco-artesiano.jpg.asset.json";
import tratamento from "@/assets/tratamento-de-agua.jpg.asset.json";
import turvaLimpa from "@/assets/agua-turva-vs-limpa.jpg";
import contInvisivel from "@/assets/contaminacao-invisivel.jpg";

export const BLOG_POSTS = [
  {
    cat: "Problemas Comuns",
    title: "Água dura: por que o sabão não faz espuma e o chuveiro entope",
    body: "Como o excesso de cálcio e magnésio incrusta tubulações, danifica aquecedores e o que resolve o problema de forma definitiva.",
    to: "/agua-dura",
    image: torneira.url,
    alt: "Torneira com manchas de calcário causadas pela água dura",
  },
  {
    cat: "Problemas Comuns",
    title: "Manchas amareladas na roupa e na louça: ferro e manganês na água",
    body: "Os sinais que identificam a presença de ferro e manganês e o tratamento por oxidação e filtração indicado para cada faixa de concentração.",
    to: "/agua-com-ferro-manganes",
    image: filtros.url,
    alt: "Filtros de tratamento de água para remoção de ferro e manganês",
  },
  {
    cat: "Qualidade da Água",
    title: "Água turva, com cheiro ou gosto de cloro: o que está acontecendo",
    body: "Turbidez, odor e sabor alterados quase sempre indicam matéria orgânica ou excesso de cloro. Entenda a causa antes de trocar o filtro.",
    to: "/agua-turva-cheiro-cloro",
    image: turvaLimpa,
    alt: "Copo de água turva ao lado de copo de água limpa",
  },
  {
    cat: "Qualidade da Água",
    title: "Contaminação biológica e química: o risco que não se vê",
    body: "Coliformes, bactérias e contaminantes químicos não mudam a aparência da água. Só a análise laboratorial revela o problema.",
    to: "/contaminacao-agua",
    image: contInvisivel,
    alt: "Água cristalina com bactérias e compostos químicos em destaque",
  },
  {
    cat: "Legislação",
    title: "Monitoramento de poço artesiano: o que a Covisa exige",
    body: "Quais análises e laudos a Vigilância Sanitária pede para poços já legalizados e com que frequência.",
    to: "/servicos/monitoramento-poco-artesiano",
    image: poco.url,
    alt: "Cabeçote de poço artesiano",
  },
  {
    cat: "Manutenção",
    title: "Com que frequência manter o sistema de tratamento de água",
    body: "Prazos de troca de mídias filtrantes, calibração de dosadoras e periodicidade das análises em uso residencial, comercial e industrial.",
    to: "/servicos/manutencao-sistemas-tratamento",
    image: tratamento.url,
    alt: "Tanques de tratamento de água com tubulações",
  },
] as const;
