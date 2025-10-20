import axios from "axios";

// ⚙️ Configuração da API da OpenAI
// Certifique-se de ter um arquivo `.env` na raiz do projeto com:
// VITE_OPENAI_API_KEY=sua_chave_aqui

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const gerarDieta = async (dadosUsuario) => {
  try {
    // Cria o prompt baseado em todos os dados enviados pela página
    const prompt = `
Você é um nutricionista profissional. 
Com base nas informações abaixo, monte uma dieta detalhada e prática — mas **não repita essas informações** no texto final.

Dados do usuário:
- Peso: ${dadosUsuario.weight} kg
- Altura: ${dadosUsuario.height} cm
- Idade: ${dadosUsuario.age} anos
- Sexo: ${dadosUsuario.gender}
- Objetivo: ${dadosUsuario.goal}
- Nível de atividade física: ${dadosUsuario.activityLevel}
- Quantidade de refeições diárias: ${dadosUsuario.meals}
- Restrições alimentares: ${dadosUsuario.restrictions}
- Tipo de treino: ${dadosUsuario.trainingType}
- Suplementos utilizados: ${dadosUsuario.supplements}
- Alimentos disponíveis ou preferidos: ${dadosUsuario.foods}
- TMB: ${dadosUsuario.tmbResult.toFixed(0)} kcal
- Percentual de gordura: ${dadosUsuario.percentualGordura.toFixed(2)}%

🎯 Objetivo:
Gerar uma dieta personalizada para ${dadosUsuario.goal}, adaptada ao estilo de treino e nível de atividade.

📋 Regras para o resultado:
1. Monte a dieta completa para **5 dias diferentes**.  
2. Cada dia deve conter as seguintes refeições:
   - Café da manhã  
   - Lanche da manhã  
   - Almoço  
   - Lanche da tarde  
   - Jantar  
   - Ceia  
3. Liste apenas **alimentos, quantidades (gramas ou medidas caseiras)** e **calorias por refeição**.  
4. Inclua suplementos entre as refeições, se forem relevantes.  
5. **Não exiba os dados pessoais do usuário**.  
6. **Não explique nada.** Retorne apenas o plano alimentar, bem formatado e dividido por dias.

Retorne o resultado como texto organizado.
`;

    // Faz a chamada à API da OpenAI
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4o-mini", // modelo leve, rápido e bom para dietas
        messages: [
          { role: "system", content: "Você é um nutricionista especialista em planos alimentares personalizados." },
          { role: "user", content: prompt },
        ],
        temperature: 0.8,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // Retorna o texto gerado pela IA
    const textoGerado =
      response.data.choices?.[0]?.message?.content?.trim() ||
      "Não foi possível gerar a dieta. Tente novamente.";

    return textoGerado;
  } catch (error) {
    console.error("❌ Erro ao gerar a dieta:", error.response?.data || error.message);

    // Tratamento de erros comuns
    if (error.response?.status === 401) {
      return "Erro: chave da OpenAI inválida ou ausente. Verifique seu .env.";
    } else if (error.message?.includes("CORS")) {
      return "Erro de CORS: o navegador bloqueou a requisição. (Isso é normal sem backend)";
    } else if (error.response?.status === 429) {
      return "Muitas requisições — aguarde alguns segundos e tente novamente.";
    }

    return "Erro inesperado ao gerar sua dieta. Tente novamente.";
  }
};
