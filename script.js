// mobile menu
  var btn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');});});

  // footer year
  document.getElementById('yr').textContent=new Date().getFullYear();

  // quote form -> WhatsApp
  document.getElementById('quoteForm').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target;
    var isAr=document.documentElement.lang==='ar';
    var text=isAr
      ? 'مرحباً، اسمي '+f.name.value+'.\nالخدمة: '+f.service.value+'\nالتفاصيل: '+f.message.value
      : 'Hello, my name is '+f.name.value+'.\nService: '+f.service.value+'\nDetails: '+f.message.value;
    window.open('https://wa.me/966503880876?text='+encodeURIComponent(text),'_blank','noopener');
  });

  // ===== English / Arabic translations =====
  var translations={
    en:{
      brandName:'Mohammed Zoman Al Hajri', brandSub:'General Contracting Est.',
      navServices:'Services', navAbout:'About', navWork:'Our work', navGallery:'Gallery', navContacts:'Contacts', navQuote:'Get a quote',
      tagline:'Building Today for a Better Tomorrow',
      heroLead:'We are a reliable and professional contracting company, committed to delivering high-quality civil works and road line projects with safety, quality and timely completion.',
      seeServices:'See our services',
      servicesTitle:'Our Services',
      servicesNote:'From the first excavation to the final interlock, we handle civil works, road line projects and equipment rental under one roof.',
      svc1Title:'Building Construction', svc1Desc:'Residential | Commercial | Industrial',
      svc2Title:'Masonry &amp; Plastering Works', svc2Desc:'CMU | Block | Internal &amp; External Plaster',
      svc3Title:'Steel Fixing &amp; Concrete Works', svc3Desc:'Reinforcement | Formwork | Concreting',
      svc4Title:'Road Line Works', svc4Desc:'Road Construction | Interlock | Curbstone | Asphalt Works',
      svc5Title:'Earthworks &amp; Site Development', svc5Desc:'Excavation | Backfilling | Grading',
      svc6Title:'Eearth Moving Equipment', svc6Desc:'Water Tanker | Dump Truck | Ready Mix | Drum Truck',
      aboutTitle:'Your trusted partner in construction',
      aboutP1:'Muhammad Zoman General Contracting Est. is based in Thoqbah, Saudi Arabia. We take on civil works and road line projects of every size, and we run each one with the same three commitments.',
      aboutP2:'Talk to us early. A quick site discussion helps us plan the manpower, materials and trucks your project needs before work begins.',
      aboutCta:'Discuss your project',
      pillar1Title:'Safety', pillar1Desc:'Trained crews, proper PPE and a safe site on every job.',
      pillar2Title:'Quality', pillar2Desc:'Good materials and careful workmanship from foundation to finish.',
      pillar3Title:'Timely completion', pillar3Desc:'Clear schedules, and we keep you updated until handover.',
      workTitle:'Our Work', workNote:'A look at the kind of projects we deliver.',
      galleryTitle:'Gallery', galleryNote:'A closer look at our sites, equipment and crews. Tap any photo to view it larger.',
      gal1:'Building construction', gal2:'Steel fixing &amp; concrete', gal3:'Road line works', gal4:'Earth Moving Equipment',
      gal5:'Concrete pump at work', gal6:'Concrete casting', gal7:'Pipework &amp; reinforcement', gal8:'Landscape &amp; finishing works', gal9:'Trench reinforcement works',
      contactTitle:'Contact Us', contactNote:'Tell us about your project. We will get back to you on WhatsApp or by phone.',
      pm:'Project Manager', waLabel:'Call or WhatsApp', emailLabel:'Email',
      addressLabel:'Address', addressValue:'P.O. Box 20571, P. Code 31952<br>Thoqbah, Saudi Arabia',
      officeLabel:'Office',
      formTitle:'Request a quote', formHint:'This opens WhatsApp with your message ready to send.',
      fName:'Your name', fService:'Service you need', rentalTrucks:'Rental Trucks',
      fMsg:'Project details', fMsgPlaceholder:'Location, size of work, start date...',
      sendBtn:'Send on WhatsApp',
      trusted:'Your Trusted Partner in Construction',
      footCopy:'Muhammad Zoman General Contracting Est. All rights reserved.',
      cpTitle:'Contact Directory', cpNote:'Reach the right person directly.',
      cpRole1:'General Manager', cpRole2:'Accountant', cpRole3:'Public Relations Manager', cpRole4:'Project Manager'
    },
    ar:{
      brandName:' مؤسسة محمد زومان الهاجري ', brandSub:' مقاولات عامة',
      navServices:'خدماتنا', navAbout:'من نحن', navWork:'أعمالنا', navGallery:'المعرض', navContacts:'جهات الاتصال', navQuote:'اطلب عرض سعر',
      tagline:'نبني اليوم من أجل غد أفضل',
      heroLead:'نحن مؤسسة مقاولات موثوقة واحترافية، ملتزمون بتنفيذ الأعمال المدنية ومشاريع خطوط الطرق بجودة عالية، مع الالتزام بالسلامة والجودة والتسليم في الوقت المحدد.',
      seeServices:'تعرف على خدماتنا',
      servicesTitle:'خدماتنا',
      servicesNote:'من أول أعمال الحفر وحتى الإنترلوك النهائي، نغطي الأعمال المدنية ومشاريع خطوط الطرق وتأجير المعدات تحت سقف واحد.',
      svc1Title:'أعمال البناء والانشاءات والبلاط', svc1Desc:'سكني | تجاري | صناعي',
      svc2Title:'تاجير المعدات والاليات', svc2Desc:'بلدوزر | لودر | قريدر | رصاصة | كرين',
      svc3Title:'أعمال حدادة وخرسانة', svc3Desc:'تسليح | نجارة مسلحة | صب خرساني',
      svc4Title:'أعمال خطوط الطرق', svc4Desc:'إنشاء الطرق | إنترلوك | أرصفة | أعمال إسفلت',
      svc5Title:'الأعمال الترابية وتطوير المواقع', svc5Desc:'حفر | ردم | تسوية',
      svc6Title:'معدات نقل التربة', svc6Desc:'صهريج مياه | شاحنة قلاب | خرسانة جاهزة | شاحنة دراموندي',
      aboutTitle:'شريككم الموثوق في أعمال البناء',
      aboutP1:'مؤسسة محمد زومان الهاجري للمقاولات العامة مقرها في الخبر،الثقبة، المملكة العربية السعودية. نقوم بتنفيذ الأعمال المدنية ومشاريع خطوط الطرق بمختلف أحجامها، ونلتزم في كل مشروع بنفس المبادئ الثلاثة.',
      aboutP2:'تواصلوا معنا مبكراً. نقاش سريع عن الموقع يساعدنا على تخطيط العمالة والمواد والشاحنات التي يحتاجها مشروعكم قبل بدء العمل.',
      aboutCta:'ناقش مشروعك معنا',
      pillar1Title:'السلامة', pillar1Desc:'طواقم مدربة، معدات وقاية مناسبة، وموقع آمن في كل عمل.',
      pillar2Title:'الجودة', pillar2Desc:'مواد جيدة وحرفية دقيقة من الأساس حتى التشطيب.',
      pillar3Title:'التسليم في الوقت المحدد', pillar3Desc:'جداول زمنية واضحة، ونبقيكم على اطلاع حتى التسليم.',
      workTitle:'أعمالنا', workNote:'نظرة على نوعية المشاريع التي ننفذها.',
      galleryTitle:'معرض الصور', galleryNote:'نظرة أقرب على مواقعنا ومعداتنا وفرقنا. اضغط على أي صورة لعرضها بشكل أكبر.',
      gal1:'أعمال البناء', gal2:'حدادة وخرسانة', gal3:'أعمال خطوط الطرق', gal4:'معدات نقل التربة',
      gal5:'مضخة خرسانة أثناء العمل', gal6:'أعمال الصب الخرساني', gal7:'أعمال الأنابيب والتسليح', gal8:'أعمال التشطيب وتنسيق المواقع', gal9:'أعمال التسليح في الخندق',
      contactTitle:'تواصل معنا', contactNote:'أخبرنا عن مشروعك، وسنتواصل معك عبر واتساب أو الهاتف.',
      pm:'مدير المشروع', waLabel:'اتصال أو واتساب', emailLabel:'البريد الإلكتروني',
      addressLabel:'العنوان', addressValue:'ص.ب 20571، الرمز البريدي 31952<br> المملكة العربية السعودية ، الخبر ، الثقبة ',
      officeLabel:'المكتب',
      formTitle:'اطلب عرض سعر', formHint:'سيتم فتح واتساب مع رسالتك جاهزة للإرسال.',
      fName:'اسمك', fService:'الخدمة المطلوبة', rentalTrucks:'تأجير شاحنات',
      fMsg:'تفاصيل المشروع', fMsgPlaceholder:'الموقع، حجم العمل، تاريخ البدء...',
      sendBtn:'إرسال عبر واتساب',
      trusted:'شريككم الموثوق في أعمال البناء',
      footCopy:'مؤسسة محمد زومان الهاجري للمقاولات العامة. جميع الحقوق محفوظة.',
      cpTitle:'دليل التواصل', cpNote:'تواصل مباشرة مع الشخص المناسب.',
      cpRole1:'المدير العام', cpRole2:'المحاسب', cpRole3:'مدير العلاقات العامة', cpRole4:'مدير المشروع'
    }
  };

  function applyLang(lang){
    document.documentElement.lang=lang;
    document.documentElement.dir=(lang==='ar')?'rtl':'ltr';
    var dict=translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key=el.getAttribute('data-i18n');
      if(dict[key]!==undefined) el.innerHTML=dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key=el.getAttribute('data-i18n-placeholder');
      if(dict[key]!==undefined) el.setAttribute('placeholder',dict[key]);
    });
    var langBtn=document.getElementById('langToggle');
    langBtn.textContent=(lang==='ar')?'EN':'عربي';
    try{ localStorage.setItem('mz-lang',lang); }catch(e){}
  }

  document.getElementById('langToggle').addEventListener('click',function(){
    var current=document.documentElement.lang==='ar'?'ar':'en';
    applyLang(current==='ar'?'en':'ar');
  });

  // load saved preference, if any
  (function(){
    var saved='en';
    try{ saved=localStorage.getItem('mz-lang')||'en'; }catch(e){}
    applyLang(saved);
  })();

  // ===== Contact directory side panel =====
  (function(){
    var openBtn=document.getElementById('contactPanelBtn');
    var panel=document.getElementById('cpPanel');
    var backdrop=document.getElementById('cpBackdrop');
    var closeBtn=document.getElementById('cpClose');
    var lastFocus=null;
    function openPanel(){
      lastFocus=document.activeElement;
      panel.classList.add('open');
      backdrop.classList.add('open');
      document.body.classList.add('cp-lock');
      closeBtn.focus();
    }
    function closePanel(){
      panel.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.classList.remove('cp-lock');
      if(lastFocus&&lastFocus.focus) lastFocus.focus();
    }
    openBtn.addEventListener('click',openPanel);
    closeBtn.addEventListener('click',closePanel);
    backdrop.addEventListener('click',closePanel);
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&panel.classList.contains('open')) closePanel();
    });
  })();

  // ===== Floating gallery + lightbox =====
  (function(){
    var tiles=document.querySelectorAll('#work .tile img');
    document.querySelectorAll('#floatGallery img[data-reuse]').forEach(function(im){
      var t=tiles[+im.getAttribute('data-reuse')];
      if(t){ im.src=t.src; }
    });
    var items=[].slice.call(document.querySelectorAll('#floatGallery .float-item'));
    items.sort(function(a,b){ return (+a.style.order)-(+b.style.order); });
    var lb=document.getElementById('lb'), lbImg=document.getElementById('lbImg'), lbCap=document.getElementById('lbCap');
    var cur=0, lastFocus=null;
    function isRtl(){ return document.documentElement.dir==='rtl'; }
    function show(i){
      cur=(i+items.length)%items.length;
      var im=items[cur].querySelector('img');
      lbImg.src=im.src; lbImg.alt=im.alt;
      lbCap.textContent=items[cur].querySelector('.cap').textContent;
    }
    function openLb(i){
      lastFocus=document.activeElement; show(i);
      lb.classList.add('open'); document.body.style.overflow='hidden';
      document.getElementById('lbClose').focus();
    }
    function closeLb(){
      lb.classList.remove('open'); document.body.style.overflow='';
      if(lastFocus&&lastFocus.focus) lastFocus.focus();
    }
    function goLeft(){ show(cur+(isRtl()?1:-1)); }
    function goRight(){ show(cur+(isRtl()?-1:1)); }
    items.forEach(function(it,i){ it.addEventListener('click',function(){ openLb(i); }); });
    document.getElementById('lbClose').addEventListener('click',closeLb);
    document.getElementById('lbLeft').addEventListener('click',goLeft);
    document.getElementById('lbRight').addEventListener('click',goRight);
    lb.addEventListener('click',function(e){ if(e.target===lb) closeLb(); });
    document.addEventListener('keydown',function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') closeLb();
      else if(e.key==='ArrowLeft') goLeft();
      else if(e.key==='ArrowRight') goRight();
    });
    // simple swipe on touch screens
    var sx=null;
    lb.addEventListener('touchstart',function(e){ sx=e.touches[0].clientX; },{passive:true});
    lb.addEventListener('touchend',function(e){
      if(sx===null) return;
      var dx=e.changedTouches[0].clientX-sx; sx=null;
      if(Math.abs(dx)>50){ if(dx>0) goLeft(); else goRight(); }
    });
  })();
