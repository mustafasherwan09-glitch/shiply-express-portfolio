import './style.css';

const translations = {
  ku: {
    meta: {
      title: 'شیپلی ئێکسپرێس | تۆ هەڵبژێرە، ئێمە دەیکڕین و دەیهێنین — Shiply Express',
      description: 'تۆ هەڵبژێرە، ئێمە دەیکڕین و دەیهێنین. کاڵاکان لە دیسکەڤەری ناو ئەپ هەڵبژێرە یان لینک و وێنەی شاشە بنێرە — بە یەک نرخی کۆتایی و نیوە ئێستا، نیوە لە کاتی گەیشتن لە تورکیا، چین، دوبەی و جیهانەوە بۆ هەولێر و کوردستان.'
    },
    loading: {
      tagline: 'بکڕە · بنێرە · بەدوایدا بچۆ'
    },
    nav: {
      home: 'سەرەکی',
      services: 'خزمەتگوزارییەکان',
      how: 'چۆن کاردەکات',
      payment: 'پارەدان',
      stores: 'فرۆشگاکان',
      app: 'داگرتنی ئەپ',
      faq: 'پرسیارە باوەکان',
      contact: 'پەیوەندی',
      cta: 'داگرتنی ئەپ'
    },
    hero: {
      badge: 'لە دیسکەڤەری ناو ئەپ هەڵبژێرە یان لینک بنێرە',
      title: '«تۆ هەڵبژێرە، ئێمە دەیکڕین و دەیهێنین»',
      subtitle: 'هەر کاڵایەکت دەوێت لە بەشی دیسکەڤەری ناو ئەپەکەمان هەڵیبژێرە کە نرخی گەیشتنی بۆ هەولێر لەسەرە، یان لینک و وێنەی شاشەکەی بنێرە — ئێمە بە یەک نرخی کۆتایی بۆت دەکڕین و دەیگەیەنینە دەستت.',
      cta_app: 'داگرتنی ئەپ',
      cta_message: 'نامەمان بۆ بنێرە',
      pill1: 'یەک نرخی کۆتایی بۆ هەولێر',
      pill2: 'نیوە ئێستا، نیوە لە کاتی گەیشتن',
      pill3: 'بەدواداچوونی ڕاستەوخۆ',
      card_badge: 'دیسکەڤەر · Discover',
      card_store: 'فرۆشگای جیهانی · دیسکەڤەر',
      card_final_label: 'نرخی کۆتایی تا هەولێر',
      card_item_title: 'کاڵای هەڵبژێردراو لە دیسکەڤەر',
      card_item_sub: 'کڕین + گەیاندن بۆ هەولێر بەبێ هیچ تێچوویەکی شاراوە',
      card_all_in: 'نرخی کۆتایی',
      card_pay_now: 'نیوە ئێستا (٥٠٪)',
      card_pay_later: 'لە کاتی گەیشتن (٥٠٪)',
      track_title: 'گەیشتە هەولێر · SHP-48213',
      track_desc: 'سڵاو 👋 بارەکەت گەیشتە هەولێر و ئەمڕۆ دەیگەیەنینە دەستت 📦'
    },
    services: {
      badge: 'خزمەتگوزارییەکانمان',
      title: 'چوار ڕێگەی ئاسان بۆ کڕین لە هەموو جیهانەوە',
      subtitle: 'پێویستت بە کارتی بانکی یان هەژمارکردنی کێش نییە — تەنها کاڵاکەت هەڵبژێرە و ئێمە هەموو کارەکە دەکەین.',
      s1: {
        tag: 'لینکەکەی بنێرە · Send a link',
        title: 'بۆم بکڕە · Shop for me',
        desc: 'لینکی هەر کاڵایەک لە هەر ماڵپەڕ و فرۆشگایەکی جیهانی کۆپی بکە و لە ئەپەکە یان واتسئەپ بۆمانی بنێرە؛ ئێمە بۆت دەکڕین و دەیگەیەنین.',
        cta: 'لینک بنێرە'
      },
      s2: {
        tag: 'نرخی گەیشتن بۆ هەولێر دیاریکراوە',
        title: 'دیسکەڤەر · Discover',
        desc: 'لەناو ئەپی شیپلی سەدان کاڵای هەڵبژێردراو ببینە کە نرخی کۆتایی گەیشتنیان بۆ هەولێر لەسەر نووسراوە و بە یەک کلیک داوای بکە.',
        cta: 'لە ئەپەکەدا بیبینە'
      },
      s3: {
        tag: 'وێنەی شاشە بنێرە · Send a screenshot',
        title: 'بۆم بدۆزەرەوە · Find it for me',
        desc: 'شتێکت لە ئینستاگرام یان تیکتۆک بینیوە و نازانیت لەکوێ دەفرۆشرێت؟ تەنها وێنەی شاشەکەی (سکرینشۆت) بنێرە، تیمەکەمان بۆت دەدۆزێتەوە و دەیکڕێت.',
        cta: 'وێنە بنێرە'
      },
      s4: {
        tag: 'دیاری بۆ ئازیزانت · Gift delivery',
        title: 'دیاری بنێرە · Send a gift',
        desc: 'جوانترین دیاری لە فرۆشگا جیهانییەکانەوە هەڵبژێرە؛ ئێمە دەیکڕین، بە جوانی دەیپێچینەوە و ڕاستەوخۆ دەیگەیەنینە دەستی ئازیزانت.',
        cta: 'دیاری هەڵبژێرە'
      }
    },
    how: {
      badge: 'چۆن کاردەکات',
      title: 'لە هەڵبژاردنەوە تا بەردەم دەرگای ماڵەوەت بە ٣ هەنگاو',
      subtitle: 'هەڵبژێرە ← ئێمە بە یەک نرخی کۆتایی دەیکڕین ← لەگەڵ بەدواداچوونی ڕاستەوخۆ وەریدەگریت',
      step1: {
        title: '١. کاڵاکەت هەڵبژێرە',
        desc: 'لە بەشی دیسکەڤەری ناو ئەپ کاڵاکەت هەڵبژێرە، یان لینکی کاڵاکە و وێنەی شاشەکەی (سکرینشۆت) بنێرە بۆ تیمەکەمان.',
        foot: 'دیسکەڤەر · لینک · وێنەی شاشە'
      },
      step2: {
        title: '٢. ئێمە دەیکڕین بە یەک نرخی کۆتایی',
        desc: 'پێش کڕین یەک نرخی کۆتایی و ڕوونت پێ دەدرێت تا دەگاتە هەولێر. بەبێ سەرئێشەی کێش و بەبێ هیچ تێچوویەکی زیادە لە کاتی گەیشتن.',
        foot: 'یەک نرخی ڕوون و جێگیر'
      },
      step3: {
        badge: 'ڕاستەوخۆ',
        title: '٣. لەگەڵ بەدواداچوونی ڕاستەوخۆ وەریبگرە',
        desc: 'لە ساتی کڕینەوە تا گەیشتنی بۆ هەولێر و بەردەم دەرگای ماڵەوەت، لەناو ئەپ و واتسئەپ هەنگاو بە هەنگاو ئاگاداری بارەکەت دەبیت.',
        foot: 'ئاگادارکردنەوەی دەستبەجێ لە ئەپ و واتسئەپ'
      }
    },
    payment: {
      badge: 'شێوازی پارەدانی ئاسان و جێی متمانە',
      title: '«نیوە ئێستا، نیوە لە کاتی گەیشتن»',
      subtitle: 'پێویست ناکات تەواوی پارەکە لە سەرەتاوە بدەیت. تەنها نیوەی نرخەکە لە کاتی جێگیرکردنی داواکارییەکەت بدە، و نیوەکەی تر کاتێک کاڵاکەت دەگاتە دەستت.',
      cta: 'ئێستا لە ئەپەکە داوا بکە',
      half1_title: 'نیوە ئێستا',
      half1_desc: 'لە کاتی پەسەندکردنی داواکارییەکەت دەیدەیت بۆ ئەوەی دەستبەجێ کاڵاکەت بۆ بکڕین.',
      half2_title: 'نیوە لە کاتی گەیشتن',
      half2_desc: 'کاتێک بارەکەت دەگاتە هەولێر و ڕادەستی تۆ دەکرێت، نیوەکەی تر دەدەیت.',
      guarantee: '١٠٠٪ گەرەنتی گەیشتن'
    },
    stores: {
      badge: 'فرۆشگا جیهانییەکان',
      title: 'ئێمە لە فرۆشگاکانی تورکیا، چین، دوبەی و هەموو جیهانەوە دەکڕین',
      subtitle: 'لە هەر فرۆشگایەکی ئۆنلاین کاڵاکەت هەڵبژێرە — ئێمە دەیکڕین و بە خێرایی دەیهێنینەوە بۆ کوردستان و عێراق.',
      turkey: {
        tag: 'گەیاندنی خێرا',
        title: 'تورکیا · Turkey',
        desc: 'جلوبەرگ، پێڵاو، جوانکاری و پێداویستی ناوماڵ لە بەناوبانگترین براندەکانی تورکیا.'
      },
      china: {
        tag: 'هەزاران کاڵا',
        title: 'چین · China',
        desc: 'ئەلیکترۆنیات، مۆدە، پێداویستی ڕۆژانە و کاڵای تایبەت ڕاستەوخۆ لە گەورەترین فرۆشگاکانی چینەوە.'
      },
      dubai: {
        tag: 'براندە ڕەسەنەکان',
        title: 'دوبەی · Dubai',
        desc: 'براندە جیهانییەکان، بۆن، کاتژمێر، مۆبایل و ئامێرە زیرەکەکان لە فرۆشگاکانی دوبەی و ئیماراتەوە.'
      },
      world: {
        tag: 'ئەمریکا و ئەوروپا',
        title: 'هەموو جیهان · Worldwide',
        desc: 'هەر ماڵپەڕێکی ئەمریکی، بەریتانی یان ئەوروپی هەڵبژێرە — تەنها لینکەکەی بنێرە و ئێمە بۆت دەکڕین.'
      }
    },
    app: {
      title: 'ئەپی شیپلی دابەزێنە و لە دیسکەڤەرەوە دەست پێ بکە',
      subtitle: 'هەموو خزمەتگوزارییەکانی «بۆم بکڕە»، «دیسکەڤەر»، «بۆم بدۆزەرەوە» و «دیاری بنێرە» لەگەڵ بەدواداچوونی ڕاستەوخۆ لەناو مۆبایلەکەتدایە.',
      feat1: 'دیسکەڤەر: بینینی نرخی کۆتایی کاڵاکان تا دەگاتە هەولێر',
      feat2: 'ناردنی لینک یان وێنەی شاشە بە چەند چرکەیەک',
      feat3: 'ئاگادارکردنەوەی ڕاستەوخۆ لە هەموو قۆناغەکانی کڕین و گەیاندن',
      ios_sub: 'دابەزاندن لە',
      android_soon: 'بەم زووانە · Coming Soon'
    },
    faq: {
      badge: 'پرسیارە باوەکان',
      title: 'وەڵامی هەموو پرسیارەکانت',
      subtitle: 'هەموو ئەوەی پێویستە بیزانیت دەربارەی کڕین و گەیاندن لەگەڵ شیپلی ئێکسپرێس.',
      q1: 'چۆن دەتوانم لە ڕێگەی شیپلی ئێکسپرێسەوە داواکاری بکەم؟',
      a1: 'زۆر ئاسانە! دەتوانیت ڕاستەوخۆ لە بەشی «دیسکەڤەر» لەناو ئەپەکەمان کاڵاکەت هەڵبژێریت، یان لە بەشی «بۆم بکڕە» لینکی کاڵاکە بنێریت، یان لە بەشی «بۆم بدۆزەرەوە» تەنها وێنەی شاشە (سکرینشۆت)ی کاڵاکە بنێریت و ئێمە بۆت دەکڕین.',
      q2: 'چۆن نرخی کۆتایی کاڵاکەم دەزانم؟',
      a2: 'لە بەشی دیسکەڤەری ناو ئەپ، نرخی کۆتایی گەیشتن بۆ هەولێر لەسەر هەموو کاڵایەک نووسراوە. بۆ لینک و سکرینشۆتیش، پێش کڕین یەک نرخی کۆتایی و تەواوت پێ دەڵێین بەبێ هیچ تێچوویەکی شاراوە.',
      q3: 'شێوازی پارەدانی «نیوە ئێستا، نیوە لە کاتی گەیشتن» چۆنە؟',
      a3: 'کاتێک داواکارییەکەت پەسەند دەکەیت تەنها ٥٠٪ی نرخەکە دەدەیت، و ٥٠٪ەکەی تر دەمێنێتەوە بۆ کاتی گەیشتنی کاڵاکەت بۆ هەولێر و وەرگرتنی لە دەستی خۆتدا.',
      q4: 'لە کام وڵات و فرۆشگایانەوە کاڵا دەکڕن؟',
      a4: 'ئێمە لە فرۆشگاکانی تورکیا، چین، دوبەی (ئیمارات)، ئەمریکا، بەریتانیا، ئەوروپا و هەموو ماڵپەڕە جیهانییەکانەوە کاڵا دەکڕین و دەیهێنینەوە.'
    },
    contact: {
      badge: 'پەیوەندیمان پێوە بکە',
      title: 'لە واتسئەپ و ئینستاگرام لەگەڵتانین',
      subtitle: 'لینک یان وێنەی کاڵاکەت بنێرە یان هەر پرسیارێکت هەیە ڕاستەوخۆ نامەمان بۆ بنێرە، تیمەکەمان بە خێرایی وەڵامت دەداتەوە.',
      whatsapp_label: 'واتسئەپ · WhatsApp',
      instagram_label: 'ئینستاگرام · Instagram',
      email_label: 'ئیمەیڵ · Email',
      address_label: 'ناونیشان · Location',
      address_val: 'شەقامی ٤٠ مەتری، بەرایەتی، نزیک فارما، هەولێر، هەرێمی کوردستان، عێراق'
    },
    office: {
      badge: 'ناونیشانی ئۆفیس',
      title: 'سەردانی ئۆفیسەکەمان بکە',
      address: 'شەقامی ٤٠ مەتری، بەرایەتی، نزیک فارما، هەولێر، هەرێمی کوردستان، عێراق',
      hours_label: 'کاتژمێرەکانی کارکردن · Hours',
      hours: 'شەممە–پێنجشەممە ٠٩:٠٠–١٨:٠٠، هەینی داخراوە',
      directions: 'ئاراستەی ڕێگا وەربگرە'
    },
    form: {
      title: 'داواکاری یان نامە بنێرە',
      subtitle: 'ڕاستەوخۆ دەچێت بۆ واتسئەپی شیپلی ئێکسپرێس',
      name: 'ناوی تەواو',
      phone: 'ژمارەی مۆبایل',
      service: 'جۆری خزمەتگوزاری',
      opt_shop: 'بۆم بکڕە (ناردنی لینک)',
      opt_discover: 'دیسکەڤەر (ناو ئەپ)',
      opt_find: 'بۆم بدۆزەرەوە (وێنەی شاشە)',
      opt_gift: 'دیاری بنێرە',
      link: 'لینکی کاڵا یان تێبینی',
      submit: 'ناردن لە ڕێگەی واتسئەپ'
    },
    footer: {
      tagline: 'تۆ هەڵبژێرە، ئێمە دەیکڕین و دەیهێنین — لە فرۆشگاکانی تورکیا، چین، دوبەی و هەموو جیهانەوە بۆ بەردەم دەرگای ماڵەوەت.',
      payment_note: '«نیوە ئێستا، نیوە لە کاتی گەیشتن»',
      links_title: 'بەستەرە خێراکان',
      connect_title: 'پەیوەندی',
      rights: '© 2026 Shiply Express — هەموو مافەکان پارێزراون.'
    }
  },

  ar: {
    meta: {
      title: 'شيبلي إكسبريس | أنت تختار، ونحن نشتريه ونوصله إليك — Shiply Express',
      description: 'أنت تختار، ونحن نشتريه ونوصله إليك. اختر المنتجات من قسم ديسكفر داخل التطبيق أو أرسل رابطًا أو لقطة شاشة — بسعر نهائي واحد ونظام الدفع النصف الآن والنصف عند الاستلام من تركيا والصين ودبي والعالم.'
    },
    loading: {
      tagline: 'اشترِ · أرسل · تتبّع'
    },
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      how: 'كيف يعمل',
      payment: 'الدفع',
      stores: 'المتاجر',
      app: 'تحميل التطبيق',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      cta: 'حمّل التطبيق'
    },
    hero: {
      badge: 'اختر من ديسكفر داخل التطبيق أو أرسل رابطًا',
      title: '«أنت تختار، ونحن نشتريه ونوصله إليك»',
      subtitle: 'اختر أي منتج من قسم ديسكفر داخل تطبيقنا مع السعر النهائي الواصل إلى أربيل، أو أرسل رابط المنتج أو لقطة شاشة — نحن نشتريه لك بسعر نهائي واحد ونوصله إلى باب منزلك.',
      cta_app: 'حمّل التطبيق',
      cta_message: 'راسلنا الآن',
      pill1: 'سعر نهائي واحد إلى أربيل',
      pill2: 'النصف الآن، والنصف عند الاستلام',
      pill3: 'تتبّع مباشر لحظة بلحظة',
      card_badge: 'ديسكفر · Discover',
      card_store: 'متجر عالمي · ديسكفر',
      card_final_label: 'السعر النهائي إلى أربيل',
      card_item_title: 'منتج مختار من ديسكفر',
      card_item_sub: 'شراء + توصيل إلى أربيل بدون أي رسوم خفية',
      card_all_in: 'السعر النهائي',
      card_pay_now: 'النصف الآن (٥٠٪)',
      card_pay_later: 'عند الاستلام (٥٠٪)',
      track_title: 'وصل إلى أربيل · SHP-48213',
      track_desc: 'مرحباً 👋 وصلت طلبيتك إلى أربيل وسنقوم بتوصيلها إليك اليوم 📦'
    },
    services: {
      badge: 'خدماتنا',
      title: 'أربع طرق سهلة للتسوق من جميع أنحاء العالم',
      subtitle: 'لا حاجة لبطاقة مصرفية أو حسابات وزن معقدة — فقط اختر منتجك ونحن نتولى الباقي.',
      s1: {
        tag: 'أرسل الرابط · Send a link',
        title: 'اشترِ لي · Shop for me',
        desc: 'انسخ رابط أي منتج من أي متجر إلكتروني عالمي وأرسله لنا عبر التطبيق أو واتساب؛ سنشتريه ونوصله إليك.',
        cta: 'أرسل رابطاً'
      },
      s2: {
        tag: 'السعر الواصل إلى أربيل موضح',
        title: 'ديسكفر · Discover',
        desc: 'تصفح مئات المنتجات المختارة داخل تطبيق شيبلي مع السعر النهائي الواصل إلى أربيل واطلبها بضغطة واحدة.',
        cta: 'استكشف في التطبيق'
      },
      s3: {
        tag: 'أرسل لقطة شاشة · Send a screenshot',
        title: 'ابحث لي عنه · Find it for me',
        desc: 'أعجبك منتج على إنستغرام أو تيك توك ولا تعرف أين يباع؟ فقط أرسل لقطة شاشة (سكرين شوت) وسيقوم فريقنا بإيجاده وشرائه لك.',
        cta: 'أرسل لقطة شاشة'
      },
      s4: {
        tag: 'هدية لأحبائك · Send a gift',
        title: 'أرسل هدية · Send a gift',
        desc: 'اختر أجمل الهدايا من المتاجر العالمية؛ نشتريها ونغلفها بعناية ونوصلها مباشرة إلى أحبائك.',
        cta: 'اختر هدية'
      }
    },
    how: {
      badge: 'كيف يعمل',
      title: 'من الاختيار حتى باب منزلك في ٣ خطوات',
      subtitle: 'اختر ← نشتريه بسعر نهائي واحد ← تستلمه مع تتبّع مباشر',
      step1: {
        title: '١. اختر منتجك',
        desc: 'اختر المنتج مباشرة من قسم ديسكفر داخل التطبيق، أو أرسل رابط المنتج أو لقطة شاشة لفريقنا.',
        foot: 'ديسكفر · رابط · لقطة شاشة'
      },
      step2: {
        title: '٢. نشتريه بسعر نهائي واحد',
        desc: 'قبل الشراء تحصل على سعر نهائي واضح وشامل حتى وصوله إلى أربيل، بدون مفاجآت أو رسوم إضافية عند الاستلام.',
        foot: 'سعر شامل وثابت'
      },
      step3: {
        badge: 'مباشر',
        title: '٣. استلمه مع تتبّع مباشر',
        desc: 'تابع طلبك خطوة بخطوة داخل تطبيق شيبلي وعبر إشعارات واتساب حتى يصل إلى يديك بأمان.',
        foot: 'إشعارات فورية عبر التطبيق وواتساب'
      }
    },
    payment: {
      badge: 'طريقة دفع مرنة وموثوقة',
      title: '«النصف الآن، والنصف عند الاستلام»',
      subtitle: 'لا داعي لدفع المبلغ كاملاً مقدماً. ادفع ٥٠٪ فقط عند تأكيد طلبك لنقوم بشرائه فوراً، وادفع الـ ٥٠٪ المتبقية عند وصول الطلب إليك.',
      cta: 'اطلب الآن عبر التطبيق',
      half1_title: 'النصف الآن',
      half1_desc: 'تدفع ٥٠٪ عند تأكيد الطلب ليبدأ فريقنا بشراء منتجك فوراً.',
      half2_title: 'النصف عند الاستلام',
      half2_desc: 'تدفع الـ ٥٠٪ المتبقية فقط عند وصول طلبك إلى أربيل واستلامه بيدك.',
      guarantee: 'ضمان وصول ١٠٠٪'
    },
    stores: {
      badge: 'المتاجر العالمية',
      title: 'نشتري من متاجر تركيا والصين ودبي وجميع أنحاء العالم',
      subtitle: 'تسوق من أشهر الماركات والمتاجر العالمية — نحن نشتريها ونوصلها إليك بسرعة وأمان.',
      turkey: {
        tag: 'توصيل سريع',
        title: 'تركيا · Turkey',
        desc: 'أزياء، أحذية، مستحضرات تجميل ومستلزمات المنزل من أشهر المتاجر التركية.'
      },
      china: {
        tag: 'آلاف المنتجات',
        title: 'الصين · China',
        desc: 'إلكترونيات، أزياء، ومنتجات متنوعة مباشرة من أكبر المنصات والمتاجر في الصين.'
      },
      dubai: {
        tag: 'ماركات أصلية',
        title: 'دبي · Dubai',
        desc: 'أرقى الماركات العالمية، العطور، الساعات، والأجهزة الذكية من متاجر دبي والإمارات.'
      },
      world: {
        tag: 'أمريكا وأوروبا',
        title: 'جميع أنحاء العالم · Worldwide',
        desc: 'اختر أي متجر أمريكي أو بريطاني أو أوروبي — أرسل الرابط ونحن نشتريه لك.'
      }
    },
    app: {
      title: 'حمّل تطبيق شيبلي وابدأ التسوق من ديسكفر',
      subtitle: 'جميع خدمات «اشترِ لي»، «ديسكفر»، «ابحث لي عنه»، و«أرسل هدية» مع التتبّع المباشر في تطبيق واحد.',
      feat1: 'ديسكفر: تصفح المنتجات مع السعر النهائي الواصل إلى أربيل',
      feat2: 'إرسال رابط أو لقطة شاشة خلال ثوانٍ',
      feat3: 'إشعارات وتتبّع مباشر لكل مرحلة من الشراء حتى التوصيل',
      ios_sub: 'حمّل من',
      android_soon: 'قريباً · Coming Soon'
    },
    faq: {
      badge: 'الأسئلة الشائعة',
      title: 'إجابات لجميع استفساراتك',
      subtitle: 'كل ما تحتاج معرفته حول الشراء والتوصيل مع شيبلي إكسبريس.',
      q1: 'كيف يمكنني الطلب عبر شيبلي إكسبريس؟',
      a1: 'بكل سهولة! يمكنك اختيار منتجك مباشرة من قسم «ديسكفر» داخل التطبيق، أو إرسال رابط المنتج عبر «اشترِ لي»، أو إرسال لقطة شاشة عبر «ابحث لي عنه» وسنقوم بشرائه وتوصيله لك.',
      q2: 'كيف أعرف التكلفة النهائية لطلبي؟',
      a2: 'في قسم ديسكفر داخل التطبيق، يظهر السعر النهائي الواصل إلى أربيل على كل منتج. وبالنسبة للروابط ولقطات الشاشة، نرسل لك سعراً نهائياً شاملاً قبل التأكيد بدون أي رسوم خفية.',
      q3: 'كيف يعمل نظام الدفع «النصف الآن، والنصف عند الاستلام»؟',
      a3: 'عند تأكيد طلبك تدفع ٥٠٪ فقط من القيمة الإجمالية، وتدفع الـ ٥٠٪ المتبقية عند وصول الطلب إلى أربيل واستلامه.',
      q4: 'من أي الدول والمتاجر تشترون؟',
      a4: 'نشتري من متاجر تركيا، الصين، دبي (الإمارات)، أمريكا، بريطانيا، أوروبا وكافة المتاجر العالمية.'
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'نحن معكم على واتساب وإنستغرام',
      subtitle: 'أرسل رابط أو صورة المنتج أو أي استفسار وسيرد عليك فريقنا فوراً.',
      whatsapp_label: 'واتساب · WhatsApp',
      instagram_label: 'إنستغرام · Instagram',
      email_label: 'البريد الإلكتروني · Email',
      address_label: 'العنوان · Location',
      address_val: 'شارع ٤٠ متري، برايتي، قرب فارما، أربيل، إقليم كوردستان، العراق'
    },
    office: {
      badge: 'موقع المكتب',
      title: 'تفضل بزيارة مكتبنا',
      address: 'شارع ٤٠ متري، برايتي، قرب فارما، أربيل، إقليم كوردستان، العراق',
      hours_label: 'ساعات العمل · Hours',
      hours: 'السبت–الخميس ٠٩:٠٠–١٨:٠٠، الجمعة مغلق',
      directions: 'احصل على الاتجاهات'
    },
    form: {
      title: 'أرسل طلباً أو رسالة',
      subtitle: 'يتم إرسالها مباشرة إلى واتساب شيبلي إكسبريس',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      service: 'نوع الخدمة',
      opt_shop: 'اشترِ لي (إرسال رابط)',
      opt_discover: 'ديسكفر (داخل التطبيق)',
      opt_find: 'ابحث لي عنه (لقطة شاشة)',
      opt_gift: 'أرسل هدية',
      link: 'رابط المنتج أو ملاحظة',
      submit: 'إرسال عبر واتساب'
    },
    footer: {
      tagline: 'أنت تختار، ونحن نشتريه ونوصله إليك — من متاجر تركيا والصين ودبي والعالم إلى باب منزلك.',
      payment_note: '«النصف الآن، والنصف عند الاستلام»',
      links_title: 'روابط سريعة',
      connect_title: 'تواصل معنا',
      rights: '© 2026 Shiply Express — جميع الحقوق محفوظة.'
    }
  },

  en: {
    meta: {
      title: 'Shiply Express | You choose, we buy it and bring it',
      description: 'You choose, we buy it and bring it. Choose products from Discover in the app or send a link or screenshot — one final price to Erbil and pay half now, half on delivery from Turkey, China, Dubai and worldwide.'
    },
    loading: {
      tagline: 'Buy · Ship · Track'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      how: 'How It Works',
      payment: 'Payment',
      stores: 'Stores',
      app: 'Download App',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Download the app'
    },
    hero: {
      badge: 'Choose from Discover in the app or send a link',
      title: '“You choose, we buy it and bring it”',
      subtitle: 'Pick any product from Discover in the Shiply app with the final price to Erbil already shown, or send us a link or screenshot — we buy it for you at one final price and deliver it to your door.',
      cta_app: 'Download the app',
      cta_message: 'Message us',
      pill1: 'One final price to Erbil',
      pill2: 'Half now, half on delivery',
      pill3: 'Live order tracking',
      card_badge: 'Discover · دیسکەڤەر',
      card_store: 'Global Store · Discover',
      card_final_label: 'Final price to Erbil',
      card_item_title: 'Featured Product on Discover',
      card_item_sub: 'Purchase + delivery to Erbil with zero hidden fees',
      card_all_in: 'All-in final price',
      card_pay_now: 'Half now (50%)',
      card_pay_later: 'On delivery (50%)',
      track_title: 'Arrived in Erbil · SHP-48213',
      track_desc: 'Hi 👋 Your order has arrived in Erbil and will be delivered today 📦'
    },
    services: {
      badge: 'Our Services',
      title: 'Four easy ways to shop from anywhere in the world',
      subtitle: 'No credit card or complicated weight calculations needed — just choose what you love and we handle everything.',
      s1: {
        tag: 'Send a link · بۆم بکڕە',
        title: 'Shop for me · بۆم بکڕە',
        desc: 'Paste a link from any online store worldwide in the app or on WhatsApp — we buy it for you at one final price and deliver it to your door.',
        cta: 'Send a link'
      },
      s2: {
        tag: 'Price to Erbil shown · دیسکەڤەر',
        title: 'Discover · دیسکەڤەر',
        desc: 'Browse curated products inside the Shiply app with the final total price to Erbil already shown — order in one tap.',
        cta: 'Explore in the app'
      },
      s3: {
        tag: 'Send a screenshot · بۆم بدۆزەرەوە',
        title: 'Find it for me · بۆم بدۆزەرەوە',
        desc: 'Saw something on Instagram or TikTok and don’t know where to buy it? Send us a screenshot and our team will find and buy it for you.',
        cta: 'Send a screenshot'
      },
      s4: {
        tag: 'Gift delivery · دیاری بنێرە',
        title: 'Send a gift · دیاری بنێرە',
        desc: 'Pick the perfect gift from global stores; we buy it, wrap it with care, and deliver it straight to your loved ones.',
        cta: 'Send a gift'
      }
    },
    how: {
      badge: 'How It Works',
      title: 'From choosing to your doorstep in 3 simple steps',
      subtitle: 'Choose → We buy it at one final price → You receive it with live tracking',
      step1: {
        title: '1. Choose your product',
        desc: 'Pick a product from Discover in the app, or send us a product link or screenshot.',
        foot: 'Discover · Link · Screenshot'
      },
      step2: {
        title: '2. We buy it at one final price',
        desc: 'Before we buy, you get one transparent, all-inclusive final price delivered to Erbil — no surprise fees on arrival.',
        foot: 'One clear, fixed final price'
      },
      step3: {
        badge: 'LIVE',
        title: '3. Receive it with live tracking',
        desc: 'Follow every step from purchase to delivery in Erbil with real-time updates in the Shiply app and on WhatsApp.',
        foot: 'Instant App & WhatsApp updates'
      }
    },
    payment: {
      badge: 'Simple & Trusted Payment',
      title: '“Half now, half on delivery”',
      subtitle: 'No need to pay the full amount upfront. Pay 50% when you confirm your order so we buy it right away, and pay the remaining 50% when your order arrives.',
      cta: 'Order now in the app',
      half1_title: 'Half now (50%)',
      half1_desc: 'Pay 50% upon confirming your order so our team purchases your item immediately.',
      half2_title: 'Half on delivery (50%)',
      half2_desc: 'Pay the remaining 50% only when your order arrives in Erbil and is handed to you.',
      guarantee: '100% Delivery Guarantee'
    },
    stores: {
      badge: 'Global Stores',
      title: 'We buy from stores in Turkey, China, Dubai and worldwide',
      subtitle: 'Choose from any online store worldwide — we buy it for you and bring it straight to Kurdistan and Iraq.',
      turkey: {
        tag: 'Fast Delivery',
        title: 'Turkey · تورکیا',
        desc: 'Fashion, footwear, beauty, and home essentials from Turkey’s most popular brands.'
      },
      china: {
        tag: 'Thousands of Items',
        title: 'China · چین',
        desc: 'Electronics, fashion, everyday essentials, and trending items straight from China’s biggest marketplaces.'
      },
      dubai: {
        tag: 'Authentic Brands',
        title: 'Dubai · دوبەی',
        desc: 'Global luxury brands, fragrances, watches, and smart devices from official Dubai & UAE stores.'
      },
      world: {
        tag: 'USA, UK & Europe',
        title: 'Worldwide · هەموو جیهان',
        desc: 'Pick any store in the USA, UK, or Europe — just send us the link and we’ll buy and bring it for you.'
      }
    },
    app: {
      title: 'Download the Shiply App & explore Discover',
      subtitle: 'All our services — Shop for me, Discover, Find it for me, and Send a gift — plus live tracking right in your pocket.',
      feat1: 'Discover: Browse products with the final price to Erbil shown',
      feat2: 'Send a product link or screenshot in seconds',
      feat3: 'Live tracking notifications from purchase to delivery',
      ios_sub: 'Download on the',
      android_soon: 'Coming Soon'
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about buying and delivery with Shiply Express.',
      q1: 'How do I place an order with Shiply Express?',
      a1: 'It’s easy! Choose a product directly from Discover inside our app, paste a product link in "Shop for me", or send a screenshot in "Find it for me" and we’ll buy and deliver it for you.',
      q2: 'How do I know the final price?',
      a2: 'In the Discover section of the app, the final price delivered to Erbil is shown upfront on every item. For links and screenshots, we give you one all-inclusive final price before you confirm.',
      q3: 'How does "Half now, half on delivery" work?',
      a3: 'You pay 50% of the total price to confirm your order so we purchase it immediately, and you pay the remaining 50% when you receive your order.',
      q4: 'Which countries and stores do you buy from?',
      a4: 'We buy from online stores in Turkey, China, Dubai (UAE), USA, UK, Europe, and worldwide.'
    },
    contact: {
      badge: 'Contact Us',
      title: 'Message us on WhatsApp & Instagram',
      subtitle: 'Send us a product link, screenshot, or any question — our team replies quickly.',
      whatsapp_label: 'WhatsApp · واتسئەپ',
      instagram_label: 'Instagram · ئینستاگرام',
      email_label: 'Email · ئیمەیڵ',
      address_label: 'Location · ناونیشان',
      address_val: '40 Meter Street, Brayati, near Pharma, Erbil, Kurdistan Region, Iraq'
    },
    office: {
      badge: 'Office Location',
      title: 'Visit our office',
      address: '40 Meter Street, Brayati, near Pharma, Erbil, Kurdistan Region, Iraq',
      hours_label: 'Opening Hours · کاتژمێرەکان',
      hours: 'Saturday–Thursday 09:00–18:00, Friday closed',
      directions: 'Get directions'
    },
    form: {
      title: 'Send an Order or Message',
      subtitle: 'Goes directly to Shiply Express on WhatsApp',
      name: 'Your Full Name',
      phone: 'Phone Number',
      service: 'Service Type',
      opt_shop: 'Shop for me (Send a link)',
      opt_discover: 'Discover (In the app)',
      opt_find: 'Find it for me (Send a screenshot)',
      opt_gift: 'Send a gift',
      link: 'Product Link or Note',
      submit: 'Send via WhatsApp'
    },
    footer: {
      tagline: 'You choose, we buy it and bring it — from stores in Turkey, China, Dubai and worldwide to your doorstep.',
      payment_note: '“Half now, half on delivery”',
      links_title: 'Quick Links',
      connect_title: 'Connect',
      rights: '© 2026 Shiply Express. All rights reserved.'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  // --- Mobile Menu Drawer ---
  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;
    mobileMenuOverlay.classList.remove('hidden');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      mobileMenuOverlay.classList.remove('opacity-0');
      mobileMenu.classList.remove('translate-x-full', 'rtl:-translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;
    mobileMenuOverlay.classList.add('opacity-0');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full', 'rtl:-translate-x-full');
    setTimeout(() => {
      mobileMenuOverlay.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- Sticky Navbar Scroll Shadow ---
  if (navbar) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 16) {
          navbar.classList.add('nav-scrolled');
        } else {
          navbar.classList.remove('nav-scrolled');
        }
      },
      { passive: true }
    );
  }

  // --- WhatsApp Form Submission ---
  const whatsappForm = document.getElementById('whatsapp-form');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value?.trim() || '';
      const phone = document.getElementById('form-phone')?.value?.trim() || '';
      const service = document.getElementById('form-service')?.value || '';
      const link = document.getElementById('form-link')?.value?.trim() || '';

      const text = encodeURIComponent(
        `Shiply Express Order / Inquiry\nName: ${name}\nPhone: ${phone}\nService: ${service}\nLink / Note: ${link}`
      );
      window.open(`https://wa.me/9647509490950?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  }

  // --- Language Switcher (Default: Kurdish RTL) ---
  window.setLanguage = function (lang) {
    if (!translations[lang]) return;

    const isRtl = lang === 'ku' || lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Update page title & meta descriptions in every language
    const meta = translations[lang].meta;
    if (meta) {
      document.title = meta.title;
      const descEl = document.getElementById('meta-description');
      const ogTitleEl = document.getElementById('og-title');
      const ogDescEl = document.getElementById('og-description');
      const twTitleEl = document.getElementById('twitter-title');
      const twDescEl = document.getElementById('twitter-description');

      if (descEl) descEl.setAttribute('content', meta.description);
      if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);
      if (ogDescEl) ogDescEl.setAttribute('content', meta.description);
      if (twTitleEl) twTitleEl.setAttribute('content', meta.title);
      if (twDescEl) twDescEl.setAttribute('content', meta.description);
    }

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = translations[lang];
      for (const p of parts) {
        val = val?.[p];
      }
      if (typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Update Kurdish vs Standard logos where applicable
    document.querySelectorAll('[data-logo-ku]').forEach((img) => {
      const kuSrc = img.getAttribute('data-logo-ku');
      const defSrc = img.getAttribute('data-logo-default');
      img.setAttribute('src', lang === 'ku' ? kuSrc : defSrc);
    });

    // Update active state on language buttons
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang-btn');
      if (btnLang === lang) {
        btn.classList.add('bg-royal', 'text-white');
        btn.classList.remove('text-night', 'hover:text-violet');
      } else {
        btn.classList.remove('bg-royal', 'text-white');
        btn.classList.add('text-night', 'hover:text-violet');
      }
    });
  };

  // Initialize with Kurdish (default language)
  window.setLanguage('ku');
});
