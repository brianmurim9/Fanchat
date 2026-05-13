const ALL_PROFILES = [
  { name:"Amina Wanjiru", age:26, sex:"Female", status:"Single", country:"Kenya", phone:"+254 712 345 678", avatar:"👩🏾", bio:"A vibrant Nairobi-based creative with a passion for art and music. Loves weekend road trips to the Rift Valley and trying out new restaurants. I am easy-going, humorous, and enjoy deep conversations. Looking for someone with a genuine heart and great energy. Let's create beautiful memories together." },
  { name:"Brian Omondi", age:31, sex:"Male", status:"Divorced", country:"Kenya", phone:"+254 722 876 543", avatar:"👨🏿", bio:"Software engineer by day, guitarist by night. I recently relocated back to Kenya after five years in the UK and I'm enjoying rediscovering Nairobi. I value honesty and loyalty above everything else. Fitness enthusiast who hits the gym four times a week. Looking for a genuine connection with someone who shares big dreams." },
  { name:"Chloe Muthoni", age:24, sex:"Female", status:"Single", country:"Uganda", phone:"+256 701 234 567", avatar:"👩🏽", bio:"Communications graduate working at a Kampala media house. I love poetry, yoga, and Sunday brunch with close friends. An introvert who opens up once I feel comfortable. Family is everything to me and I aspire to travel all seven continents. Seeking a kind and ambitious partner to share life's journey." },
  { name:"David Kariuki", age:29, sex:"Male", status:"Single", country:"Kenya", phone:"+254 733 987 654", avatar:"👨🏾", bio:"Entrepreneur running a successful agribusiness in Nakuru. Passionate about sustainable farming and community development. I enjoy hiking, photography, and cooking traditional dishes on weekends. I believe in building a solid foundation before rushing into anything. Looking for a grounded, independent woman with a vision." },
  { name:"Esther Achieng", age:27, sex:"Female", status:"Single", country:"Tanzania", phone:"+255 754 321 098", avatar:"👩🏿", bio:"Nurse at Muhimbili Hospital who is passionate about healthcare and wellness. I spend my days off exploring Dar es Salaam's beaches and food markets. Deeply spiritual and very family-oriented with a contagious laugh. I enjoy board games, books, and documentaries on Friday nights. Ready to meet someone serious about building a future." },
  { name:"Felix Njoroge", age:34, sex:"Male", status:"Widowed", country:"Kenya", phone:"+254 745 678 901", avatar:"👨🏾", bio:"Secondary school teacher and part-time motivational speaker from Nyeri. I lost my wife three years ago and I've found healing in helping young people discover their potential. I love nature walks, gospel music, and simple home-cooked meals. Faith is central to my life. Looking for a compassionate, warm-hearted partner." },
  { name:"Grace Atieno", age:22, sex:"Female", status:"Single", country:"Rwanda", phone:"+250 788 543 210", avatar:"👩🏽", bio:"Final-year business student at University of Rwanda who dreams of launching her own fashion brand. Style-conscious, ambitious, and always the life of any gathering. I adore Afrobeats, cooking, and exploring Kigali's art scene. Looking for a mature, supportive partner who celebrates growth and sees the best in people." },
  { name:"Hassan Mwangi", age:36, sex:"Male", status:"Single", country:"Kenya", phone:"+254 756 234 567", avatar:"👨🏿", bio:"Logistics manager at a Mombasa shipping company who loves the coast life. I enjoy deep-sea fishing, Swahili cuisine, and long evening walks along the beach. Calm, thoughtful, and a great listener. I have two cats and a small kitchen garden I tend to on weekends. Seeking a mature woman who values peace and stability." },
  { name:"Isabella Chebet", age:28, sex:"Female", status:"Single", country:"Kenya", phone:"+254 767 890 123", avatar:"👩🏾", bio:"Pharmacist and part-time fitness coach in Eldoret. Extremely passionate about health, nutrition, and clean living. I enjoy trail running, baking healthy treats, and volunteering at the local children's shelter. Adventure is my middle name — I've climbed Mt. Longonot twice! Looking for an active, health-conscious partner who loves the outdoors." },
  { name:"James Kamau", age:32, sex:"Male", status:"Single", country:"Ethiopia", phone:"+251 911 456 789", avatar:"👨🏽", bio:"Architect based in Addis Ababa with a love for blending traditional African design with modern minimalism. I play chess competitively and enjoy cycling on weekends. I am patient, articulate, and believe that great relationships are built through consistent effort. Looking for an intelligent, driven woman who values meaningful conversation." },
  { name:"Kendi Waweru", age:25, sex:"Female", status:"Single", country:"Kenya", phone:"+254 778 901 234", avatar:"👩🏾", bio:"Digital marketing specialist in Nairobi who is obsessed with social media trends and content creation. I spend evenings reading, painting, and watching travel documentaries. Very sociable but also cherish quiet evenings at home. I believe communication is the backbone of any great relationship. Looking for someone who is fun, honest, and consistent." },
  { name:"Leon Ochieng", age:30, sex:"Male", status:"Single", country:"South Africa", phone:"+27 82 345 6789", avatar:"👨🏿", bio:"Cape Town-based entrepreneur in the renewable energy sector. Environmentalist at heart who cycles to work and grows vegetables on his balcony. I enjoy jazz music, hiking Table Mountain, and cooking Italian food. Very family-oriented and looking to settle down within the next couple of years. Seeking a warm, adventurous partner." },
  { name:"Mary Njeri", age:23, sex:"Female", status:"Single", country:"Kenya", phone:"+254 789 012 345", avatar:"👩🏾", bio:"Journalism student at Nairobi University who hopes to become an investigative reporter. Bold, curious, and never afraid to speak her mind. I volunteer at a local media literacy NGO and enjoy spoken word poetry nights. I like people who are authentic and real. Looking for someone who appreciates honesty and has a good sense of humor." },
  { name:"Nathan Kipchoge", age:35, sex:"Male", status:"Separated", country:"Kenya", phone:"+254 790 123 456", avatar:"👨🏾", bio:"Long-distance runner and personal trainer based in Iten. I've competed in four international marathons and coach a local youth running club. Disciplined, focused, but also loves to laugh and enjoy a good meal after a long run. Faith and family drive everything I do. Seeking a grounded, supportive partner ready for a committed relationship." },
  { name:"Olivia Nasimiyu", age:26, sex:"Female", status:"Single", country:"Kenya", phone:"+254 700 234 567", avatar:"👩🏿", bio:"Social worker helping street-connected youth in Kisumu. Deeply empathetic, resilient, and full of stories that will move you. I love reading Ngugi wa Thiong'o, cooking vegetarian meals, and dancing to luo benga music. Looking for a kind soul who values community, compassion, and genuine human connection." },
  { name:"Patrick Muthama", age:29, sex:"Male", status:"Single", country:"Kenya", phone:"+254 711 345 678", avatar:"👨🏾", bio:"Veterinarian working with wildlife conservancies in Tsavo. My office is literally the savannah and I love every second of it. On days off I enjoy bird-watching, stargazing, and grilling by the riverside. Quiet and reflective by nature but fiercely loyal to those I care about. Seeking a patient, nature-loving partner." },
  { name:"Queen Adhiambo", age:24, sex:"Female", status:"Single", country:"Nigeria", phone:"+234 803 456 789", avatar:"👩🏽", bio:"Lagos-based fashion designer who recently launched her own Ankara clothing line. Energetic, creative, and full of Afrocentric pride. I love Afrobeats concerts, street food adventures, and binging on Nollywood films. I believe in growing together as a couple. Looking for a confident, supportive man who appreciates African culture and beauty." },
  { name:"Raymond Oloo", age:33, sex:"Male", status:"Single", country:"Kenya", phone:"+254 721 456 789", avatar:"👨🏿", bio:"Marine biologist and conservationist based in Mombasa. I spend most mornings snorkeling and my evenings writing research papers. I am soft-spoken, deeply intellectual, and passionate about ocean conservation. I enjoy spicy coastal food, Swahili poetry, and acoustic guitar. Seeking a thoughtful, curious woman who loves nature and the sea." },
  { name:"Sophia Mwende", age:27, sex:"Female", status:"Single", country:"Kenya", phone:"+254 732 567 890", avatar:"👩🏾", bio:"Event planner who has organized over 200 weddings across East Africa. I live for beautiful details, great music, and bringing people's visions to life. Bubbly, reliable, and a natural problem-solver. I bake cakes as a hobby and run a small catering side business. Looking for someone equally passionate, loving, and ready to build a life." },
  { name:"Tobias Otieno", age:28, sex:"Male", status:"Single", country:"Ghana", phone:"+233 24 567 8901", avatar:"👨🏽", bio:"Accra-based economist working with an international development NGO. I love analyzing global markets almost as much as I love jollof rice and Highlife music. Thoughtful, well-traveled, and fluent in four languages. I enjoy football, chess, and Saturday morning runs. Seeking a driven, open-minded partner to share intellectual and romantic adventures." },
  { name:"Ursula Kamau", age:30, sex:"Female", status:"Divorced", country:"Kenya", phone:"+254 743 678 901", avatar:"👩🏾", bio:"Licensed pilot working with a regional airline, based in Nairobi. My career has taken me across Africa and I have developed a deep appreciation for diverse cultures. I am confident, independent, and know exactly what I want. Outside work I love yoga, crime novels, and experimenting with fusion cooking. Seeking a secure, emotionally mature partner." },
  { name:"Victor Ngugi", age:26, sex:"Male", status:"Single", country:"Kenya", phone:"+254 754 789 012", avatar:"👨🏾", bio:"Graphic designer and illustrator working with Nairobi's top advertising agencies. Highly creative with a passion for storytelling through visuals. I collect vintage posters, grow succulents, and enjoy open-mic poetry nights. I am gentle, supportive, and emotionally available. Seeking a creative soul who values art, laughter, and quiet Sunday mornings." },
  { name:"Wanjiku Maina", age:23, sex:"Female", status:"Single", country:"Kenya", phone:"+254 765 890 123", avatar:"👩🏽", bio:"Passionate chef and food blogger documenting East African cuisine in Nairobi. My kitchen is my happy place and I love feeding people. I run a popular YouTube channel on traditional recipes with a modern twist. Outside cooking I enjoy hiking, photography, and attending community cultural festivals. Seeking a warm, food-loving partner who enjoys sharing meals." },
  { name:"Xavier Baraka", age:31, sex:"Male", status:"Single", country:"DRC", phone:"+243 81 234 5678", avatar:"👨🏿", bio:"Kinshasa-born journalist now based in Nairobi covering East and Central African politics. I have a sharp mind, a dry sense of humor, and a deep love for African literature. I enjoy salsa dancing, espresso, and late-night debates about history. Looking for an intellectually stimulating, independent woman who isn't afraid to challenge me." },
  { name:"Yasmin Halake", age:25, sex:"Female", status:"Single", country:"Kenya", phone:"+254 776 901 234", avatar:"👩🏽", bio:"Community health advocate working in Marsabit's nomadic pastoralist communities. Fearless, dedicated, and deeply rooted in her Borana culture. I love camel riding, starlit evenings, and traditional folk songs. I speak five languages including Borana and Swahili. Seeking an open-minded, culturally respectful partner who values service and community." },
  { name:"Zack Wambua", age:34, sex:"Male", status:"Single", country:"Kenya", phone:"+254 787 012 345", avatar:"👨🏾", bio:"Real estate developer based in Nairobi with projects across Machakos and Kiambu. Ambitious, grounded, and very family-oriented. I enjoy golf on weekends, reading business autobiographies, and watching Arsenal. I have a great relationship with my family and involve them in important decisions. Looking for a mature, stable woman ready to build a home and future." },
  { name:"Aisha Baraka", age:22, sex:"Female", status:"Single", country:"Zanzibar", phone:"+255 777 123 456", avatar:"👩🏽", bio:"Tourism and hospitality graduate working at a Stone Town boutique hotel. I was born on the ocean and it is part of my soul. I love traditional Zanzibari cuisine, henna art, and full-moon dhow rides. Gentle, spiritual, and devoted to family and faith. Looking for a sincere, respectful partner who understands and celebrates my culture." },
  { name:"Bernard Mwiti", age:29, sex:"Male", status:"Single", country:"Kenya", phone:"+254 798 234 567", avatar:"👨🏾", bio:"Software developer at a Nairobi fintech startup changing how Africans save and invest. Deeply passionate about financial inclusion and technology. I enjoy hackathons, board games, and late-night ramen runs with friends. Quiet in large groups but incredibly warm one-on-one. Looking for a curious, driven partner who dreams boldly and loves genuinely." },
  { name:"Caroline Auma", age:28, sex:"Female", status:"Single", country:"Kenya", phone:"+254 709 345 678", avatar:"👩🏿", bio:"Environmental lawyer advocating for climate justice in East Africa. I am articulate, passionate, and not afraid of a good debate. I enjoy kayaking on Lake Victoria, reading legal thrillers, and attending jazz festivals. I believe in building relationships on respect and shared values. Seeking a conscious, compassionate partner who cares about the world." },
  { name:"Denis Wekesa", age:33, sex:"Male", status:"Single", country:"Kenya", phone:"+254 710 456 789", avatar:"👨🏾", bio:"Radio presenter at a leading Nairobi FM station known for his smooth voice and warm humor. I interview fascinating people for a living and I love a great conversation. I enjoy comedy nights, road trips to Western Kenya, and Luhya cuisine. Easy-going, honest, and deeply loyal. Looking for a vibrant, loving woman who appreciates laughter and good music." },
  { name:"Eunice Moraa", age:26, sex:"Female", status:"Single", country:"Kenya", phone:"+254 720 567 890", avatar:"👩🏾", bio:"Professional dancer and choreographer teaching contemporary and Afro-fusion dance in Nairobi. Movement is my first language and I feel music in my bones. I love documentaries, herbal teas, and Sunday church. I am expressive, empathetic, and fiercely supportive of those I love. Seeking a kind, emotionally intelligent partner who appreciates the arts." },
  { name:"Francis Odhiambo", age:37, sex:"Male", status:"Single", country:"Kenya", phone:"+254 730 678 901", avatar:"👨🏿", bio:"Retired semi-professional footballer now coaching youth teams in Kisumu. Football shaped everything about who I am — discipline, teamwork, and perseverance. I enjoy fishing at Lake Victoria, Ohangla music, and large family gatherings. I am a homebody at heart who also loves occasional adventures. Seeking a warm, family-loving woman to share a peaceful, joyful life." },
  { name:"Gloria Kerubo", age:24, sex:"Female", status:"Single", country:"Kenya", phone:"+254 740 789 012", avatar:"👩🏾", bio:"Medical student in her fourth year at University of Nairobi. Disciplined, driven, and full of quiet confidence. Outside academics I enjoy oil painting, African history podcasts, and cooking for my housemates. I am introverted but deeply caring. Looking for a patient, emotionally mature partner who understands ambition and supports personal growth." }
];

function renderProfiles(containerId, count, tier) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const p = ALL_PROFILES[i];
    container.innerHTML += `
      <div class="profile-card ${tier}">
        <div class="profile-card-top"></div>
        <div class="profile-card-body">
          <div class="profile-avatar">${p.avatar}</div>
          <div class="profile-name">${p.name}</div>
          <div class="profile-handle">📍 ${p.country}</div>
          <div class="profile-meta">
            <span class="meta-chip age">Age ${p.age}</span>
            <span class="meta-chip sex">${p.sex}</span>
            <span class="meta-chip status">${p.status}</span>
            <span class="meta-chip country">${p.country}</span>
          </div>
          <div class="profile-phone">📞 <span>${p.phone}</span></div>
          <div class="profile-bio">${p.bio}</div>
          <button class="btn-chat">💬 Start Chat</button>
        </div>
      </div>`;
  }
}

renderProfiles('bronze-profiles', 10, 'bronze');
renderProfiles('silver-profiles', 23, 'silver');
renderProfiles('gold-profiles',   32, 'gold');

function showPage(id) {
  document.querySelectorAll('.auth-wrap, .dash-page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function handleSignIn() {
  const id  = document.getElementById('signin-identifier').value.trim();
  const pwd = document.getElementById('signin-password').value;
  const err = document.getElementById('signin-error');
  if (!id || !pwd) { showError(err, '⚠️ Please enter your phone/email and password.'); return; }
  err.className = 'status-banner';
  const existing = localStorage.getItem('cnw_user');
  if (!existing) {
    showError(err, 'No account found. Redirecting to Sign Up…');
    setTimeout(() => showPage('page-signup'), 1500);
  } else {
    const user = JSON.parse(existing);
    err.innerHTML = '✅ Sign in successful! Redirecting…';
    err.className = 'status-banner success';
    setTimeout(() => showPage('page-' + (user.plan || 'bronze')), 1200);
  }
}

let currentStep = 1;

function goToStep(n) {
  if (n === 2) {
    const fn  = document.getElementById('first-name').value.trim();
    const ln  = document.getElementById('last-name').value.trim();
    const id  = document.getElementById('signup-identifier').value.trim();
    const pw  = document.getElementById('signup-password').value;
    const cp  = document.getElementById('signup-confirm-password').value;
    const err = document.getElementById('signup-error');
    if (!fn || !ln || !id || !pw || !cp) { showError(err, '⚠️ Please fill in all fields including Confirm Password.'); return; }
    if (pw.length < 6) { showError(err, '⚠️ Password must be at least 6 characters.'); return; }
    if (pw !== cp) { checkSignupPwdMatch(); showError(err, '⚠️ Passwords do not match. Please fix before continuing.'); return; }
    err.className = 'status-banner';
  }
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + n).classList.add('active');
  updateDots(n);
  currentStep = n;
}

function updateDots(active) {
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById('dot-' + i);
    dot.className = 'step-dot';
    if (i < active)   dot.classList.add('done');
    if (i === active) dot.classList.add('active');
  }
}

function checkSignupPwdMatch() {
  const pw  = document.getElementById('signup-password').value;
  const cp  = document.getElementById('signup-confirm-password').value;
  const msg = document.getElementById('signup-pwd-mismatch');
  const inp = document.getElementById('signup-confirm-password');
  if (cp.length === 0) { msg.style.display = 'none'; inp.classList.remove('mismatch'); return; }
  if (pw !== cp) {
    msg.style.display = 'block';
    msg.style.animation = 'none';
    void msg.offsetWidth;
    msg.style.animation = 'shake 0.4s ease';
    inp.classList.add('mismatch');
  } else {
    msg.style.display = 'none';
    inp.classList.remove('mismatch');
  }
}

let selectedPlan = null;

function selectPlan(el, tier, price, amount) {
  document.querySelectorAll('.plan-card').forEach(c => {
    c.classList.remove('selected');
    c.querySelector('.plan-check').textContent = '';
  });
  el.classList.add('selected');
  el.querySelector('.plan-check').textContent = '✓';
  selectedPlan = { tier, price, amount };
  document.getElementById('summary-plan').textContent  = tier.charAt(0).toUpperCase() + tier.slice(1) + ' Plan';
  document.getElementById('summary-price').textContent = price;
  const btn = document.getElementById('continue-plan-btn');
  btn.disabled = false;
  btn.style.opacity = '1';
}

const PAYPAL_EMAIL = 'brianmurimimuriuki@gmail.com';

function switchPayment(method) {
  document.getElementById('panel-mpesa').style.display  = method === 'mpesa'  ? 'block' : 'none';
  document.getElementById('panel-paypal').style.display = method === 'paypal' ? 'block' : 'none';
  document.getElementById('toggle-mpesa').classList.toggle('active',  method === 'mpesa');
  document.getElementById('toggle-paypal').classList.toggle('active', method === 'paypal');
  if (method === 'paypal') {
    document.getElementById('paypal-amount-display').textContent =
      document.getElementById('summary-price').textContent || '—';
  }
}

function formatMpesa(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.startsWith('0') && v.length > 1) v = '254' + v.slice(1);
  input.value = v.startsWith('254') ? '+' + v : v;
}

function getRawPhone() {
  return document.getElementById('mpesa-number').value.replace(/\D/g, '');
}

function initiatePayment() {
  const raw = getRawPhone();
  const err = document.getElementById('mpesa-error');
  if (!selectedPlan)   { showBanner(err, '⚠️ No plan selected.', 'warn'); return; }
  if (raw.length < 10) { showBanner(err, '⚠️ Enter a valid Safaricom number.', 'warn'); return; }
  err.className = 'status-banner';
  const display = raw.replace(/(\d{3})(\d{3})(\d{3})(\d*)/, '+$1 $2 $3 $4').trim();
  document.getElementById('modal-phone').textContent     = display;
  document.getElementById('modal-amount').textContent    = selectedPlan.amount.toLocaleString();
  document.getElementById('modal-plan-name').textContent = selectedPlan.tier.charAt(0).toUpperCase() + selectedPlan.tier.slice(1);
  document.getElementById('mpesa-modal').classList.add('show');
}

function confirmPaypal() {
  const price = document.getElementById('summary-price').textContent || '—';
  const plan  = document.getElementById('summary-plan').textContent  || '—';
  const err   = document.getElementById('paypal-error');
  const btn   = document.getElementById('paypal-confirm-btn');
  showBanner(err,
    `✅ Thank you! Once we confirm your PayPal payment of <strong>${price}</strong> to <strong>${PAYPAL_EMAIL}</strong>, your <em>${plan}</em> will be activated. Check your email for confirmation.`,
    'success'
  );
  btn.textContent = '⏳ Awaiting confirmation…';
  btn.disabled = true;
  setTimeout(saveAndRedirect, 3000);
}

function confirmPayment() {
  const btn     = document.getElementById('confirm-btn');
  const spinner = document.getElementById('confirm-spinner');
  const text    = document.getElementById('confirm-text');
  spinner.style.display = 'inline-block';
  text.textContent = 'Verifying…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('mpesa-modal').classList.remove('show');
    spinner.style.display = 'none';
    text.textContent = "I've Entered My PIN ✓";
    btn.disabled = false;
    saveAndRedirect();
  }, 2200);
}

function saveAndRedirect() {
  const name = document.getElementById('first-name').value || 'User';
  localStorage.setItem('cnw_user', JSON.stringify({
    name, plan: selectedPlan.tier, joined: new Date().toISOString()
  }));
  showPage('page-' + selectedPlan.tier);
}

function resendPrompt() {
  alert('A new M-Pesa STK push has been sent to your phone. Please check and enter your PIN.');
}

function signOut() { showPage('page-signin'); }

function showError(el, msg) { el.innerHTML = msg; el.className = 'status-banner error'; }

function showBanner(el, html, type) {
  const styles = {
    success: 'display:block;background:#f0fdf4;border:1.5px solid #86efac;color:#166534;padding:12px 14px;border-radius:10px;font-size:0.85rem;margin-bottom:14px;',
    error:   'display:block;background:#fff5f5;border:1.5px solid #fc8181;color:#c53030;padding:12px 14px;border-radius:10px;font-size:0.85rem;margin-bottom:14px;',
    warn:    'display:block;background:#fffbeb;border:1.5px solid #fcd34d;color:#92400e;padding:12px 14px;border-radius:10px;font-size:0.85rem;margin-bottom:14px;'
  };
  el.innerHTML = html;
  el.style.cssText = styles[type] || styles.warn;


function togglePwd(id, btn) {
  const inp = document.getElementById(id);
  if (inp.type === 'password') { inp.type = 'text';     btn.textContent = '🙈'; }
  else                         { inp.type = 'password'; btn.textContent = '👁'; }
}

document.getElementById('mpesa-modal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('show');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('page-signin').classList.contains('active')) handleSignIn();
});
