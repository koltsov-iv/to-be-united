const pr: typeof import('./en').default = {
  donate: "Doar",
  share: "Compartilhar",
  sum: "Valor, UAH",
  wish_you: "Desejo-lhe",
  wish_you_placeholder: "Boa sorte!",
  yours: "Seu",
  yours_placeholder: "Seu ma",
  form_sum_require_err: "É necessário informar um valor.",
  form_contact_require_err: "Você precisa preencher este campo ou selecionar Anônimo.",
  form_email_err: "É necessário preencher um e-mail no formato exemplo@dominio.com",
  anonymous: "Anônimo",
  no_communication: "Não desejo receber notícias sobre esta arrecadação",
  not_public_name: "Não exibir meu nome publicamente na arrecadação",
  subscription: "Sim, quero receber notícias sobre como o projeto ajuda as pessoas. Possibilidade de cancelamento a qualquer momento",
  participation: "Estou feliz em participar da arrecadação a partir desta fonte",
  your_donation: "Sua doação:",
  fundraising_page: {
    title: "Drone de Aniversário para Dnipro-1",
    published_at: "Publicado em {{date}}",
    status_badge_open: "Em andamento",
    status_badge_closed: "Encerrado",
    media_subtitle: "Na foto, estou comprando um drone para Dnipro-1 para o meu aniversário no ano passado.",
    body_description: `
    <div>
        <p>Acabei de ter uma conversa com meus amigos; eles estão atualmente posicionados na frente de Limansk
        e ativamente envolvidos em operações de combate. Eles estão passando por um momento difícil e precisam de ajuda,
        contando com o nosso apoio.</p>
      </div>

      <div class="font-bold mt-4">Antecedentes:</div>
      <div class="mt-2">
        No meu último aniversário, comprei um drone Mavic-3, e meus amigos ficaram muito animados com ele.
        O drone funcionou excepcionalmente bem, mas infelizmente, ele foi derrubado.
      </div>

      <div class="font-bold mt-4">Relevância:</div>

      <div class="italic mt-2">Por que Dnipro-1?</div>
      <div class="ml-2">- Tenho amigos em várias unidades nas frentes de Donetsk, e após falar com todos eles,
      ficou claro que o Dnipro-1 precisa de apoio urgente.</div>

      <div class="italic mt-2">Por que um Drone?</div>
      <div class="ml-2">
        - O pedido mais urgente foi para drones, e tenho experiência em sua aquisição e entrega.
        No entanto, eles também precisam de estações de energia Ecoflow.
      </div>

      <div class="italic mt-2">Por que estou fazendo isso de forma independente, e não através de uma fundação?</div>
      <ul class="ml-2">
        <li> - Quero preservar os recursos dos voluntários; o processamento de cada pedido consome seu valioso tempo.</li>
        <li> - Quero economizar recursos dos doadores; comprar os itens diretamente é mais econômico.
        Eu os compro offline na Europa e utilizo o tax-free na fronteira, permitindo que o dinheiro economizado seja
        usado para a próxima doação.</li>
        <li> - Quero estabelecer uma comunicação efetiva com os participantes envolvidos neste projeto.
        <a href="https://www.linkedin.com/in/koltsov-iv/recent-activity/all/">(Sobre o projeto)</a></li>
      </ul>
      <div class="flex justify-start space-x-3 mt-4">
      <span>Mídia da unidade:</span>
      <a href="https://t.me/d1air" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/telegram.svg" alt="Canal do Telegram"></a>
      <a href="https://instagram.com/podvorchanskiy" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/instagram.svg" alt="Comandante"></a>
      </div>
`,
    updates: "Atualizações",
    comments: "Desejos",
    comments_subheader: "Por favor, faça uma doação para compartilhar seus desejos.",
    read_more: "Ler mais",
    comments_show: "Mostrar mais",
  },
  action_block: {
    raised_goal: "arrecadados de {{goal}}",
    donations: "doaçãos",
    days_left: "Restam <b>{{days_left}}</b> dias de {{days_all}} dias",
    recent_donation: "Doação recente",
    top_donation: "Maior doação",
    first_donation: "Primeira doação",
    share_link: "Share link",
    copy_link: "Copy link",
    close: "Close",
  },
  updates: {
    "1": `<p>No momento, precisamos arrecadar fundos para o drone Mavic-3 até o final do verão.
        O preço deste drone na Ucrânia começa em 90.000 UAH.
        A maior parte do dinheiro já foi arrecadada, então vamos concluir esta arrecadação juntos!</p>`,
    "2": "<p><h3 class=\"font-bold\">Encerramos a coleta!</h3>\n" +
      "<span class=\"block overflow-y overflow-x-hidden break-words\"> Isso é incrível! Somos super poderosos juntos!</span>\n" +
      "<span class=\"block overflow-y overflow-x-hidden break-words\"> 95 contribuições de 5 UAH a 15.000 UAH, 24 países, 42 saudações, 2 sistemas de pagamento.</span>\n" +
      "<span class=\"block overflow-y overflow-x-hidden break-words\"> Muito obrigado pelo apoio, responsabilidade e confiança! Juntos para a vitória!</span>\n" +
      "<span class=\"block overflow-y overflow-x-hidden break-words\"> E, claro, um grande obrigado dos rapazes do Dnipro-1, que já receberam o drone.</span>\n" +
      "</p>\n",
  },
  updated_by: `<span class="">{{date}}</span> <span class="text-gray-500">- {{name}}</span>`,

}
export default pr

