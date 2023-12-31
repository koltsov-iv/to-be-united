const en = {
  donate: "Donate",
  share: "Share",
  sum: "Sum, UAH",
  wish_you: "Message to the heroes",
  wish_you_placeholder: "Thank you defenders!",
  yours: "Yours",
  yours_placeholder: "Yours friend",
  form_sum_require_err: "Require to put something.",
  form_contact_require_err: "You need to fill this or check Anonymous.",
  form_email_err: "Need to fill an email in the format example@domain.com",
  anonymous: "Anonymous",
  no_communication: "Don't want to hear news about this fundraising",
  not_public_name: "Don't display my name publicly on the fundraiser",
  subscription: "Yes, want to hear how the project helps people. Unsubscribe anytime",
  participation: "I'm happy to participate further fundraising from this source",
  your_donation: "Your donation:",
  fundraising_page: {
    title: "Birthday drone for Dnipro-1",
    status_badge_open: "In progress",
    status_badge_closed: "Closed",
    media_subtitle: "In the photo, I bought a drone for Dnipro-1 last year.",
    published_at: "Published at {{date}}",
    body_description: `
    <div>
        <p>Just had a conversation with my friends; they are currently stationed at the Limansk front
        and actively engaged in combat operations. They are going through a tough time and are in need of assistance,
        counting on our support.</p>
      </div>

      <div class="font-bold mt-4">Background:</div>
      <div class="mt-2">
        On my previous birthday, I purchased a Mavic-3 drone, and my buddies were thrilled with it.
        The drone performed remarkably well, but unfortunately, it got shot down.
      </div>

      <div class="font-bold mt-4">Relevance:</div>

      <div class="italic mt-2">Why Dnipro-1?</div>
      <div class="ml-2">- I have friends in several units on the Donetsk fronts, and after talking to all of them,
      it's evident that Dnipro-1 requires urgent support.</div>

      <div class="italic mt-2">Why a Drone?</div>
      <div class="ml-2">
        - The most pressing request was for drones, and I happen to have expertise in their procurement and delivery.
        However, they also need Ecoflow power stations.
      </div>

      <div class="italic mt-2">Why am I doing this independently rather than through a foundation?</div>
      <ul class="ml-2">
        <li> - To conserve the resources of volunteers; processing each request consumes their valuable time.</li>
        <li> - To save donor resources; purchasing items directly is more cost-effective. I buy them offline in
         Europe and utilize tax-free at the border, allowing the saved money to be used for the next donation.</li>
        <li> - To establish effective communication with the participants involved in this project.
        <a href="https://www.linkedin.com/in/koltsov-iv/recent-activity/all/">(About the project)</a></li>
      </ul>
      <div class="flex justify-start space-x-3 mt-4">
        <span>Media of the unit:</span>
        <a href="https://t.me/d1air" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/telegram.svg" alt="Telegram channel"></a>
        <a href="https://instagram.com/podvorchanskiy" target="_blank"><img width="25px" height="25px" src="../assets/drone-page/instagram.svg" alt="Commander"></a>
      </div>
`,
    updates: "Updates",
    comments: "Messages",
    comments_subheader: "Leave messages to our defenders 🫶",
    read_more: "Read more",
    comments_show: "Show more",
  },
  action_block: {
    raised_goal: "raised of {{goal}}",
    donations: "donations",
    days_left: "Left <b>{{days_left}}</b> days of {{days_all}} days",
    recent_donation: "Recent donation",
    top_donation: "Top donation",
    first_donation: "First donation",
    share_link: "Share link",
    copy_link: "Copy link",
    close: "Close",
  },
  updates: {
    "1": `<p>At the moment, we need to raise funds for the Mavic-3 drone by the end of summer.
        We need to buy in Ukraine, the price starts at 90,000 UAH.
        Most of the funds have already been collected, so let's complete the fundraising together!</p>`,
    "2": `<p><h3 class="font-bold">We have closed this fundraising!</h3>
<span class="block overflow-y overflow-x-hidden break-words"> This is incredible! We are super powerful together!</span>
<span class="block overflow-y overflow-x-hidden break-words"> 95 contributions from 5 UAH to 15,000 UAH, 24 countries, 42 greetings, 2 payment systems.</span>
<span class="block overflow-y overflow-x-hidden break-words"> A big thank you for the support, responsibility, and trust! Together we will win!</span>
<span class="block overflow-y overflow-x-hidden break-words"> And, of course, a big thank you from the guys from Dnipro-1, who have already received the drone.</span>
</p>`,
  },
  updated_by: `<span class="font-semibold">{{date}}</span> <span class="text-gray-500">by {{name}}</span>`,
}
export default en
