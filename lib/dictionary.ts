export type Locale = 'en' | 'ar';

export const content = {
  en: {
    nav: {
      home: 'Home',
      rhinoplasty: 'Rhinoplasty',
      botox: 'Botox',
      fillers: 'Facial Fillers',
      aesthetics: 'Aesthetics Hub',
      about: 'About Dr. Mohammad',
      contact: 'Contact & Booking',
      bookConsultation: 'Book Consultation',
    },
    common: {
      doctorName: 'Dr. Mohammad Bu Abbas',
      credentials: 'Consultant Otolaryngologist, Head & Neck and Facial Plastic Surgeon',
      mohNoticeTitle: 'Kuwait MOH Law 70/2020 Compliance Notice',
      mohNoticeText: 'Medical outcomes vary significantly based on patient anatomical baseline, tissue elasticity, and healing biology. Consultations require in-person clinical endoscopy and structural assessment prior to any surgical determination.',
      directCall: 'Clinic Line: +965 **** ****',
      whatsappBtn: 'WhatsApp Consultation',
      location: 'International Hospital Kuwait, Gulf Road, Salmiya',
      rights: 'All rights reserved. Regulated by Kuwait Ministry of Health.',
      learnMore: 'Learn More',
    },
    home: {
      heroTag: 'Consultant-Led Facial Plastic & ENT Surgery in Kuwait',
      heroTitle: 'Architectural Balance & Precision Facial Surgery',
      heroSubtitle: 'Combining board-certified otolaryngology surgical rigor with specialized facial aesthetics to achieve natural, functional, and long-lasting outcomes.',
      viewProcedures: 'Explore Procedures',
      meetDoctor: 'Read Professional Bio',
      specialtiesTitle: 'Core Clinical Focus Areas',
      specialtiesSubtitle: 'Strict adherence to functional airway preservation, natural facial contours, and tissue integrity.',
      cards: [
        {
          title: 'Structural Rhinoplasty',
          desc: 'Primary and revision nasal reshaping focused on airway dynamics, tip support, and natural profile harmony.',
          href: '/rhinoplasty-kuwait',
        },
        {
          title: 'Precision Neuromodulators (Botox)',
          desc: 'Targeted muscular relaxation for forehead lines, masseter hypertrophy, and Nefertiti neck contouring.',
          href: '/botox-kuwait',
        },
        {
          title: 'Harmonized Facial Fillers',
          desc: 'Anatomically guided hyaluronic acid augmentation for midface volume, jawline contour, and lips.',
          href: '/facial-fillers-kuwait',
        },
      ],
    },
    rhinoplasty: {
      metaTitle: 'Rhinoplasty in Kuwait | Dr. Mohammad Bu Abbas (Consultant ENT)',
      metaDescription: 'Evidence-based functional and aesthetic rhinoplasty performed by Consultant Surgeon Dr. Mohammad Bu Abbas in Kuwait. Airway preservation and natural balance.',
      tag: 'Consultant Facial Plastic & ENT Surgery',
      title: 'Precision Structural & Functional Rhinoplasty in Kuwait',
      subtitle: 'Combining anatomical preservation with airway engineering. Every nose surgery is executed with strict adherence to structural stability and uncompromised breathing.',
      modalitiesTitle: 'Surgical Modalities & Techniques',
      items: [
        {
          title: 'Functional Septorhinoplasty',
          desc: 'Simultaneous correction of the deviated septum, internal valve collapse, and aesthetic dorsal alignment to ensure optimal breathing.',
        },
        {
          title: 'Preservation & Structural Rhinoplasty',
          desc: 'Advanced dorsal preservation techniques that minimize cartilage resection, ensuring long-term structural stability without an artificial look.',
        },
        {
          title: 'Secondary (Revision) Rhinoplasty',
          desc: 'Complex reconstructive intervention for patients requiring structural rebuilding, cartilage grafting, and scar tissue management.',
        },
      ],
      faqsTitle: 'Rhinoplasty Clinical FAQs',
      faqs: [
        {
          q: 'What is the recovery timeline following structural rhinoplasty?',
          a: 'The thermoplastic splint is removed between days 7 and 9. Patients return to desk work and light social activities within 10 to 14 days. Deep lymphatic swelling resolves over a 12 to 18-month continuum.',
        },
        {
          q: 'Can functional airway obstruction be treated simultaneously?',
          a: 'Yes. As a Consultant Otolaryngologist (ENT), Dr. Bu Abbas evaluates both internal pathology (septal deviation, turbinate hypertrophy) and external aesthetics in a single procedure.',
        },
      ],
    },
    botox: {
      metaTitle: 'Botox Injections in Kuwait | Dr. Mohammad Bu Abbas',
      metaDescription: 'Physician-administered precision neuromodulator treatments in Kuwait. Facial wrinkle smoothing, masseter reduction, and Nefertiti neck lift.',
      tag: 'Non-Surgical Facial Aesthetics',
      title: 'Evidence-Based Neuromodulator (Botox) Treatments',
      subtitle: 'Targeted anatomical injection protocols designed to smooth expression lines and refine jawline balance while preserving complete natural facial animation.',
      indicationsTitle: 'Primary Clinical Applications',
      items: [
        {
          title: 'Upper Face Smoothing',
          desc: 'Micro-dosed treatment of dynamic glabella (frown lines), horizontal forehead creases, and crow’s feet without creating a frozen appearance.',
        },
        {
          title: 'Masseter Reduction & Bruxism',
          desc: 'Therapeutic relaxation of hyperactive masseter muscles to relieve nocturnal teeth grinding while providing lower facial slimming.',
        },
        {
          title: 'Nefertiti Neck & Jawline Lift',
          desc: 'Targeted platysmal band injections that release downward muscle pull, defining the jawline and smoothing the anterior neck.',
        },
      ],
      faqsTitle: 'Botox Clinical FAQs',
      faqs: [
        {
          q: 'How long do treatment results endure?',
          a: 'Neuromuscular modulation typically lasts between 3 to 6 months depending on individual metabolic clearance and muscle density.',
        },
        {
          q: 'Are treatments administered directly by Dr. Bu Abbas?',
          a: 'Yes. All anatomical assessments and facial injection procedures are performed exclusively by Dr. Mohammad Bu Abbas.',
        },
      ],
    },
    fillers: {
      metaTitle: 'Facial Fillers in Kuwait | Dr. Mohammad Bu Abbas',
      metaDescription: 'Hyaluronic acid dermal fillers guided by ENT deep facial anatomy expertise in Kuwait. Cheeks, jawline, chin, and lips.',
      tag: 'Architectural Facial Contouring',
      title: 'Precision Hyaluronic Acid Facial Fillers',
      subtitle: 'Restoring midface structural volume, harmonizing chin-jawline proportions, and hydrating lips using vascularly mapped, premium hyaluronic gels.',
      modalitiesTitle: 'Targeted Anatomic Restorations',
      items: [
        {
          title: 'Midface & Cheek Elevation',
          desc: 'Deep supraperiosteal bolus placement to re-support sagging malar fat pads and soften tear troughs naturally.',
        },
        {
          title: 'Mandibular & Chin Harmonization',
          desc: 'Sharp, masculine or contoured feminine jawline definition that balances nasal projection on the clinical facial profile.',
        },
        {
          title: 'Lip Architecture & Hydration',
          desc: 'Subtle vermilion border enhancement and symmetric volume restoration respecting golden-ratio lip proportions.',
        },
      ],
      faqsTitle: 'Facial Fillers Clinical FAQs',
      faqs: [
        {
          q: 'What safety precautions are taken against vascular complications?',
          a: 'Treatments utilize blunt microcannulas in high-risk zones, aspiration protocols, and strict anatomical landmarking backed by ENT surgical training.',
        },
        {
          q: 'How long do hyaluronic acid fillers maintain volume?',
          a: 'High G-prime structural fillers maintain structural contour for 12 to 18 months, naturally breaking down through bodily hyaluronidase.',
        },
      ],
    },
    aesthetics: {
      metaTitle: 'Facial Aesthetics Hub Kuwait | Dr. Mohammad Bu Abbas',
      metaDescription: 'Comprehensive surgical and non-surgical facial rejuvenation in Kuwait under Consultant ENT and Facial Plastics supervision.',
      title: 'Comprehensive Facial Aesthetics Hub',
      subtitle: 'An integrated surgical and minimally invasive philosophy. Discover treatments unified by deep facial anatomy mastery and natural restraint.',
      hubDesc: 'True facial elegance is founded on anatomical balance, bone framework alignment, and pristine skin envelope health.',
    },
    about: {
      metaTitle: 'About Dr. Mohammad Bu Abbas | Consultant ENT & Facial Plastics',
      metaDescription: 'Curriculum Vitae and credentials of Dr. Mohammad Bu Abbas, Consultant Otolaryngologist, Head & Neck Surgeon, and Facial Plastic specialist in Kuwait.',
      title: 'Dr. Mohammad Bu Abbas',
      subtitle: 'Consultant Otolaryngologist, Head & Neck and Facial Plastic Surgeon',
      bio: 'Dr. Mohammad Bu Abbas is a recognized Kuwaiti Consultant Surgeon specializing in Otolaryngology, Advanced Head & Neck Surgery, and Facial Plastic Surgery. With dual expertise in complex functional airway restoration and refined aesthetic architecture, his clinical practice centers on long-term safety, anatomical preservation, and patient-centered ethics.',
      credentialsHeading: 'Clinical Credentials & Affiliations',
      creds: [
        'Consultant Otolaryngologist, Head & Neck Surgeon',
        'Specialist in Facial Plastic and Reconstructive Surgery',
        'Attending Consultant at International Hospital Kuwait',
        'Registered with Kuwait Ministry of Health (MOH)',
        'Wikidata Entity: Q102215522 | ORCID: 0000-0002-3920-5695',
      ],
    },
    contact: {
      metaTitle: 'Contact & Clinical Appointments | Dr. Mohammad Bu Abbas',
      metaDescription: 'Book an in-person clinical consultation with Dr. Mohammad Bu Abbas at the International Hospital Kuwait. Direct WhatsApp and phone booking.',
      title: 'Clinical Consultation Booking',
      subtitle: 'Schedule a comprehensive in-person anatomical evaluation and consultation in Kuwait.',
      formName: 'Full Name',
      formPhone: 'Phone / WhatsApp Number',
      formProcedure: 'Procedure of Interest',
      formNotes: 'Clinical Questions / Notes',
      formSubmit: 'Submit Consultation Request',
      clinicAddress: 'Salmiya, Gulf Road, International Hospital Kuwait',
      hours: 'Sunday – Thursday: 9:00 AM – 8:00 PM',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      rhinoplasty: 'تجميل الأنف',
      botox: 'البوتوكس',
      fillers: 'الفيلر الطبي',
      aesthetics: 'مركز التجميل',
      about: 'د. محمد بو عباس',
      contact: 'الحجز والتواصل',
      bookConsultation: 'حجز استشارة',
    },
    common: {
      doctorName: 'د. محمد بو عباس',
      credentials: 'استشاري جراحة الأنف والأذن والحنجرة وجراحة تجميل الوجه والرأس والرقبة',
      mohNoticeTitle: 'إشعار الامتثال لقوانين وزارة الصحة الكويتية (قانون 70/2020)',
      mohNoticeText: 'تختلف النتائج الطبية والجراحية بين مريض وآخر تبعاً للسيرة المرضية وسماكة الأنسجة والتعافي البيولوجي. لا يتم إقرار أي تدخل جراحي إلا بعد إجراء الفحص الإكلينيكي وتنظير الأنف الدقيق داخل العيادة.',
      directCall: 'العيادة: **** **** 965+',
      whatsappBtn: 'واتساب العيادة المباشر',
      location: 'مستشفى طيبة / المستشفى الدولي، شارع الخليج العربي، السالمية، الكويت',
      rights: 'جميع الحقوق محفوظة. خاضع لإشراف ولوائح وزارة الصحة في دولة الكويت.',
      learnMore: 'المزيد من التفاصيل',
    },
    home: {
      heroTag: 'جراحة تجميل الوجه والأنف بإشراف استشاري كويتي',
      heroTitle: 'التوازن البنيوي والدقة الجراحية لملامح الوجه',
      heroSubtitle: 'الجمع بين الدقة التشريحية لجراحة الأنف والأذن والحنجرة والجماليات الطبيعية للوجه لتحقيق نتائج وظيفية وشكلية متوازنة تدوم طويلاً.',
      viewProcedures: 'استعراض العمليات الجراحية',
      meetDoctor: 'السيرة المهنية للاستشاري',
      specialtiesTitle: 'التخصصات الجراحية والتجميلية الأساسية',
      specialtiesSubtitle: 'الالتزام التام بسلامة مجرى التنفس، الحفاظ على الهيكل الغضروفي، وتجنب التغيير المصطنع للملامح.',
      cards: [
        {
          title: 'جراحة تجميل وترميم الأنف',
          desc: 'عمليات الأنف الوظيفية والجمالية الأولية والترميمية مع التركيز على ديناميكية التنفس وثبات الغضاريف.',
          href: '/rhinoplasty-kuwait',
        },
        {
          title: 'حقن البوتوكس الإكلينيكي',
          desc: 'إرخاء دقيق للعضلات التعبيرية لعلاج تجاعيد الجبهة، وتصغير عضلات الفك (الصرير)، وشد الرقبة نفرتيتي.',
          href: '/botox-kuwait',
        },
        {
          title: 'الفيلر التناسقي الموجه تشريحياً',
          desc: 'استعادة أحجام منتصف الوجه وخط الفك والذقن وتحديد الشفاه بجل الهيالورونيك المعتمد وفق نسب الجمال الطبيعية.',
          href: '/facial-fillers-kuwait',
        },
      ],
    },
    rhinoplasty: {
      metaTitle: 'عمليات تجميل وترميم الأنف في الكويت | د. محمد بو عباس',
      metaDescription: 'جراحة تجميل وتعديل الأنف الوظيفية والترميمية بإشراف د. محمد بو عباس، استشاري جراحة الأنف والأذن والحنجرة وجراحة الوجه في الكويت.',
      tag: 'جراحة دقيقة بإشراف استشاري متخصص',
      title: 'جراحة تجميل وتعديل الأنف الوظيفي في دولة الكويت',
      subtitle: 'موازنة دقيقة بين الحفاظ على مجرى التنفس والتناسق الطبيعي لملامح الوجه. تجرى الجراحة وفق أحدث تقنيات الحفاظ الهيكلي لمنع التشوهات.',
      modalitiesTitle: 'المحاور الجراحية الدقيقة',
      items: [
        {
          title: 'رأب الوتيرة وتجميل الأنف الوظيفي (Septorhinoplasty)',
          desc: 'تعديل انحراف الحاجز الأنفي وعلاج صمامات الأنف الداخلية لتحسين مجرى الهواء والتنفس بالتوازي مع تناسق المظهر الخارجي.',
        },
        {
          title: 'تقنيات الحفاظ الهيكلي (Preservation Rhinoplasty)',
          desc: 'الحفاظ على جسر الأنف والغضاريف الطبيعية مع تقليل الاستئصال الجراحي لضمان مظهر متناسق ومتين مدى الحياة.',
        },
        {
          title: 'ترميم وتصحيح الأنف الثانوي (Revision Rhinoplasty)',
          desc: 'إعادة بناء حالات الأنف المعقدة بالاعتماد على رقع الغضاريف التخصصية واستعادة التوازن الوظيفي والمظهري المفقود.',
        },
      ],
      faqsTitle: 'الأسئلة السريرية الشائعة حول الأنف',
      faqs: [
        {
          q: 'ما هي الفترة المطلوبة للتعافي من العملية؟',
          a: 'تُرفع الجبيرة الخارجية عادةً بين اليومين السابع والتاسع. تبلغ فترة الابتعاد عن الأنشطة الاجتماعية قرابة 10 إلى 14 يوماً، بينما يستمر اختفاء التورم الدقيق على مدار 12 إلى 18 شهراً.',
        },
        {
          q: 'هل يمكن معالجة انسداد وصعوبة التنفس بالتزامن مع التجميل؟',
          a: 'نعم. كطبيب استشاري في جراحة الأنف والأذن والحنجرة والوجه، يقوم د. محمد بو عباس بتشخيص المشكلات الهيكلية الداخلية وتصحيحها في نفس العملية.',
        },
      ],
    },
    botox: {
      metaTitle: 'حقن البوتوكس في الكويت | د. محمد بو عباس',
      metaDescription: 'جلسات علاج تجاعيد الوجه وتصغير الفك وشد نفرتيتي بإشراف د. محمد بو عباس، استشاري جراحة الوجه والأنف والأذن والحنجرة في الكويت.',
      tag: 'إجراءات تجميلية غير جراحية',
      title: 'حقن البوتوكس الموجه تشريحياً بدقة متناهية',
      subtitle: 'بروتوكولات علاجية دقيقة لتخفيف تجاعيد التعبير والخطوط الدقيقة مع الحفاظ التام على حركة وتعابير الوجه الطبيعية.',
      indicationsTitle: 'التطبيقات الإكلينيكية الرئيسية',
      items: [
        {
          title: 'علاج تجاعيد الجزء العلوي من الوجه',
          desc: 'جرعات دقيقة وموزعة طبياً لعلاج خطوط الجبهة العرضية، خطوط العبوس بين الحاجبين، وتجاعيد زوايا العينين.',
        },
        {
          title: 'حقن عضلات المضغ (الماستر) وتنحيف الفك',
          desc: 'علاج فعال لصرير الأسنان وتخفيف آلام مفصل الفك بالتزامن مع تصغير عضلة المضغ لمنح الجزء السفلي مظهراً أكثر رشاقة.',
        },
        {
          title: 'شد الرقبة وتحديد الفك (تقنية نفرتيتي)',
          desc: 'إرخاء الأحزمة العضلية المشدودة في الرقبة لإبراز زاوية الفك السفلي وتحسين انسيابية العنق.',
        },
      ],
      faqsTitle: 'الأسئلة الشائعة حول البوتوكس',
      faqs: [
        {
          q: 'كم تدوم نتائج حقن البوتوكس؟',
          a: 'تدوم النتائج عادة بين 3 إلى 6 أشهر اعتماداً على طبيعة نشاط العضلات ومعدل حرق الجسم للمادة.',
        },
        {
          q: 'هل يقوم الاستشاري د. محمد بو عباس بالحقن بنفسه؟',
          a: 'نعم، تتم كافة الفحوصات والإجراءات الطبية وحقن الوجه بيد د. محمد بو عباس حصراً لضمان أعلى مستويات الأمان والتحكم التشريحي.',
        },
      ],
    },
    fillers: {
      metaTitle: 'حقن الفيلر التجميلي في الكويت | د. محمد بو عباس',
      metaDescription: 'استعادة أحجام الوجه وتحديد الفك والشفاه بحمض الهيالورونيك الطبي برؤية استشاري جراحة وجه وأنف وأذن وحنجرة في الكويت.',
      tag: 'تحديد واستعادة الأحجام الوجهية',
      title: 'حقن الفيلر الطبي وفق معايير الأمان التشريحي',
      subtitle: 'استعادة دعامات الوجه الطبيعية، إبراز زوايا الفك والذقن، وترطيب وتحديد الشفاه بمنتجات هيالورونيك معتمدة عالمياً وبأيدي جراح خبير بالأوعية الدموية.',
      modalitiesTitle: 'مناطق الحقن والترميم الأساسية',
      items: [
        {
          title: 'رفع ودعم منتصف الوجه والخدين',
          desc: 'حقن عميق فوق العظم لإعادة رفع وسائد الدهون الهابطة وتخفيف خطوط الابتسامة ومحجر العينين دون انتفاخ مبالغ فيه.',
        },
        {
          title: 'تحديد وتناسق خط الفك والذقن',
          desc: 'تحديد حواف الفك بدقة لخلق توازن جانبي وأمامي مع بروز الأنف وتناسق ملامح الوجه.',
        },
        {
          title: 'تنسيق وترطيب الشفاه',
          desc: 'إبراز الإطار الطبيعي للشفاه وإعادة حجمها المتناسق باحترام النسب الجمالية الذهبية للوجه.',
        },
      ],
      faqsTitle: 'الأسئلة الشائعة حول الفيلر',
      faqs: [
        {
          q: 'ما هي معايير الأمان المتبعة لتفادي المضاعفات الوعائية؟',
          a: 'يتم استخدام الكانيولا غير الحادة في المناطق الدقيقة، والفحص التشريحي الوعائي المسبق المبني على التخصص الجراحي الدقيق لمنطقة الوجه والرقبة.',
        },
        {
          q: 'ما هي المدة التي يستمر فيها الفيلر في الوجه؟',
          a: 'يستمر فيلر الهيالورونيك الهيكلي لمدة تتراوح بين 12 إلى 18 شهراً، ويتحلل تدريجياً وبشكل طبيعي في الجسم.',
        },
      ],
    },
    aesthetics: {
      metaTitle: 'مركز تجميل الوجه التخصصي في الكويت | د. محمد بو عباس',
      metaDescription: 'رؤية متكاملة لجمال الوجه تجمع بين الجراحة الدقيقة والإجراءات غير الجراحية بإشراف د. محمد بو عباس.',
      title: 'مركز العناية وتجميل الوجه المتكامل',
      subtitle: 'نهج طبي موحد يجمع بين الجراحة الترميمية الدقيقة والإجراءات التجميلية التحسينية الخاضعة لمعايير الأمان القصوى.',
      hubDesc: 'الجمال الحقيقي يبدأ من الانسجام الهيكلي واستقرار مجرى التنفس، ويتكامل بالعناية التحفظية الهادئة.',
    },
    about: {
      metaTitle: 'السيرة المهنية | د. محمد بو عباس - استشاري جراحة الوجه والأنف',
      metaDescription: 'المؤهلات العلمية والخبرات السريرية للدكتور محمد بو عباس، استشاري جراحة الأنف والأذن والحنجرة وجراحة تجميل الوجه في الكويت.',
      title: 'د. محمد بو عباس',
      subtitle: 'استشاري جراحة الأنف والأذن والحنجرة وجراحة تجميل الوجه والرأس والرقبة',
      bio: 'الدكتور محمد بو عباس استشاري كويتي بارز متخصص في جراحة الأنف والأذن والحنجرة وجراحة تجميل وترميم الوجه. يجمع في ممارسته السريرية بين الحلول الوظيفية الدقيقة لمجرى التنفس والمعايير التجميلية المتوازنة، مع الالتزام التام بالقيم الأخلاقية الطبية الصارمة وأحدث ما توصلت إليه الأبحاث العلمية الموثقة.',
      credentialsHeading: 'المؤهلات المهنية والاعتمادات',
      creds: [
        'استشاري جراحة الأنف والأذن والحنجرة وجراحة الرأس والرقبة',
        'تخصص دقيق في جراحة تجميل وترميم الوجه والأنف',
        'استشاري معالج في المستشفى الدولي / مستشفى طيبة - الكويت',
        'طبيب مرخص ومسجل لدى وزارة الصحة بدولة الكويت',
        'معرف ويكي بيانات: Q102215522 | معرف الباحثين ORCID: 0000-0002-3920-5695',
      ],
    },
    contact: {
      metaTitle: 'حجز المواعيد والتواصل | عيادة د. محمد بو عباس في الكويت',
      metaDescription: 'احجز موعد استشارتك الطبية مع د. محمد بو عباس في المستشفى الدولي بالكويت. تواصل مباشر عبر الهاتف أو الواتساب.',
      title: 'حجز الاستشارات الطبية والسريرية',
      subtitle: 'يرجى تعبئة النموذج لحجز موعد فحص وتقييم شامل مع الاستشاري د. محمد بو عباس.',
      formName: 'الاسم الثلاثي',
      formPhone: 'رقم الهاتف / الواتساب',
      formProcedure: 'الإجراء أو الاستشارة المطلوبة',
      formNotes: 'ملاحظات أو تفاصيل الحالة الطبية',
      formSubmit: 'إرسال طلب الحجز',
      clinicAddress: 'الكويت، السالمية، شارع الخليج العربي، المستشفى الدولي',
      hours: 'من الأحد إلى الخميس: ٩:٠٠ صباحاً – ٨:٠٠ مساءً',
    },
  },
};
