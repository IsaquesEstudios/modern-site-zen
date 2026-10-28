import torneiraSrc from "@/assets/agua-dura-torneira.jpg";
const torneira = { url: torneiraSrc };
import ferroHero from "@/assets/ferro-agua-amarela.jpg";
import turvaLimpa from "@/assets/agua-turva-vs-limpa.jpg";
import contInvisivel from "@/assets/contaminacao-invisivel.jpg";
import laudoImage from "@/assets/qualidade-agua-laudo.jpg";

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
    image: ferroHero,
    alt: "Água amarelada por ferro e manganês saindo da torneira",
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
    title: "Qual a qualidade da água potável segundo a ANVISA e Portaria 888?",
    body: "RDC 275 da ANVISA e Portaria GM/MS 888: o que a lei exige de empresas, condomínios e quais parâmetros aprovam a água potável.",
    to: "/qualidade-agua-anvisa",
    image: laudoImage,
    alt: "Copo de amostra de água ao lado de laudo técnico e lupa em bancada de laboratório",
  },
] as const;
