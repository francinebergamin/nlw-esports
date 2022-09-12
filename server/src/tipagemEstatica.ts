// EXEMPLO DE TIPAGEM ESTÁTICA

// Aqui definimos exatamente os campos nos quais vamos trabalhar com
interface Ad{
  id: string;
  name: string;
  createdAt: Date;
}

// Calculo da função
function calculaHaQuantoTempoOAnuncioFoiPublicado(ad: Ad){
  // calculo há quantos dias foi postado
}

// Aqui usamos os campos como queremos
calculaHaQuantoTempoOAnuncioFoiPublicado({
  id: '1',
  name: 'Ad 01',
  createdAt: new Date()
})