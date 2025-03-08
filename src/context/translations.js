// translations.js
const translations = {
  en: {
    aboutMe: "ABOUT ME",
    visualization: "VISUALIZATION",
    sources_title: "SOURCES",
    mySkills: "My Skills",
    myPinnedProjects: "My Pinned Projects",
    name: "I'm Panagiota Gyftou",
    jobTitle: "HPC Users & Application Support Engineer",
    descriptionParagraphs: [
      "I hold a Bachelor's degree in Informatics and Telecommunications from the National and Kapodistrian University of Athens (NKUA) and I am currently pursuing a Master's degree in Informatics at the same department, specializing in Data, Information, and Knowledge Management.",
      "At the same time, I am working in the field of High - Performance Computing(HPC), focusing on accelerating computations for Machine Learning(ML) and Artificial Intelligence(AI) applications.",
      "I have experience with tools such as Python, TensorFlow, Scikit- learn, and PostgreSQL, which I have utilized in projects involving data prediction, text classification, and big data analytics.",
    ],
    skillsButton: "Skills",
    portfolioButton: "My Portfolio",
    dataVisualization: "Data-Driven Visualization",
    visualizationDescription: [
      "This visualization is particularly interesting as it presents complex data in an immediately comprehensible manner. It leverages various visualization techniques to highlight trends and the severity of wars over time, spanning from 1800 to 2011. The title Combatant deaths in conventional wars, 1800–2011 clarifies that the graph focuses exclusively on combatant losses, excluding civilian deaths, which often significantly increase the total casualty count.",  
      "One of the elements that make it stand out is the use of circle size to represent the number of casualties. Larger circles correspond to higher losses, allowing the viewer to instantly identify the most devastating conflicts, such as the World Wars. This approach facilitates an intuitive understanding of the scale of events without requiring the reading of exact figures.",  
      "The chronological arrangement along the horizontal axis enables the tracking of warfare activity over time, while the clear distinction between interstate and civil wars helps differentiate conflict types. Additionally, the inclusion of a range in casualty estimates ensures transparency and realistically conveys the uncertainty often associated with historical data.",  
      "Overall, this visualization stands out for its clarity, accuracy, and effective use of color and space, offering a narrative-driven approach that enhances the comprehension of information."
    ],
    sources: "Sources",
    sourcesList: [
      { "name": "React", "link": "https://react.dev/", "license": "MIT" },
      { "name": "React Icons", "link": "https://react-icons.github.io/react-icons/", "license": "MIT" },
      { "name": "Material UI", "link": "https://mui.com/", "license": "MIT" },
      { "name": "React Bootstrap", "link": "https://react-bootstrap.github.io/", "license": "MIT" },
      { "name": "React Router DOM", "link": "https://reactrouter.com/", "license": "MIT" }
    ],
    hoverText: "Hover: Shapes change color.",
    clickText: "Left click: Hides the shape.",
    rightClickText: "Right click: Pause/Resume the shapes.",
  },
  gr: {
    aboutMe: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ",
    visualization: "ΟΠΤΙΚΟΠΟΙΗΣΗ",
    sources_title: "ΠΗΓΕΣ",
    mySkills: "Οι Δεξιότητές μου",
    myPinnedProjects: "Τα Προτεινόμενα Έργα μου",
    name: "Είμαι η Παναγιώτα Γύφτου",
    jobTitle: "Μηχανικός Υποστήριξης Χρηστών HPC & Εφαρμογών",
    descriptionParagraphs: [
        "Είμαι απόφοιτη του Τμήματος Πληροφορικής και Τηλεπικοινωνιών του ΕΚΠΑ και συνεχίζω τις σπουδές μου στο ίδιο τμήμα, παρακολουθώντας το μεταπτυχιακό πρόγραμμα Πληροφορική με κατεύθυνση τη Διαχείριση Δεδομένων, Πληροφορίας και Γνώσης.",
        "Παράλληλα, εργάζομαι στον τομέα του High-Performance Computing (HPC), με έμφαση στην επιτάχυνση υπολογισμών για εφαρμογές Μηχανικής Μάθησης (ML) και Τεχνητής Νοημοσύνης (AI).",
        "Διαθέτω εμπειρία σε εργαλεία όπως Python, TensorFlow, Scikit-learn και PostgreSQL, τα οποία έχω αξιοποιήσει σε έργα πρόβλεψης δεδομένων, ταξινόμησης κειμένου και ανάλυσης μεγάλων δεδομένων (Big Data Analytics)."
    ],
    skillsButton: "ΔΕΞΙΟΤΗΤΕΣ",
    portfolioButton: "ΧΑΡΤΟΦΥΛΑΚΙΟ",
    dataVisualization: "Οπτικοποίηση με Δεδομένα",
    visualizationDescription: [
      "Αυτή η οπτικοποίηση είναι ιδιαίτερα ενδιαφέρουσα, καθώς παρουσιάζει σύνθετα δεδομένα με τρόπο άμεσα κατανοητό. Αξιοποιεί διάφορες τεχνικές απεικόνισης για να αναδείξει τις τάσεις και τη σοβαρότητα των πολέμων διαχρονικά, από το 1800 έως το 2011. Ο τίτλος Combatant deaths in conventional wars, 1800–2011 αποσαφηνίζει ότι η γραφική παράσταση εστιάζει αποκλειστικά στις απώλειες μαχητών, αποκλείοντας τους θανάτους αμάχων, οι οποίοι συχνά αυξάνουν δραματικά τον συνολικό απολογισμό των θυμάτων.",
      "Ένα από τα στοιχεία που την καθιστούν ξεχωριστή είναι η χρήση του μεγέθους των κύκλων για την αναπαράσταση του αριθμού των απωλειών.Οι μεγαλύτεροι κύκλοι αντιστοιχούν σε υψηλότερες απώλειες, επιτρέποντας στον αναγνώστη να εντοπίσει άμεσα τις πιο καταστροφικές συγκρούσεις, όπως οι Παγκόσμιοι Πόλεμοι.Αυτή η προσέγγιση διευκολύνει την κατανόηση της κλίμακας των γεγονότων χωρίς την ανάγκη ανάγνωσης ακριβών αριθμών.",
      "Η χρονολογική διάταξη στον οριζόντιο άξονα επιτρέπει την παρακολούθηση της εξέλιξης της πολεμικής δραστηριότητας στον χρόνο, ενώ η σαφής διάκριση μεταξύ διακρατικών και εμφυλίων πολέμων βοηθά στη διαφοροποίηση των τύπων συγκρούσεων. Επιπλέον, η παροχή εύρους στις εκτιμήσεις των απωλειών εξασφαλίζει διαφάνεια και αποτυπώνει ρεαλιστικά την αβεβαιότητα που συχνά συνοδεύει τα ιστορικά δεδομένα.",
      "Συνολικά, αυτή η οπτικοποίηση ξεχωρίζει για τη σαφήνεια, την ακρίβεια και την αποτελεσματική χρήση χρώματος και χώρου, προσφέροντας μια αφηγηματική προσέγγιση που διευκολύνει την κατανόηση των πληροφοριών.",
    ],
    sources: "Πηγές",
    sourcesList: [
      { "name": "React", "link": "https://react.dev/", "license": "MIT" },
      { "name": "React Icons", "link": "https://react-icons.github.io/react-icons/", "license": "MIT" },
      { "name": "Material UI", "link": "https://mui.com/", "license": "MIT" },
      { "name": "React Bootstrap", "link": "https://react-bootstrap.github.io/", "license": "MIT" },
      { "name": "React Router DOM", "link": "https://reactrouter.com/", "license": "MIT" }
    ],
    hoverText: "Hover: Τα σχήματα αλλάζουν χρώμα.",
    clickText: "Αριστερό κλικ: Κρύβει το σχήμα.",
    rightClickText: "Δεξί κλικ: Παύση/Συνέχιση των σχημάτων.",
  }
};

export default translations;
