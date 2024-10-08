const quizData = [
    {
        question: "قواعد البيانات Data Base هي مجموعة من البيانات المخزنة ضمن .......",
        answers: ["ملفات", "جداول", "برامج", "أرشيف"],
        correctAnswer: 1,
    },
    {
        question: "برنامج Microsoft Access هو برنامج متخصص في:",
        answers: ["معالجة الكلمات", "الجداول الحسابية", "قواعد البيانات", "العروض التقديمية"],
        correctAnswer: 2,
    },
    {
        question: "المفتاح الأساسي Primary Key هو عبارة عن ....",
        answers: ["سجل يحتوي على بيانات رقمية أو نصية فريدة لا تتكرر", "حقل يحتوي على بيانات رقمية أو نصية فريدة لا تتكرر", "جدول يحتوي على بيانات رقمية أو نصية فريدة لا تتكرر", "ملف يحتوي على بيانات رقمية أو نصية فريدة لا تتكرر"],
        correctAnswer: 1,
    },
    {
        question: "اختر العملية التي تتيح لك استيراد بيانات خارجية إلى برنامج الأكسس:",
        answers: ["Export", "Import", "Save", "Relationships"],
        correctAnswer: 1,
    },
    {
        question: "يربط بين جدولين أو أكثر بواسطة إدراج حقول المفاتيح الأساسية لكل جدول:",
        answers: ["النموذج", "الاستعلام", "جدول الوصل", "التقرير"],
        correctAnswer: 2,
    },
    {
        question: "يسمى الحقل الذي يوضع فيه القيمة بعد حسابها باسم ....",
        answers: ["حقل ارتباط تشعبي", "حقل ترقيم تلقائي", "حقل محوسب", "مفتاح أساسي"],
        correctAnswer: 2,
    },
    {
        question: "نوع البيانات المستخدمة في تخزين النصوص الطويلة والتي تتجاوز 255 حرف:",
        answers: ["نص مختصر Short Text", "ترقيم تلقائي AutoNumber", "رقم Number", "نص طويل Long Text"],
        correctAnswer: 3,
    },
    {
        question: "نوع البيانات المستخدمة في تخزين البيانات المنطقية:",
        answers: ["نص مختصر Short Text", "ترقيم تلقائي AutoNumber", "رقم Number", "نعم/لا Yes/No"],
        correctAnswer: 3,
    },
    {
        question: "نوع البيانات المستخدمة في تخزين البيانات النقدية:",
        answers: ["نص مختصر Short Text", "عملة Currency", "رقم Number", "نعم/لا Yes/No"],
        correctAnswer: 1,
    },
    {
        question: "تستخدم للإجابة عن سؤال محدد أو إجراء عملية حسابية أو استرجاع بيانات من جدول:",
        answers: ["النماذج Forms", "التقارير Reports", "الاستعلامات Queries", "الجداول Tables"],
        correctAnswer: 2,
    },
    {
        question: "ما هي الخطوة الأولى عند تخطيط قاعدة بيانات جديدة؟",
        answers: ["إنشاء الجداول", "تحديد الهدف من قاعدة البيانات", "إضافة العلاقات بين الجداول", "استيراد البيانات"],
        correctAnswer: 1,
    },
    {
        question: "لماذا يعتبر تخطيط قاعدة البيانات أمرًا مهمًا؟",
        answers: ["لتقليل وقت التنفيذ", "لتجنب تكرار البيانات", "لتوفير مساحة التخزين", "لتحسين سرعة الوصول إلى البيانات"],
        correctAnswer: 1,
    },
    {
        question: "ما هو المفتاح الأساسي في الجداول؟",
        answers: ["حقل فريد لتحديد السجلات", "حقل لتخزين القيم النصية", "حقل لتحديث البيانات تلقائيًا", "حقل لتخزين الصور"],
        correctAnswer: 0,
    },
    {
        question: "ما هي أنواع العلاقات الممكنة بين الجداول في قاعدة البيانات؟",
        answers: ["واحد إلى واحد", "واحد إلى متعدد", "متعدد إلى متعدد", "جميع ما سبق"],
        correctAnswer: 3,
    },
    {
        question: "متى يجب استخدام علاقة رأس إلى أطراف؟",
        answers: ["عند وجود بيانات مكررة", "عند الربط بين جدولين يحتويان على بيانات متشابهة", "عند وجود جدول رئيسي وجداول فرعية", "عند إضافة بيانات نصية"],
        correctAnswer: 2,
    },
    {
        question: "ما هو دور الجداول في تنظيم البيانات؟",
        answers: ["تنظيم البيانات في صفوف وأعمدة", "إضافة بيانات نصية", "تصدير البيانات إلى Excel", "عرض البيانات في شكل تقارير"],
        correctAnswer: 0,
    },
    {
        question: "ما هي الاستعلامات في قواعد البيانات؟",
        answers: ["طريقة لاستخراج البيانات المطلوبة", "حقل لتخزين النصوص", "نوع من أنواع الجداول", "نموذج لإدخال البيانات"],
        correctAnswer: 0,
    },
    {
        question: "كيف يمكن تعديل استعلام حالي لإضافة شروط جديدة؟",
        answers: ["عن طريق تعديل معايير الاستعلام", "بإضافة جدول جديد", "بتغيير اسم الاستعلام", "عن طريق حذف الجداول المرتبطة"],
        correctAnswer: 0,
    },
    {
        question: "ما هو دور المعايير في تحسين دقة الاستعلامات؟",
        answers: ["تحديد البيانات المطلوبة بدقة", "زيادة حجم البيانات المعروضة", "تغيير نوع البيانات", "إضافة جداول جديدة"],
        correctAnswer: 0,
    },
    {
        question: "ما هي النماذج في Microsoft Access؟",
        answers: ["وسيلة لإدخال البيانات بسهولة", "وسيلة لحذف الجداول", "أداة لتصدير البيانات", "أداة لإنشاء الاستعلامات"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الفرق بين النماذج المستمرة والنماذج المفردة؟",
        answers: ["النماذج المستمرة تعرض عدة سجلات، والمفردة تعرض سجلًا واحدًا", "النماذج المفردة تعرض البيانات بدون تعديل", "النماذج المستمرة تحذف البيانات", "لا يوجد فرق بينهما"],
        correctAnswer: 0,
    },
    {
        question: "ما هو دور النماذج في تسهيل استخدام قاعدة البيانات؟",
        answers: ["تسهيل إدخال البيانات وعرضها", "زيادة سرعة النظام", "إضافة جداول جديدة", "تحديث البيانات تلقائيًا"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الهدف من إنشاء تقارير مخصصة في قواعد البيانات؟",
        answers: ["عرض بيانات محددة بشكل منظم واحترافي", "حذف الجداول", "إدخال البيانات بسرعة", "تصدير البيانات"],
        correctAnswer: 0,
    },
    {
        question: "ما هي الفائدة من إضافة الرسوم البيانية إلى التقارير؟",
        answers: ["تقديم البيانات بشكل مرئي يسهل فهمه", "زيادة حجم قاعدة البيانات", "إضافة علاقات بين الجداول", "تسريع عرض البيانات"],
        correctAnswer: 0,
    },
    {
        question: "ما هو دور وحدات الماكرو في Microsoft Access؟",
        answers: ["أتمتة العمليات المتكررة في قاعدة البيانات", "تحديث البيانات يدويًا", "إضافة جداول جديدة", "حذف الاستعلامات"],
        correctAnswer: 0,
    },
    {
        question: "كيف يمكن إنشاء ماكرو لتنفيذ إجراء تلقائي؟",
        answers: ["باستخدام أداة إنشاء الماكرو", "عن طريق تعديل البيانات", "عن طريق حذف الجداول", "عن طريق تغيير نوع البيانات"],
        correctAnswer: 0,
    },
    {
        question: "كيف تساهم وحدات الماكرو في تحسين كفاءة قاعدة البيانات؟",
        answers: ["بتنفيذ العمليات المتكررة بسرعة", "بإضافة جداول جديدة", "بزيادة حجم البيانات", "بتنظيم العلاقات بين الجداول"],
        correctAnswer: 0,
    },
    {
        question: "كيف يمكن حماية قاعدة البيانات في Microsoft Access؟",
        answers: ["باستخدام كلمات مرور وتشفير البيانات", "بإضافة جداول جديدة", "بتغيير نوع البيانات", "بتحديث الجداول"],
        correctAnswer: 0,
    },
    {
        question: "ما هي الأدوات المتاحة في Microsoft Access لحماية البيانات؟",
        answers: ["التشفير وكلمات المرور", "إضافة استعلامات جديدة", "تصدير البيانات", "تغيير نوع البيانات"],
        correctAnswer: 0,
    },
    {
        question: "ما هي الأيقونة التي تستخدم لاستيراد بيانات خارجية إلى برنامج Microsoft Access؟",
        answers: ["Export", "Import", "Save", "Relationships"],
        correctAnswer: 1,
    },
    {
        question: "ما هي الأيقونة التي تستخدم لإنشاء علاقة بين جدولين في قاعدة بيانات Microsoft Access؟",
        answers: ["Import", "Relationships", "Save", "Export"],
        correctAnswer: 1,
    },
    {
        question: "ما هي الأيقونة المناسبة لحفظ التغييرات التي أجريتها على قاعدة البيانات في Access؟",
        answers: ["Save", "Export", "Import", "Relationships"],
        correctAnswer: 0,
    },
    {
        question: "ما الأيقونة التي تستخدم لتصدير البيانات من قاعدة بيانات Microsoft Access إلى برنامج آخر؟",
        answers: ["Import", "Relationships", "Export", "Save"],
        correctAnswer: 2,
    },
    {
        question: "ما هي الأيقونة المستخدمة لتشغيل ماكرو تلقائي في Microsoft Access؟",
        answers: ["Save", "Run Macro", "Relationships", "Import"],
        correctAnswer: 1,
    }
];



let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime, endTime;
let shuffledQuestions = [];
let totalQuestions = 0;
let timer;
const timePerQuestion = 120; // عدد الثواني المخصصة لكل سؤال
let timeLeft = timePerQuestion;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();
    const questionCount = document.getElementById("question-count").value;

    if (studentName === "" || studentGrade === "") {
        alert("الرجاء إدخال الاسم والصف قبل البدء.");
        return;
    }

    startTime = new Date();
    shuffledQuestions = shuffle([...quizData]);

    // تحديد عدد الأسئلة بناءً على اختيار الطالب
    if (questionCount === "10") {
        shuffledQuestions = shuffledQuestions.slice(0, 10);
    }

    totalQuestions = shuffledQuestions.length;

    document.querySelector('.design-credit').classList.add('hidden');
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const questionImageElement = document.getElementById("question-image");

    const questionData = shuffledQuestions[currentQuestionIndex];

    questionNumberElement.innerText = `السؤال ${currentQuestionIndex + 1} من ${totalQuestions}`;
    questionElement.innerText = questionData.question;

    // إخفاء الصورة إذا لم تكن موجودة
    if (questionData.image) {
        questionImageElement.src = questionData.image;
        questionImageElement.style.display = "block";
    } else {
        questionImageElement.style.display = "none";
    }

    const shuffledAnswers = shuffle([...questionData.answers]);

    document.querySelectorAll('.answer-buttons .btn').forEach((button, index) => {
        button.innerText = shuffledAnswers[index];
        button.disabled = false;
        button.style.backgroundColor = "#3498db";
    });

    document.getElementById('next-btn').classList.add('hidden');

    // إعادة ضبط العداد الزمني
    timeLeft = timePerQuestion;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000); // تحديث العداد كل ثانية
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null); // إذا انتهى الوقت، يتم الانتقال للسؤال التالي تلقائياً
    }
}

function selectAnswer(index) {
    clearInterval(timer); // إيقاف العداد الزمني عند اختيار الإجابة

    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

    document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
        button.disabled = true;
    });

    if (index !== null && document.querySelectorAll('.answer-buttons .btn')[index].innerText === correctAnswerText) {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
        correctAnswers++;
        document.getElementById("correct-sound").play();
    } else {
        if (index !== null) {
            document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
        }
        document.getElementById("wrong-sound").play();
        document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
            if (button.innerText === correctAnswerText) {
                button.style.backgroundColor = "green";
            }
        });
        wrongAnswers++;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    endTime = new Date();
    let timeSpent = Math.floor((endTime - startTime) / 1000);
    let minutes = Math.floor(timeSpent / 60);
    let seconds = timeSpent % 60;

    document.querySelector('.design-credit').classList.remove('hidden');
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("student-info").innerText = `${document.getElementById('student-name').value}, الصف ${document.getElementById('student-grade').value}`;
    document.getElementById("correct-answers").innerText = correctAnswers;
    document.getElementById("wrong-answers").innerText = wrongAnswers;
    document.getElementById("time-spent").innerText = `${minutes} دقيقة و ${seconds} ثانية`;
    document.getElementById("final-score").innerText = `${(correctAnswers / totalQuestions) * 100}%`;
}
