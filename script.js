const quizData = [
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
        question: "متى يجب استخدام علاقة واحد إلى متعدد؟",
        answers: ["عند وجود بيانات مكررة", "عند الربط بين جدولين يحتويان على بيانات متشابهة", "عند وجود جدول رئيسي وجداول فرعية", "عند إضافة بيانات نصية"],
        correctAnswer: 2,
    },
    {
        question: "ما هو الفرق بين المفتاح الأساسي والمفتاح الخارجي؟",
        answers: ["المفتاح الأساسي هو فريد، المفتاح الخارجي يربط الجداول", "المفتاح الخارجي يحدد السجلات، المفتاح الأساسي ينشئ الجداول", "المفتاح الخارجي يستخدم في العلاقات، المفتاح الأساسي يحذف البيانات", "لا فرق بينهما"],
        correctAnswer: 0,
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
        question: "ما هي أنواع الاستعلامات المختلفة في MS Access؟",
        answers: ["استعلام تحديد", "استعلام حذف", "استعلام تحديث", "جميع ما سبق"],
        correctAnswer: 3,
    },
    {
        question: "متى نستخدم الاستعلام التراكمي؟",
        answers: ["عند الحاجة إلى جمع البيانات", "لإضافة بيانات جديدة", "لحذف البيانات المكررة", "لإجراء عمليات حسابية معقدة"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الاستعلام الجدولي ومتى يستخدم؟",
        answers: ["استعلام يعرض البيانات في صفوف وأعمدة", "استعلام يستخدم لعرض العلاقات بين الجداول", "استعلام يجمع بين عدة استعلامات", "استعلام يعرض البيانات المكررة"],
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
        question: "كيف يمكن فرز البيانات في استعلام معين؟",
        answers: ["استخدام ترتيب تصاعدي أو تنازلي", "تغيير اسم الاستعلام", "إضافة علاقات جديدة", "إدخال بيانات نصية"],
        correctAnswer: 0,
    },
    {
        question: "ما الفائدة من إنشاء استعلامات متداخلة؟",
        answers: ["لاستخراج البيانات من جداول متعددة", "لتحديث بيانات الجداول", "لإضافة بيانات جديدة", "لحذف الجداول"],
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
        question: "كيف يمكن تخصيص تصميم النموذج ليكون أكثر سهولة للمستخدم؟",
        answers: ["بإضافة عناصر تحكم مثل الأزرار والقوائم", "بتغيير نوع البيانات في الجداول", "بزيادة عدد الحقول", "بإضافة علاقات بين الجداول"],
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
        question: "كيف يمكن تخصيص تخطيط التقرير في Microsoft Access؟",
        answers: ["عن طريق تعديل التنسيق وإضافة العناوين", "عن طريق تغيير نوع البيانات", "عن طريق إضافة استعلامات جديدة", "عن طريق حذف الجداول"],
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