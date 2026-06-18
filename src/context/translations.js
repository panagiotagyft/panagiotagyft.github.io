// translations.js
const translations = {
  en: {
    aboutMe: "ABOUT ME",
    publications_title: "PUBLICATIONS",
    mySkills: "My Skills",
    myPinnedProjects: "My Pinned Projects",
    name: "Panagiota Gyftou",
    jobTitle: "HPC Users & Application Support Engineer",
    descriptionParagraphs: [
      "I hold a Bachelor's degree in Informatics and Telecommunications from the National and Kapodistrian University of Athens (NKUA) and I am currently pursuing a Master's degree in Informatics at the same department, specializing in Data, Information, and Knowledge Management.",
      "At the same time, I am working in the field of High - Performance Computing(HPC), focusing on accelerating computations for Machine Learning(ML) and Artificial Intelligence(AI) applications.",
      "I have experience with tools such as Python, TensorFlow, Scikit- learn, and PostgreSQL, which I have utilized in projects involving data prediction, text classification, and big data analytics.",
    ],
    skillsButton: "Skills",
    portfolioButton: "My Portfolio",
    datapublications: "Publications", 
    publicationsList: [
      {
        year: 2026,
        citations: [
          {
            text: "Gyftou, P., Blackwell, R.E., Koubarakis, M., and Cohn, A.G., 2026. A Cross-Linguistic Evaluation of Cardinal Direction Reasoning in LLMs. Conference on Spatial Information Theory (COSIT 2026) — To Appear",
            // links: [
            //   { label: "Preprint", url: "https://arxiv.org/abs/...your-paper-id..." },
            //   { label: "Code", url: "https://github.com/your-username/your-repo" }
            // ]
          },
          // {
          //   text: "paper 2",
          //   links: [
          //     { label: "Preprint", url: "https://arxiv.org/abs/...your-paper-id..." },
          //     { label: "Code", url: "https://github.com/your-username/your-repo" }
          //   ]
          // }
        ]
      },
      // { year: 2025, citations: [          {
      //       text: "Άλλο paper...",
      //       links: [
      //         { label: "Preprint", url: "https://arxiv.org/abs/...your-paper-id..." },
      //         { label: "Code", url: "https://github.com/your-username/your-repo" }
      //       ]
      //     }] 
      // }
    ],
  },
  gr: {
    aboutMe: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ",
    publications_title: "ΔΗΜΟΣΙΕΥΣΕΙΣ",
    mySkills: "Οι Δεξιότητές μου",
    myPinnedProjects: "Τα Προτεινόμενα Έργα μου",
    name: "Παναγιώτα Γύφτου",
    jobTitle: "Μηχανικός Υποστήριξης Χρηστών HPC & Εφαρμογών",
    descriptionParagraphs: [
        "Είμαι απόφοιτη του Τμήματος Πληροφορικής και Τηλεπικοινωνιών του ΕΚΠΑ και συνεχίζω τις σπουδές μου στο ίδιο τμήμα, παρακολουθώντας το μεταπτυχιακό πρόγραμμα Πληροφορική με κατεύθυνση τη Διαχείριση Δεδομένων, Πληροφορίας και Γνώσης.",
        "Παράλληλα, εργάζομαι στον τομέα του High-Performance Computing (HPC), με έμφαση στην επιτάχυνση υπολογισμών για εφαρμογές Μηχανικής Μάθησης (ML) και Τεχνητής Νοημοσύνης (AI).",
        "Διαθέτω εμπειρία σε εργαλεία όπως Python, TensorFlow, Scikit-learn και PostgreSQL, τα οποία έχω αξιοποιήσει σε έργα πρόβλεψης δεδομένων, ταξινόμησης κειμένου και ανάλυσης μεγάλων δεδομένων (Big Data Analytics)."
    ],
    skillsButton: "ΔΕΞΙΟΤΗΤΕΣ",
    portfolioButton: "ΧΑΡΤΟΦΥΛΑΚΙΟ",
    datapublications: "Δημοσιεύσεις", 
    
    publicationsList: [
      {
        year: 2026,
        citations: [
          {
            text: "Gyftou, P., Blackwell, R.E., Koubarakis, M., and Cohn, A.G., 2026. A Cross-Linguistic Evaluation of Cardinal Direction Reasoning in LLMs. Conference on Spatial Information Theory (COSIT 2026) — To Appear",
          },
        ]
      },
    ],
  }
};

export default translations;
