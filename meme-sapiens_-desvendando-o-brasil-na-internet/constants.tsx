import React from 'react';
import { CategoryWithDifficulties, Meme } from './types';
import { ControversyIcon, NewsIcon, MicrophoneIcon } from './components/icons';

 

export const CATEGORIES: CategoryWithDifficulties[] = [
    {
        id: 'polemicos',
        title: 'Posts Polêmicos',
        description: 'Identifique ironia, sarcasmo e a real intenção em posts de redes sociais.',
        icon: <ControversyIcon />,
        difficulties: {
            'Jovem Geração Z': {
                name: 'Jovem Geração Z',
                challenges: [
                    {
                        id: 1,
                        text: "Acabei de ver um carro estacionado em fila dupla bloqueando a rua inteira. Parabéns ao motorista pela *inteligência* e *consideração* com o próximo! 👏 #TrânsitoDeQualidade",
                        source: "Post de rede social fictício",
                        meme: { url: "https://i.imgflip.com/4/32wm37.jpg", alt: "Galvão Bueno", caption: "Que belo exemplo de cidadania, hein?" },
                        question: "Qual o verdadeiro sentimento do autor do post?",
                        options: ["Aprovação e admiração", "Indignação e sarcasmo", "Neutralidade", "Tristeza"],
                        correctAnswerIndex: 1,
                        explanation: "O uso de palavras como 'inteligência' em um contexto negativo é um exemplo claro de sarcasmo para expressar indignação."
                    },
                    {
                        id: 10,
                        text: "Minha amiga começou a usar calça skinny e a repartir o cabelo de lado... achei meio cringe, sabe?",
                        source: "Comentário em TikTok",
                        meme: { url: "https://i.imgflip.com/1plg5g.jpg", alt: "Aham, senta lá Cláudia", caption: "A Geração Z julgando..." },
                        question: "O que a palavra 'cringe' significa neste contexto?",
                        options: ["Algo moderno e legal", "Vergonha alheia ou cafona", "Um elogio à originalidade", "Algo perigoso"],
                        correctAnswerIndex: 1,
                        explanation: "'Cringe' é uma gíria popularizada pela Geração Z para descrever algo que causa vergonha alheia ou é considerado 'mico' ou cafona."
                    },
                    {
                        id: 11,
                        text: "O influencer postou 'trabalhe enquanto eles dormem' direto de uma praia em Cancún. A vida de coach é realmente muito inspiradora.",
                        source: "Tweet irônico",
                        meme: { url: "https://i.imgflip.com/1ur9b0.jpg", alt: "Namorado distraído", caption: "Eu olhando o lifestyle do influencer" },
                        question: "Qual a crítica implícita no post?",
                        options: ["O autor admira a dedicação do influencer.", "O autor acredita que o influencer não trabalha de verdade.", "O autor está criticando a ostentação e os conselhos vagos.", "O autor quer também ser um coach de sucesso."],
                        correctAnswerIndex: 2,
                        explanation: "A justaposição da frase motivacional com o cenário de luxo sugere uma crítica à superficialidade e à desconexão com a realidade da maioria dos trabalhadores."
                    },
                    {
                        id: 12,
                        text: "Fui na 'lanchonete gourmet' e paguei R$50 num pão com bife. Pelo menos o ketchup era 'artesanal'. Uma experiência gastronômica.",
                        source: "Story de Instagram",
                        meme: { url: "https://i.imgflip.com/1nfs92.jpg", alt: "Salt Bae", caption: "Temperando a conta..." },
                        question: "O autor do post ficou satisfeito com a 'lanchonete gourmet'?",
                        options: ["Sim, ele amou a exclusividade dos ingredientes.", "Não, ele achou que não valeu a pena e foi um exagero.", "Ficou em dúvida se a comida era boa ou não.", "Sim, ele valoriza experiências gastronômicas caras."],
                        correctAnswerIndex: 1,
                        explanation: "O tom é de deboche. A ênfase em 'gourmet' e 'artesanal' para itens comuns, junto com o preço alto, indica que o autor se sentiu lesado e achou a experiência pretensiosa."
                    },
                    {
                        id: 13,
                        text: "Meu celular tocou com funk no meio da biblioteca. Todo mundo olhou pra mim. Que ótimo jeito de fazer amigos e socializar.",
                        source: "Post em rede social",
                        meme: { url: "https://i.imgflip.com/2/26am.jpg", alt: "Elmo em chamas", caption: "Situação: sob controle." },
                        question: "O que o autor realmente sentiu com a situação?",
                        options: ["Felicidade por ser o centro das atenções.", "Orgulho do seu gosto musical.", "Vergonha e constrangimento.", "Indiferença com a opinião dos outros."],
                        correctAnswerIndex: 2,
                        explanation: "A frase 'Que ótimo jeito de fazer amigos' é puro sarcasmo. O contexto (biblioteca) e os olhares indicam que a situação foi extremamente constrangedora."
                    },
                    {
                        id: 14,
                        text: "Comprei um jogo no lançamento por R$300 e uma semana depois ele entrou em promoção com 50% de desconto. Adoro quando a indústria de games valoriza os fãs mais leais.",
                        source: "Fórum de games",
                        meme: { url: "https://i.imgflip.com/3q1h6x.jpg", alt: "Gato chorando", caption: "Minha carteira..." },
                        question: "O autor do post está feliz com a empresa do jogo?",
                        options: ["Sim, ele se sente valorizado.", "Ele está indiferente aos preços.", "Não, ele está sendo sarcástico e se sente enganado.", "Ele está feliz por outros poderem comprar o jogo mais barato."],
                        correctAnswerIndex: 2,
                        explanation: "A frase 'adoro quando a indústria valoriza os fãs' é uma ironia para criticar a prática de colocar jogos em promoção logo após o lançamento, fazendo com que os primeiros compradores paguem muito mais."
                    }
                ]
            },
            'Adulto Raiz': {
                name: 'Adulto Raiz',
                challenges: [
                     {
                        id: 2,
                        text: "Adorei a nova temporada da série. O roteiro é *tão original* que parece que já vi essa história em outros 5 filmes. E os furos na trama? Um toque de mestre para nos manter pensando.",
                        source: "Crítica de série online",
                        meme: { url: "https://i.imgflip.com/2/1bij.jpg", alt: "Nazaré Confusa", caption: "Calculando a originalidade..." },
                        question: "O que o autor realmente achou da nova temporada?",
                        options: ["Achou a série genial e complexa.", "Ficou confuso com a história.", "Detestou, achando-a clichê e mal escrita.", "Gostou, mas com algumas ressalvas."],
                        correctAnswerIndex: 2,
                        explanation: "A expressão 'tão original' é usada ironicamente para apontar que a série é clichê, criticando a má qualidade do roteiro."
                    },
                    {
                        id: 20,
                        text: "Recebi no zap: 'chá de boldo com limão cura todas as doenças, REPASSEM!'. Uma tia minha já está tomando. A medicina tradicional vai ficar obsoleta.",
                        source: "Grupo da Família",
                        meme: { url: "https://i.imgflip.com/5c7lwq.jpg", alt: "Vozes da minha cabeça", caption: "Fonte: confia." },
                        question: "Qual o tom do autor sobre a mensagem recebida?",
                        options: ["Ele acredita na informação e vai experimentar.", "Ele está preocupado e sendo irônico sobre a credulidade das pessoas.", "Ele acha que a medicina tradicional é ineficaz.", "Ele está fazendo publicidade do chá de boldo."],
                        correctAnswerIndex: 1,
                        explanation: "A frase 'A medicina tradicional vai ficar obsoleta' é uma ironia para criticar a disseminação de fake news sobre saúde, que podem ser perigosas."
                    },
                    {
                        id: 21,
                        text: "Saudades de quando música tinha letra e melodia. Fui a um show e era só 'grave batendo' e gente gritando. Uma experiência cultural riquíssima.",
                        source: "Post no Facebook",
                        meme: { url: "https://i.imgflip.com/1xd9o5.jpg", alt: "Chico Buarque pensativo", caption: "Analisando a poesia contemporânea." },
                        question: "Como o autor se sentiu em relação ao show?",
                        options: ["Ele se divertiu muito com a energia do público.", "Ele não gostou, criticando a qualidade musical de forma saudosista.", "Ele achou a experiência culturalmente válida.", "Ele está planejando ir a mais shows do mesmo estilo."],
                        correctAnswerIndex: 1,
                        explanation: "A expressão 'experiência cultural riquíssima' é um sarcasmo. O autor está usando um tom nostálgico ('saudades de quando...') para desqualificar o estilo musical moderno."
                    },
                    {
                        id: 22,
                        text: "Meu vizinho resolveu testar a furadeira nova às 7h da manhã de um domingo. Que pessoa empática e atenciosa com o sono alheio.",
                        source: "Desabafo em rede social",
                        meme: { url: "https://i.imgflip.com/1g8my4.jpg", alt: "Dois botões", caption: "Ligar pra polícia / Tentar dormir" },
                        question: "O que o autor realmente pensa sobre o vizinho?",
                        options: ["Que ele é um exemplo de bom vizinho.", "Que ele não tem consideração e é barulhento.", "Que ele tem direito de usar a furadeira quando quiser.", "Que ele deveria ter emprestado a furadeira."],
                        correctAnswerIndex: 1,
                        explanation: "Chamar o vizinho de 'empático e atencioso' é uma clara ironia. O autor está irritado com o barulho em um horário inapropriado."
                    },
                    {
                        id: 23,
                        text: "A empresa anunciou 'sinergia e otimização de recursos'. No dia seguinte, demitiram metade do meu departamento. Estou animado para os desafios dessa nova fase!",
                        source: "Post no LinkedIn (imaginário)",
                        meme: { url: "https://i.imgflip.com/1515w4.jpg", alt: "Cachorro em chamas", caption: "This is fine." },
                        question: "Qual o sentimento real do autor?",
                        options: ["Otimismo e empolgação.", "Gratidão pela oportunidade.", "Medo e sarcasmo sobre a situação da empresa.", "Confiança na liderança da empresa."],
                        correctAnswerIndex: 2,
                        explanation: "O jargão corporativo 'sinergia' frequentemente mascara demissões. A frase final 'estou animado' é um sarcasmo para expressar sua insegurança e descontentamento."
                    },
                    {
                        id: 24,
                        text: "Marquei um café com um amigo. Ele passou os 40 minutos da conversa olhando o celular e respondendo mensagens. A conexão humana hoje em dia é inspiradora.",
                        source: "Relato pessoal",
                        meme: { url: "https://i.kym-cdn.com/entries/icons/original/000/017/323/contemplative-reptile.jpg", alt: "Dinossauro pensativo", caption: "Refletindo sobre a sociedade." },
                        question: "O autor do post está elogiando a forma como as pessoas se conectam hoje?",
                        options: ["Sim, ele admira a capacidade multitarefa do amigo.", "Ele está criticando a falta de atenção e a superficialidade das interações.", "Ele não se importa com o uso de celulares.", "Ele acha que o amigo estava resolvendo algo importante."],
                        correctAnswerIndex: 1,
                        explanation: "A frase 'A conexão humana é inspiradora' é usada de forma irônica. O autor está lamentando como a tecnologia pode atrapalhar momentos de interação real."
                    }
                ]
            },
            'Expert da Internet': {
                name: 'Expert da Internet',
                challenges: [
                    {
                        id: 101,
                        text: "Agradeço imensamente pela reunião de hoje, que poderia ter sido resolvida com um único e-mail. Foi uma utilização *extremamente produtiva* do tempo de todos os envolvidos.",
                        source: "E-mail corporativo (imaginário)",
                        meme: { url: "https://i.imgflip.com/2/2i5c.jpg", alt: "Senhora, isso é um documento", caption: "Minha paciência é um documento..." },
                        question: "Qual o tom da mensagem, considerando o jargão corporativo?",
                        options: ["Gratidão sincera", "Crítica passivo-agressiva", "Comunicação neutra e formal", "Empolgação com a colaboração"],
                        correctAnswerIndex: 1,
                        explanation: "O uso de ênfase em 'extremamente produtiva' no contexto de uma reunião desnecessária é um clássico exemplo de comunicação passivo-agressiva no ambiente de trabalho."
                    },
                    {
                        id: 110,
                        text: "Político A: 'Precisamos investir mais em educação.' Político B: 'Então o senhor está dizendo que quer deixar nossas fronteiras desprotegidas e cortar o orçamento militar? Um absurdo!'",
                        source: "Debate político",
                        meme: { url: "https://i.imgflip.com/1u979c.jpg", alt: "Espantalho", caption: "Construindo um argumento fácil de atacar." },
                        question: "Qual falácia argumentativa o Político B utilizou?",
                        options: ["Ad Hominem (ataque ao oponente)", "Apelo à emoção", "Espantalho (criar uma versão distorcida do argumento)", "Falsa dicotomia"],
                        correctAnswerIndex: 2,
                        explanation: "O Político B criou um 'espantalho': ele distorceu o argumento original (investir em educação) transformando-o em algo indefensável (deixar o país desprotegido) para atacá-lo facilmente."
                    },
                    {
                        id: 111,
                        text: "Cidadão: 'A corrupção no governo atual é preocupante.' Comentarista: 'Mas e a corrupção que aconteceu no governo anterior? Por que ninguém fala disso?'",
                        source: "Caixa de comentários de portal",
                        meme: { url: "https://i.imgflip.com/2/204j.jpg", alt: "Homens-aranha se apontando", caption: "E você? E você?" },
                        question: "Qual técnica de desvio de foco o comentarista está usando?",
                        options: ["Negação plausível", "Whataboutism (E o...?)", "Redução ao absurdo", "Generalização apressada"],
                        correctAnswerIndex: 1,
                        explanation: "'Whataboutism' é uma falácia que tenta desviar a atenção de uma crítica apontando uma falha no acusador ou em outro grupo, sem de fato responder à questão original."
                    },
                    {
                        id: 112,
                        text: "Vi uma notícia sobre aquecimento global. Nos comentários, alguém disse: 'Bobagem. Aqui na minha cidade fez um frio danado ontem'.",
                        source: "Comentário em rede social",
                        meme: { url: "https://i.imgflip.com/2/9j23.jpg", alt: "Travolta confuso", caption: "Clima vs. Tempo" },
                        question: "O comentário invalida a tese do aquecimento global?",
                        options: ["Sim, pois prova que o planeta não está esquentando.", "Sim, pois usa uma evidência científica local.", "Não, pois confunde um evento meteorológico local (tempo) com uma tendência climática global (clima).", "Não, mas levanta uma dúvida pertinente."],
                        correctAnswerIndex: 2,
                        explanation: "Este é um erro comum de escala. 'Tempo' refere-se às condições atmosféricas de curto prazo em um local, enquanto 'clima' são os padrões de longo prazo. Um dia frio não invalida décadas de aumento da temperatura média global."
                    },
                    {
                        id: 113,
                        text: "Um artigo de opinião afirma: 'Ou privatizamos todas as estatais para alcançar a prosperidade, ou manteremos o país no atraso eterno.'",
                        source: "Artigo de jornal",
                        meme: { url: "https://i.imgflip.com/2/2276.jpg", alt: "Gato bravo", caption: "Só existem duas opções, e eu odeio as duas." },
                        question: "Qual falácia está sendo apresentada no argumento?",
                        options: ["Apelo à tradição", "Falso dilema ou falsa dicotomia", "Bola de neve", "Argumento da ignorância"],
                        correctAnswerIndex: 1,
                        explanation: "A falácia do 'falso dilema' apresenta apenas duas opções como as únicas possíveis, ignorando a existência de um leque de alternativas e soluções intermediárias."
                    },
                    {
                        id: 114,
                        text: "Título da matéria: 'Estudo SUECO CHOCANTE revela que ficar sentado por longos períodos pode ser prejudicial'. O estudo foi feito com 30 pessoas em uma única cidade.",
                        source: "Portal de 'bem-estar'",
                        meme: { url: "https://i.kym-cdn.com/photos/images/newsfeed/001/535/435/f29.jpg", alt: "Cara com quadro de conspiração", caption: "Conectando os pontos..." },
                        question: "Qual o principal problema na forma como a notícia apresenta o estudo?",
                        options: ["A Suécia não é um país relevante para estudos.", "O título exagera a relevância de um estudo com amostra muito pequena e limitada.", "Ficar sentado não é prejudicial.", "O estudo deveria ter sido feito no Brasil."],
                        correctAnswerIndex: 1,
                        explanation: "A notícia usa palavras como 'CHOCANTE' para dar um peso indevido a um estudo pequeno (baixa amostragem), que não permite uma generalização tão forte. Isso é uma forma de sensacionalismo."
                    }
                ]
            }
        }
    },
    {
        id: 'noticias',
        title: 'Notícias Quentes',
        description: 'Diferencie fatos de opiniões e analise a intenção por trás das manchetes.',
        icon: <NewsIcon />,
        difficulties: {
            'Jovem Geração Z': {
                name: 'Jovem Geração Z',
                challenges: [
                    {
                        id: 3,
                        text: "O índice de desemprego no país caiu 0.5% no último trimestre, segundo dados oficiais do governo. Para o analista João Silva, essa melhora, ainda que tímida, é um péssimo sinal, pois pode pressionar a inflação.",
                        source: "Portal de Notícias",
                        meme: { url: "https://i.imgflip.com/2/2i5c.jpg", alt: "Senhora, isso é um documento", caption: "Mas e o fato, senhora?" },
                        question: "Qual trecho do texto apresenta um FATO?",
                        options: ["Essa melhora é um péssimo sinal.", "O índice de desemprego caiu 0.5%.", "A melhora pode pressionar a inflação.", "A análise de João Silva está correta."],
                        correctAnswerIndex: 1,
                        explanation: "A queda de 0.5% é um dado verificável de uma fonte oficial, o que o caracteriza como um fato. O resto são opiniões ou previsões."
                    },
                    {
                        id: 30,
                        text: "A cantora Anitta alcançou o primeiro lugar global no Spotify com sua nova música. Milhões de fãs comemoraram o feito, que consideram um marco histórico para a música brasileira.",
                        source: "Portal de Celebridades",
                        meme: { url: "https://i.imgflip.com/32z312.jpg", alt: "Stonks", caption: "Brazil to the world!" },
                        question: "O que é uma OPINIÃO na notícia?",
                        options: ["Anitta alcançou o primeiro lugar global.", "A música é de Anitta.", "O feito é um marco histórico para a música brasileira.", "Milhões de fãs comemoraram."],
                        correctAnswerIndex: 2,
                        explanation: "Chamar o feito de 'marco histórico' é uma interpretação, uma opinião sobre sua importância. O primeiro lugar no Spotify é um fato verificável."
                    },
                    {
                        id: 31,
                        text: "O streamer Casimiro arrecadou mais de R$ 1 milhão para a caridade durante uma live de 24 horas. Para um seguidor, 'ele é a pessoa mais generosa do Brasil'.",
                        source: "Notícia sobre games",
                        meme: { url: "https://i.ytimg.com/vi/Bw_z-L31_gY/maxresdefault.jpg", alt: "Casimiro", caption: "Meteu essa?" },
                        question: "Qual das frases é um FATO?",
                        options: ["Ele é a pessoa mais generosa do Brasil.", "A live durou 24 horas.", "A live foi a melhor de todos os tempos.", "Todos os seguidores o admiram."],
                        correctAnswerIndex: 1,
                        explanation: "A duração da live (24 horas) e o valor arrecadado são dados factuais. A afirmação de que ele é 'a pessoa mais generosa' é uma opinião."
                    },
                    {
                        id: 32,
                        text: "O novo iPhone foi lançado com uma câmera de 48 megapixels. Muitos usuários reclamaram que o preço, acima de R$ 10.000, é um absurdo completo.",
                        source: "Blog de Tecnologia",
                        meme: { url: "https://i.imgflip.com/4/2xsc.jpg", alt: "Success Kid", caption: "Consegui comprar... o carregador." },
                        question: "Qual informação é uma OPINIÃO?",
                        options: ["A câmera tem 48 megapixels.", "O preço do celular é acima de R$ 10.000.", "O preço é um absurdo completo.", "O celular é um novo iPhone."],
                        correctAnswerIndex: 2,
                        explanation: "Qualificar o preço como 'um absurdo' é uma opinião, um julgamento de valor. O valor em si e a especificação da câmera são fatos."
                    },
                    {
                        id: 33,
                        text: "A final do campeonato de 'League of Legends' teve uma audiência de 3 milhões de espectadores simultâneos. Foi o jogo mais emocionante da década, segundo os narradores.",
                        source: "Cobertura de E-sports",
                        meme: { url: "https://i.imgflip.com/2/4t1t.jpg", alt: "Vince McMahon reaction", caption: "A emoção do narrador." },
                        question: "O que pode ser considerado um FATO?",
                        options: ["Foi o jogo mais emocionante da década.", "A audiência foi de 3 milhões de espectadores.", "O time vencedor é o melhor do mundo.", "Os narradores são imparciais."],
                        correctAnswerIndex: 1,
                        explanation: "O número de espectadores é um dado mensurável e, portanto, um fato. A qualificação do jogo como 'o mais emocionante' é uma opinião."
                    },
                    {
                        id: 34,
                        text: "Uma pesquisa indicou que 70% dos jovens da Geração Z preferem se comunicar por texto do que por ligação. A psicóloga Maria crê que isso mostra uma 'assustadora' dificuldade de interação social.",
                        source: "Revista de Comportamento",
                        meme: { url: "https://i.imgflip.com/5p6f4j.jpg", alt: "Trust me bro", caption: "Fonte: a psicóloga." },
                        question: "Qual parte do texto é uma OPINIÃO?",
                        options: ["70% dos jovens preferem se comunicar por texto.", "A pesquisa foi com a Geração Z.", "A preferência por texto é 'assustadora'.", "A psicóloga se chama Maria."],
                        correctAnswerIndex: 2,
                        explanation: "O dado de 70% é um fato apurado pela pesquisa. A interpretação de que isso é 'assustador' é a opinião da psicóloga."
                    }
                ]
            },
            'Adulto Raiz': {
                 name: 'Adulto Raiz',
                 challenges: [
                    {
                        id: 4,
                        text: "A prefeitura anunciou que a nova ciclovia, com 5km de extensão, será inaugurada no próximo mês. Moradores celebram a iniciativa, que consideram um avanço para a mobilidade urbana. No entanto, comerciantes locais expressaram preocupação com a possível redução de vagas de estacionamento.",
                        source: "Jornal Local",
                        meme: { url: "https://i.imgflip.com/2/2zk_vini.jpg", alt: "Homem dividido", caption: "Bicicleta ou carro?" },
                        question: "Qual das seguintes afirmações é uma OPINIÃO e não um fato?",
                        options: ["A nova ciclovia terá 5km de extensão.", "A ciclovia será inaugurada no próximo mês.", "A iniciativa é um avanço para a mobilidade urbana.", "Comerciantes estão preocupados com as vagas."],
                        correctAnswerIndex: 2,
                        explanation: "Chamar a iniciativa de 'avanço' é uma avaliação, uma interpretação positiva. Os outros pontos são informações factuais e verificáveis."
                    },
                    {
                        id: 40,
                        text: "A inflação oficial do último mês foi de 0,8%, segundo o IBGE. Para o economista-chefe do Banco X, 'o Brasil está no rumo certo para a estabilidade', uma visão otimista.",
                        source: "Caderno de Economia",
                        meme: { url: "https://i.ytimg.com/vi/d-2tPy_G_Yw/hqdefault.jpg", alt: "Bettina", caption: "1 milhão e 42 mil de patrimônio acumulado." },
                        question: "Qual trecho é um FATO?",
                        options: ["A visão do economista é otimista.", "O Brasil está no rumo certo para a estabilidade.", "A inflação de 0,8% é baixa.", "A inflação oficial foi de 0,8% segundo o IBGE."],
                        correctAnswerIndex: 3,
                        explanation: "O dado divulgado pelo IBGE (0,8%) é um fato. A interpretação de que o país está 'no rumo certo' é a opinião do economista."
                    },
                    {
                        id: 41,
                        text: "O Congresso aprovou a nova lei que altera as regras da aposentadoria, elevando a idade mínima para 65 anos para homens. O governo comemorou, chamando de 'reforma necessária para o futuro do país'.",
                        source: "Noticiário Político",
                        meme: { url: "https://i.imgflip.com/1otk96.jpg", alt: "Conspiracy Keanu", caption: "Necessária para quem?" },
                        question: "O que é uma OPINIÃO na notícia?",
                        options: ["A lei altera as regras da aposentadoria.", "A idade mínima para homens é de 65 anos.", "O Congresso aprovou a lei.", "A reforma era 'necessária para o futuro'."],
                        correctAnswerIndex: 3,
                        explanation: "A qualificação da reforma como 'necessária' é uma opinião do governo. Os outros pontos são fatos sobre a nova legislação."
                    },
                    {
                        id: 42,
                        text: "Um estudo da Universidade de São Paulo (USP) mostrou que o consumo de alimentos ultraprocessados cresceu 25% na última década. Nutricionistas alertam que essa é uma 'tendência perigosa' para a saúde pública.",
                        source: "Reportagem sobre Saúde",
                        meme: { url: "https://i.imgflip.com/2/2276.jpg", alt: "Grumpy Cat", caption: "Na minha época a gente comia comida." },
                        question: "Qual das alternativas contém apenas FATOS?",
                        options: ["O consumo cresceu 25%; essa é uma tendência perigosa.", "O estudo é da USP; o consumo de ultraprocessados cresceu 25%.", "Nutricionistas estão certos em se preocupar.", "A saúde pública vai piorar por causa disso."],
                        correctAnswerIndex: 1,
                        explanation: "A origem do estudo (USP) e o dado percentual (25%) são fatos. A classificação da tendência como 'perigosa' é uma opinião/alerta dos especialistas."
                    },
                    {
                        id: 43,
                        text: "A empresa de tecnologia 'Beta' demitiu 500 funcionários, alegando necessidade de 'reestruturação interna'. O sindicato da categoria, no entanto, classificou as demissões como 'um ato desumano e covarde'.",
                        source: "Notícia de Negócios",
                        meme: { url: "https://i.imgflip.com/4/2i5c.jpg", alt: "Senhora", caption: "Isso é uma reestruturação ou uma demissão em massa?" },
                        question: "Qual é a OPINIÃO do sindicato sobre o fato ocorrido?",
                        options: ["A empresa precisava de reestruturação interna.", "Foram demitidos 500 funcionários.", "As demissões foram um ato desumano e covarde.", "A empresa se chama 'Beta'."],
                        correctAnswerIndex: 2,
                        explanation: "O número de demitidos é um fato. A justificativa da empresa é a sua versão do fato. A classificação do ato como 'desumano e covarde' é a opinião do sindicato."
                    },
                    {
                        id: 44,
                        text: "A seleção brasileira de futebol venceu o jogo por 3 a 0. O técnico declarou na entrevista: 'Foi a melhor partida da equipe sob meu comando', mostrando grande satisfação.",
                        source: "Cobertura Esportiva",
                        meme: { url: "https://i.imgflip.com/32wm37.jpg", alt: "Galvão Bueno", caption: "Haja coração, amigo!" },
                        question: "O que é um FATO na reportagem?",
                        options: ["O time jogou de forma brilhante.", "Foi a melhor partida da equipe sob o comando do técnico.", "A satisfação do técnico era grande.", "O placar do jogo foi 3 a 0."],
                        correctAnswerIndex: 3,
                        explanation: "O placar de 3 a 0 é um resultado objetivo e verificável, logo, um fato. A opinião do técnico sobre ter sido a 'melhor partida' é uma avaliação subjetiva dele."
                    }
                ]
            },
             'Expert da Internet': {
                 name: 'Expert da Internet',
                 challenges: [
                    {
                        id: 102,
                        text: "A manchete de um portal diz: 'Astro de Hollywood APARECE com visual CHOCANTE e PREOCUPA fãs'. No corpo da matéria, é revelado que o ator estava caracterizado para um novo papel no cinema.",
                        source: "Portal de Celebridades",
                        meme: { url: "https://i.imgflip.com/3/b1B_JD.jpg", alt: "Clique, é uma cilada", caption: "Caí no bait de novo" },
                        question: "Qual a principal técnica utilizada na manchete para atrair cliques?",
                        options: ["Reportagem investigativa", "Uso de dados estatísticos", "Clickbait, com uso de adjetivos sensacionalistas", "Citação direta de uma fonte confiável"],
                        correctAnswerIndex: 2,
                        explanation: "A manchete usa palavras como 'CHOCANTE' e 'PREOCUPA' para gerar alarme e curiosidade, omitindo o contexto (a caracterização para um filme), o que é uma tática clássica de clickbait."
                    },
                    {
                        id: 120,
                        text: "Notícia afirma: 'Segundo FONTES PRÓXIMAS ao governo, uma nova medida econômica será anunciada em breve'. A matéria não especifica quem são as fontes.",
                        source: "Coluna de política",
                        meme: { url: "https://i.imgflip.com/5p6f4j.jpg", alt: "Trust me bro", caption: "Fonte: Arial 12." },
                        question: "O uso de 'fontes anônimas' nesta notícia...",
                        options: ["Aumenta a credibilidade, pois protege os envolvidos.", "É irrelevante para a qualidade da informação.", "Reduz a credibilidade, pois impede a verificação e pode mascarar boatos.", "É uma prova de que o jornalista tem bons contatos."],
                        correctAnswerIndex: 2,
                        explanation: "Embora o jornalismo use fontes anônimas, a dependência excessiva delas sem qualquer outra forma de verificação fragiliza a notícia, tornando-a difícil de ser comprovada e abrindo margem para especulação."
                    },
                    {
                        id: 121,
                        text: "Uma reportagem sobre criminalidade foca exclusivamente em um bairro nobre, entrevistando apenas moradores assustados e mostrando imagens de câmeras de segurança. O título é: 'A CIDADE ESTÁ FORA DE CONTROLE'.",
                        source: "Programa de TV sensacionalista",
                        meme: { url: "https://i.imgflip.com/2/3l4y.jpg", alt: "Caramelo", caption: "Generalizando aqui de boa." },
                        question: "Qual problema jornalístico essa abordagem representa?",
                        options: ["Falta de foco, deveria cobrir apenas um crime.", "Generalização apressada, usando um caso específico para representar o todo.", "Excesso de dados técnicos.", "Imparcialidade, pois ouviu os moradores."],
                        correctAnswerIndex: 1,
                        explanation: "A reportagem comete uma generalização apressada, pegando um recorte específico (um bairro) e extrapolando a situação para a cidade inteira, o que pode criar uma percepção distorcida da realidade."
                    },
                    {
                        id: 122,
                        text: "Um artigo de opinião usa a seguinte frase: 'Qualquer cidadão de bem e com o mínimo de inteligência concorda que a minha proposta é a única solução'.",
                        source: "Blog político",
                        meme: { url: "https://i.kym-cdn.com/entries/icons/original/000/028/692/cat.jpg", alt: "Gato educado", caption: "Com licença, discordo." },
                        question: "Qual o objetivo do autor ao usar a expressão 'qualquer cidadão de bem'?",
                        options: ["Convidar para um debate democrático.", "Envenenar o poço: criar um estigma para quem discorda dele.", "Apresentar dados que comprovem sua tese.", "Descrever seu público-alvo com precisão."],
                        correctAnswerIndex: 1,
                        explanation: "Essa é uma falácia chamada 'envenenar o poço'. O autor tenta desqualificar qualquer um que discorde dele de antemão, rotulando-os como 'não cidadãos de bem' ou 'não inteligentes'."
                    },
                    {
                        id: 123,
                        text: "A matéria noticia: 'A nova tecnologia promete revolucionar o mercado'. No texto, todas as fontes entrevistadas são da empresa que vende a tecnologia ou consultores pagos por ela.",
                        source: "Caderno de 'Inovação'",
                        meme: { url: "https://i.imgflip.com/4/3l4y.jpg", alt: "Cão Caramelo", caption: "Parece legítimo." },
                        question: "Qual o principal viés desta matéria?",
                        options: ["Viés de confirmação", "Viés de negatividade", "Falta de pluralidade de fontes e potencial conflito de interesses.", "Excesso de imparcialidade."],
                        correctAnswerIndex: 2,
                        explanation: "Uma reportagem de qualidade deve ouvir diferentes lados. Ao usar apenas fontes com interesse direto no sucesso do produto, a matéria se torna parcial e se assemelha a um informe publicitário."
                    },
                    {
                        id: 124,
                        text: "Manchete: 'CIENTISTAS DESCOBREM A CURA DO CÂNCER'. No texto, a notícia informa que um estudo *preliminar em ratos* mostrou resultados promissores com um novo composto.",
                        source: "Portal de notícias",
                        meme: { url: "https://i.imgflip.com/3/b1B_JD.jpg", alt: "Clique, é uma cilada", caption: "A cura está a apenas um clique... de distância." },
                        question: "Qual é a distorção cometida pela manchete?",
                        options: ["Ela é precisa e reflete o conteúdo da matéria.", "Ela mente sobre o estudo ter sido feito por cientistas.", "Ela simplifica excessivamente e cria uma expectativa falsa sobre um resultado muito inicial.", "Ela deveria ter especificado a universidade dos cientistas."],
                        correctAnswerIndex: 2,
                        explanation: "A manchete é sensacionalista. Resultados promissores em roedores estão a anos, e muitas etapas de testes, de se tornarem uma 'cura' para humanos. A manchete distorce a relevância do achado científico."
                    }
                ]
            }
        }
    },
    {
        id: 'letras',
        title: 'Letras que Chocam',
        description: 'Leia nas entrelinhas e descubra o que as músicas querem dizer.',
        icon: <MicrophoneIcon />,
        difficulties: {
            'Jovem Geração Z': {
                name: 'Jovem Geração Z',
                challenges: [
                    {
                        id: 501,
                        text: "Trecho: 'Meu pedaço de pecado, meu quebra-cabeça de letras embaralhadas' (fictício). O compositor quer dizer...",
                        source: 'Letra de música (fictícia)',
                        meme: { url: 'https://i.imgflip.com/2/1bij.jpg', alt: 'Nazaré confusa', caption: 'Decifrando a metáfora' },
                        question: 'Qual interpretação está mais alinhada ao trecho?',
                        options: ['Fala de matemática', 'Metáfora para um amor difícil de entender', 'Crítica à gramática', 'Um brinquedo infantil'],
                        correctAnswerIndex: 1,
                        explanation: "A metáfora do 'quebra-cabeça' indica algo complexo de montar/entender, sugerindo um relacionamento enigmático."
                    },
                    {
                        id: 502,
                        text: "Trecho: 'Ela posta story e some, me deixa no vácuo e volta em neon' (fictício).",
                        source: 'Hit pop (fictício)',
                        meme: { url: 'https://i.imgflip.com/2/98gn.jpg', alt: 'Joel Santana', caption: 'Tradução simultânea do pop' },
                        question: 'O que significa a imagem de “voltar em neon”?',
                        options: ['Ela vira um outdoor', 'Ela retorna chamando muita atenção', 'Ela some de vez', 'É sobre luzes de Natal'],
                        correctAnswerIndex: 1,
                        explanation: '“Neon” remete a brilho e destaque; é uma hipérbole para voltar de forma impactante e chamativa.'
                    }
                ]
            },
            'Adulto Raiz': {
                name: 'Adulto Raiz',
                challenges: [
                    {
                        id: 503,
                        text: "Trecho: 'E o tempo, rei, sempre com suas coroas invisíveis' (fictício).",
                        source: 'MPB (fictício)',
                        meme: { url: 'https://i.imgflip.com/2/2276.jpg', alt: 'Grumpy Cat', caption: 'Majestade do tempo' },
                        question: 'Qual figura de linguagem predomina?',
                        options: ['Metáfora', 'Onomatopeia', 'Aliteração', 'Eufemismo'],
                        correctAnswerIndex: 0,
                        explanation: "Chamar o tempo de 'rei' é uma metáfora que atribui autoridade e domínio a um conceito abstrato." 
                    },
                    {
                        id: 504,
                        text: "Trecho: 'No rádio, uma saudade antiga dançando na sala' (fictício).",
                        source: 'Canção romântica (fictícia)',
                        meme: { url: 'https://i.imgflip.com/2/204j.jpg', alt: 'Homens-aranha', caption: 'Saudade em pessoa' },
                        question: 'O que significa “saudade dançando na sala”?',
                        options: ['Uma pessoa chamada Saudade', 'Personificação da sensação de saudade ocupando o ambiente', 'Um estilo musical', 'Uma dança tradicional'],
                        correctAnswerIndex: 1,
                        explanation: 'Atribui ação humana a um sentimento (personificação), sugerindo que a saudade preenche o espaço emocional.'
                    }
                ]
            },
            'Expert da Internet': {
                name: 'Expert da Internet',
                challenges: [
                    {
                        id: 505,
                        text: "Trecho: 'Somos algoritmo, deslizando entre rimas e notificações' (fictício).",
                        source: 'Rap contemporâneo (fictício)',
                        meme: { url: 'https://i.imgflip.com/3/b1B_JD.jpg', alt: 'Clique cilada', caption: 'Rimas e push' },
                        question: 'Qual crítica social aparece no verso?',
                        options: ['Exaltação do consumo', 'Dependência de plataformas e métricas', 'Rejeição à tecnologia', 'Nostalgia da era analógica'],
                        correctAnswerIndex: 1,
                        explanation: 'Evoca a vida mediada por algoritmos e o deslocamento das relações em função de notificações e métricas.'
                    },
                    {
                        id: 506,
                        text: "Trecho: 'Entre versos virais, a verdade dança mascarada' (fictício).",
                        source: 'Indie eletrônico (fictício)',
                        meme: { url: 'https://i.imgflip.com/2/3l4y.jpg', alt: 'Caramelo', caption: 'A verdade mascarada' },
                        question: 'Que ideia está sugerida?',
                        options: ['As músicas sempre trazem fatos', 'Viralização pode distorcer sentidos', 'Máscaras são tema de carnaval', 'A verdade é literal'],
                        correctAnswerIndex: 1,
                        explanation: 'Indica que a viralização e a estética podem encobrir sentidos, exigindo leitura crítica do conteúdo.'
                    }
                ]
            }
        }
    }
];

export const LOADING_MEMES: { meme: Meme; text: string }[] = [
    { meme: { url: "https://i.imgflip.com/2/3l4y.jpg", alt: "Cão Caramelo" }, text: "Carregando a inteligência... calma lá, calabreso!" },
    { meme: { url: "https://i.imgflip.com/2/1bij.jpg", alt: "Nazaré Confusa" }, text: "Processando memes... aguenta coração!" },
    { meme: { url: "https://i.imgflip.com/2/98gn.jpg", alt: "Joel Santana" }, text: "You have to be patient... O conhecimento is coming!" }
];