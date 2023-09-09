const ua: typeof import('./en').default = {
  donate: "Донат",
  share: "Репост",
  sum: "Внесок, UAH",
  wish_you: "Повідомлення героям",
  wish_you_placeholder: "Дякую захисникам і захисницям!",
  yours: "Від",
  yours_placeholder: "Друже Павло",
  form_sum_require_err: "Треба хоть щось внести.",
  form_contact_require_err: "Треба заповнити, якщо не анонім",
  form_email_err: "Треба вказати пошту в форматі example@domain.com",
  anonymous: "Анонім",
  no_communication: "Ніяких оновлень. Задонатив і забув",
  not_public_name: "Сховати імʼя від преси",
  subscription: "Цікавий проект, хочу знати що буде далі",
  participation: "Буду радий долучитись до подальших ініціатив",
  your_donation: "Ваш внесок:",
  fundraising_page: {
    title: "На Mavic-3 Дніпру-1",
    published_at: "Опубліковано {{date}}",
    status_badge_open: "В процессі",
    status_badge_closed: "Закрито",
    media_subtitle: "На фото купив Мавік Дніпрам в тому році.",
    body_description: `<div>
        Провів комунікацію із друзями, вони зараз на Ліманському напрямку, залучені у активні бойові дії.
        Зараз в пеклі, потребують допомоги в постачанні і разраховують на нас.
      </div>
      <div class="font-bold mt-4"> Бекграунд:</div>
      <div class="mt-2">
        Купував Mavic-3 "за свої" в попередній день народження, пацани залишились довольні,
        дрон пропрацював достойно, але наразі вже збит. Цього разу прошу долучитись до збору.
      </div>
      <div class="font-bold mt-4"> Актуальність:</div>
      <div class="italic mt-2"> Чому саме Дніпрам-1?</div>
      <div class="ml-2"> -
        Маю друзів в декількох підрозділах на донецькому напрямках, поспілкувався із усіма,
        Дніпрам зараз гаряче і потрібна підтримка.
      </div>
      <div class="italic mt-2"> Чому саме Дрон?</div>
      <div class="ml-2">
        - Найактуальнійший запит був саме про дрони + я маю певну експкртізу в придбанні та доставці.
        Але потрібні ще зарядні страціі Екофлоу.
      </div>
      <div class="italic mt-2"> Чому роблю це самостійно, а не через фонд?</div>
      <ul class="ml-2">
        <li> - Зберегти ресурси волонтерів, опрацювання кожного запита це расход ресурсів волонтерського часу</li>
        <li> - Заощадити ресурси донарів, купувати самостійно це дешевше - я купую в Европі офлайн при цьому
          оформлюючи tax-free при перетині кордону, ці гроші підуть на наступний донат.
        </li>
        <li> - Провести якісну комунікацію із учасниками збору в рамках цього проекту.
        <a href="https://www.linkedin.com/in/koltsov-iv/recent-activity/all/">(Про проект)</a></li>
      </ul>
      <div>
      <div class="flex justify-start space-x-3 mt-4">
      <span> Медіа підрозділу:</span>
      <a href="https://t.me/d1air" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/telegram.svg" alt="Характерники"></a>
      <a href="https://instagram.com/podvorchanskiy" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/instagram.svg" alt="Командир"></a>
      </div>
       </div>
`,
    updates: "Оновлення",
    comments: "Повідомлення",
    comments_subheader: "Залишайте повідомлення нашим захисникам і захисницям 🫶",
    read_more: "Читати далі",
    comments_show: "Показати ще",
  },
  action_block: {
    raised_goal: "зібрано з {{goal}}",
    donations: "донатів",
    days_left: "Залишилось <b>{{days_left}}</b> з {{days_all}} днів",
    recent_donation: "Нещодавно",
    top_donation: "Топ внесок",
    first_donation: "Перший внесок",
    share_link: "Поділитись",
    copy_link: "Copy link",
    close: "Закрити",
  },
  updates: {
    "1": `<p>На даний момент нам потрібно зібрати кошти на дрон Mavic-3 до кінця літа.
        Купити треба в Україні, ціна стартує від 90 тис. грн.
        Більшість коштів вже зібрано, тому давайте закриємо збір разом!</p>`,
    "2": `<p><h3 class="font-bold">Ми закрили збір!</h3>
<span class="block overflow-y overflow-x-hidden break-words"> Це неймовірно! Ми супер потужні разом!</span>
<span class="block overflow-y overflow-x-hidden break-words"> 95 внесків від 5 грн до 15.000 грн, 24 країни, 42 привітання, 2 платіжні системи.</span>
<span class="block overflow-y overflow-x-hidden break-words"> Велике дякую за підтримку, відповідальність і довіру! Разом до перемоги!</span>
<span class="block overflow-y overflow-x-hidden break-words"> І, звісно ж велике дякую від хлопців з Дніпра-1, які вже отримали дрон.</span>
</p>`
  },
  updated_by: `<span class="font-semibold">{{date}}</span> <span class="text-gray-500">- {{name}}</span>`,
}

export default ua;
