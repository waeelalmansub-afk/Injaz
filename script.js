// ============================================================
// INJAZ | إنجاز
// Main JavaScript
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------------
    // Global elements
    // --------------------------------------------------------

    const modal = document.getElementById("toolModal");
    const modalBody = document.getElementById("modalBody");
    const closeModal = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const langBtn = document.getElementById("langBtn");
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // --------------------------------------------------------
    // Translation system
    // --------------------------------------------------------

    let currentLanguage =
        localStorage.getItem("injazLanguage") || "ar";

    const translations = {

        ar: {

            navTools: "الأدوات",
            navCategories: "التصنيفات",
            navAbout: "عن إنجاز",

            heroBadge: "أدوات مجانية وسريعة",
            heroTitle: "كل أدواتك اليومية في مكان واحد",
            heroDescription:
                "أنجز أعمالك، احسب، حرر النصوص، جهّز سيرتك الذاتية وتعامل مع ملفاتك بسهولة من متصفحك.",

            searchPlaceholder: "ابحث عن أداة...",
            popularSearch: "الأكثر بحثًا:",

            featuredLabel: "الأدوات الأكثر استخدامًا",
            featuredTitle: "ابدأ من هنا",

            popular: "الأكثر استخدامًا",
            startNow: "ابدأ الآن",
            openTool: "فتح الأداة",
            calculateNow: "احسب الآن",

            cvTitle: "إنشاء سيرة ذاتية احترافية",
            cvDescription:
                "أنشئ سيرة ذاتية كاملة باحترافية مع قالبين: قالب مع صورة شخصية وقالب ATS نصي.",

            converterTitle: "مركز تحويل الملفات",
            converterDescription:
                "أدوات للتعامل مع PDF والصور والنصوص والملفات المختلفة.",

            ageTitle: "حاسبة العمر",
            ageDescription:
                "احسب عمرك بالسنوات والأشهر والأيام، واعرف يوم ميلادك بالتقويمين الميلادي والهجري.",

            profitTitle: "حاسبة هامش الربح",
            profitDescription:
                "احسب التكلفة والربح والهامش ونسبة الزيادة وسعر البيع المناسب.",

            workCategory: "العمل والتوظيف",
            workCategoryDesc:
                "أدوات تساعدك في بناء مسيرتك المهنية",

            coverTitle: "خطاب التقديم",
            coverDescription:
                "أنشئ خطاب تقديم احترافي للوظائف.",

            filesCategory: "الملفات والمستندات",
            filesCategoryDesc:
                "أدوات عملية للتعامل مع الملفات",

            imageTitle: "أدوات الصور",
            imageDescription:
                "ضغط الصور وتغيير الحجم وتحويل الصيغ.",

            calculatorCategory: "الحاسبات",
            calculatorCategoryDesc:
                "حسابات دقيقة وسهلة للاستخدام اليومي",

            percentageTitle: "حاسبة النسبة المئوية",
            percentageDescription:
                "احسب النسب والزيادات والانخفاضات بسهولة.",

            discountTitle: "حاسبة الخصم",
            discountDescription:
                "اعرف السعر النهائي وقيمة الخصم.",

            textCategory: "النصوص والكتابة",
            textCategoryDesc:
                "أدوات لتحرير النصوص وتحليلها",

            summaryTitle: "تلخيص النصوص",
            summaryDescription:
                "اختصر النصوص الطويلة إلى نقاط أساسية وخريطة ذهنية.",

            counterTitle: "عداد الكلمات والحروف",
            counterDescription:
                "احسب الكلمات والحروف والجمل ووقت القراءة.",

            developerCategory: "البرمجة وتطوير الويب",
            developerCategoryDesc:
                "أدوات للمطورين والمصممين",

            jsonTitle: "منسق JSON",
            jsonDescription:
                "تنسيق وفحص JSON واكتشاف الأخطاء.",

            colorTitle: "منتقي الألوان",
            colorDescription:
                "استخراج HEX وRGB وHSL للألوان.",

            noResultsTitle: "لم نجد أداة مطابقة",
            noResultsDescription:
                "جرّب البحث بكلمة أخرى.",

            footerDescription:
                "أدوات عملية تساعدك على إنجاز مهامك اليومية بسهولة.",

            footerRights: "جميع الحقوق محفوظة",

            // Age Calculator translations
            ageGregorian: "التقويم الميلادي",
            ageHijri: "التقويم الهجري",
            ageBirthDate: "تاريخ الميلاد",
            ageCalculateUntil: "احسب العمر حتى",
            ageResult: "النتيجة",
            ageYears: "سنوات",
            ageMonths: "أشهر",
            ageDays: "أيام",
            ageTotalDays: "إجمالي الأيام",
            ageBirthDay: "يوم الميلاد",
            ageBirthYear: "سنة الميلاد",
            ageBirthMonth: "الشهر",
            ageHijriAge: "العمر بالهجري",
            ageHijriYears: "سنة هجرية",
            ageHijriMonths: "أشهر هجرية",
            ageHijriDays: "أيام هجرية",

            // Summarizer translations
            summaryUpload: "رفع ملف نصي",
            summaryLength: "طول التلخيص",
            summaryShort: "قصير",
            summaryLong: "طويل",
            summaryMindMap: "تنسيق خريطة ذهنية",
            summaryOriginal: "النص الأصلي",
            summaryMindMapFormat: "تنسيق كخريطة ذهنية",
            summaryBulletPoints: "تنسيق كنقاط",
            summaryUploadFile: "رفع ملف (TXT/HTML)",
            summaryOrText: "أو اكتب النص",
            summaryFileUploaded: "تم رفع الملف: ",
            summaryUploadFile: "رفع ملف",

            // CV Builder translations
            cvTemplate: "اختر القالب",
            cvTemplate1: "قالب 1 - احترافي مع صورة شخصية",
            cvTemplate2: "قالب 2 - ATS (نصي فقط، مناسب لأنظمة التوظيف الآلية)",
            cvPhoto: "الصورة الشخصية (لقالب 1 فقط)",
            cvFullName: "الاسم الكامل",
            cvJobTitle: "المسمى الوظيفي",
            cvEmail: "البريد الإلكتروني",
            cvPhone: "رقم الهاتف",
            cvLocation: "المدينة / الدولة",
            cvWebsite: "رابط LinkedIn أو موقعك",
            cvSummary: "الملخص المهني",
            cvExperience: "الخبرات العملية",
            cvEducation: "التعليم",
            cvSkills: "المهارات",
            cvLanguages: "اللغات",
            cvCertificates: "الدورات والشهادات",
            cvProjects: "المشاريع والإنجازات",
            cvCreate: "إنشاء السيرة",
            cvSave: "حفظ البيانات",
            cvLoad: "استعادة",
            cvDownload: "تنزيل HTML",
            cvPrint: "طباعة",
            cvPlaceholderName: "اسمك الكامل",
            cvPlaceholderJob: "المسمى الوظيفي",
            cvPlaceholderEmail: "example@email.com",
            cvPlaceholderPhone: "+967...",
            cvPlaceholderLocation: "عدن - اليمن",
            cvPlaceholderWebsite: "https://...",
            cvPlaceholderSummary: "اكتب نبذة مختصرة عن خبرتك ومهاراتك...",
            cvPlaceholderExperience: "مثال:\n2024 - 2026 | شركة XYZ | مطور ويب\n- تطوير مواقع الويب\n- تحسين الأداء\n- التعاون مع فريق التصميم",
            cvPlaceholderEducation: "الجامعة أو المدرسة - التخصص - سنة التخرج",
            cvPlaceholderSkills: "JavaScript, HTML, CSS, التواصل، إدارة الوقت...",
            cvPlaceholderLanguages: "العربية - اللغة الأم\nالإنجليزية - جيد جدًا",
            cvPlaceholderCertificates: "اسم الدورة - الجهة - السنة",
            cvPlaceholderProjects: "اسم المشروع أو الإنجاز ووصف مختصر له...",

            // File Converter translations
            fileConvertImage: "صور → PDF",
            fileConvertImageDesc: "متعددة مسموح",
            fileConvertText: "نص → ملف",
            fileConvertTextDesc: "رفع/تحرير TXT/HTML",
            fileConvertResize: "تغيير حجم صورة",
            fileConvertResizeDesc: "Resize",
            fileSelectImages: "اختر صور (متعددة مسموح)",
            fileImagesInfo: "تم اختيار",
            fileImages: "صورة (images)",
            fileCreatePDF: "إنشاء ملف PDF",
            filePrint: "طباعة",
            fileSelectText: "اختر ملف نصي (TXT/HTML)",
            fileUploadText: "سيتم قراءة محتوى الملف وعرضه للتعديل",
            fileUploadFile: "رفع ملف",
            fileDownloadTxt: "تنزيل TXT",
            fileDownloadHtml: "تنزيل HTML",
            fileClearText: "مسح النص",
            fileUploadFile: "رفع ملف",
            fileOrText: "أو اكتب النص",
            fileReadFile: "سيتم قراءة محتوى الملف وعرضه للتعديل",
            fileWriteText: "اكتب النص هنا أو اختر ملف من الأعلى...",
            fileSelectTool: "اختر أداة من الأعلى",
            fileToolOptions: "سيتم عرض خيارات العملية هنا.",

            // Toast messages
            toastSuccessSave: "تم حفظ بيانات السيرة على هذا الجهاز.",
            toastSuccessLoad: "تم استعادة بيانات السيرة.",
            toastNoSaved: "لا توجد سيرة محفوظة.",
            toastSuccessDownload: "تم تنزيل السيرة الذاتية. يمكنك حفظها كـ PDF من المتصفح.",
            toastSuccessPrint: "تم فتح نافذة الطباعة. يمكنك حفظ كـ PDF من خيارات الطباعة.",
            toastNoPreview: "لا توجد معاينة للتنزيل.",
            toastNoPreviewPrint: "لا توجد معاينة للطباعة.",
            toastPopupBlocked: "المتصفح منع فتح نافذة جديدة.",
            toastSelectImage: "اختر صورة أولًا.",
            toastImagesPDF: "تم إنشاء ملف يحتوي على",
            toastImagesPDFNote: "صورة. يمكنك حفظه كـ PDF من خيارات الطباعة.",
            toastSelectText: "اختر صورة أولًا.",
            toastNoText: "لا يوجد نص للتنزيل.",
            toastDownloadText: "تم تنزيل الملف النصي.",
            toastDownloadHTML: "تم تنزيل الملف HTML.",
            toastFileRead: "تم قراءة الملف: ",
            toastFileError: "حدث خطأ أثناء قراءة الملف.",
            toastClearText: "تم مسح النص.",
            toastEnterText: "أدخل نصًا أولًا.",
            toastError: "حدث خطأ.",
            toastSaveError: "حدث خطأ أثناء حفظ البيانات. قد تكون مساحة التخزين ممتلئة.",
            toastLoadError: "حدث خطأ أثناء استعادة البيانات.",
            toastDownloadError: "حدث خطأ أثناء تنزيل الملف. حاول مرة أخرى.",
            toastCalculating: "جاري الحساب...",
            toastSummaryError: "حدث خطأ أثناء التلخيص.",

            // Profit Calculator translations
            profitCost: "التكلفة",
            profitMarkup: "نسبة الزيادة (Markup %)",
            profitProfit: "الربح",
            profitSellingPrice: "سعر البيع",
            profitMargin: "هامش الربح",

            // Percentage Calculator translations
            percentageType: "نوع الحساب",
            percentageOf: "ما هو X% من Y؟",
            percentageIs: "X هو ما نسبة من Y؟",
            percentageIncrease: "زيادة نسبة",
            percentageDecrease: "انخفاض نسبة",
            percentageX: "القيمة X",
            percentageY: "القيمة Y",

            // Discount Calculator translations
            discountOriginal: "السعر الأصلي",
            discountPercent: "نسبة الخصم (%)",
            discountValue: "قيمة الخصم",
            discountFinal: "السعر النهائي",

            // Word Counter translations
            counterWords: "الكلمات",
            counterCharacters: "الحروف",
            counterCharactersNoSpaces: "حروف بدون مسافات",
            counterSentences: "الجمل",
            counterParagraphs: "الفقرات",
            counterReadingTime: "وقت القراءة",

            // JSON Formatter translations
            jsonInput: "أدخل JSON",
            jsonOutput: "النتيجة",
            jsonFormat: "تنسيق",
            jsonMinify: "ضغط",
            jsonCopy: "نسخ",

            // Color Picker translations
            colorSelect: "اختر اللون",

            // Image Tools translations
            imageQuality: "الجودة",

            // Cover Letter translations
            coverCompany: "اسم الشركة",
            coverExperience: "الخبرة والإنجازات",
            coverSkills: "المهارات",

            // Reviews translations
            reviewsLabel: "آراء المستخدمين",
            reviewsTitle: "شاركنا رأيك",
            reviewFormTitle: "أضف تقييمك",
            reviewNameLabel: "الاسم",
            reviewNamePlaceholder: "اسمك",
            reviewRatingLabel: "التقييم",
            reviewCommentLabel: "التعليق",
            reviewCommentPlaceholder: "اكتب تعليقك هنا...",
            reviewSubmit: "إرسال التقييم",
            reviewsListTitle: "التقييمات الأخيرة",
            noReviewsMessage: "لا توجد تقييمات بعد. كن أول من يقيّم!",
            reviewSuccess: "تم إرسال تقييمك بنجاح!",
            reviewError: "حدث خطأ أثناء إرسال التقييم."
        },

        en: {

            navTools: "Tools",
            navCategories: "Categories",
            navAbout: "About",

            heroBadge: "Free & Fast Tools",
            heroTitle: "All Your Everyday Tools in One Place",
            heroDescription:
                "Work, calculate, edit text, build your CV and manage your files directly from your browser.",

            searchPlaceholder: "Search for a tool...",
            popularSearch: "Popular:",

            featuredLabel: "Most Used Tools",
            featuredTitle: "Get Started",

            popular: "Most Used",
            startNow: "Start Now",
            openTool: "Open Tool",
            calculateNow: "Calculate",

            cvTitle: "Professional CV Builder",
            cvDescription:
                "Create a complete professional CV with two templates: one with photo and one ATS-friendly text-only template.",

            converterTitle: "File Conversion Center",
            converterDescription:
                "Useful tools for PDFs, images, text and different file formats.",

            ageTitle: "Age Calculator",
            ageDescription:
                "Calculate your exact age in years, months and days and find your birth day in both Gregorian and Hijri calendars.",

            profitTitle: "Profit Margin Calculator",
            profitDescription:
                "Calculate cost, profit, margin, markup and recommended selling price.",

            workCategory: "Work & Career",
            workCategoryDesc:
                "Tools to help build your professional career",

            coverTitle: "Cover Letter",
            coverDescription:
                "Create a professional job application cover letter.",

            filesCategory: "Files & Documents",
            filesCategoryDesc:
                "Practical tools for working with files",

            imageTitle: "Image Tools",
            imageDescription:
                "Compress, resize and convert images.",

            calculatorCategory: "Calculators",
            calculatorCategoryDesc:
                "Accurate calculators for everyday use",

            percentageTitle: "Percentage Calculator",
            percentageDescription:
                "Calculate percentages, increases and decreases.",

            discountTitle: "Discount Calculator",
            discountDescription:
                "Calculate discount value and final price.",

            textCategory: "Text & Writing",
            textCategoryDesc:
                "Tools for editing and analyzing text",

            summaryTitle: "Text Summarizer",
            summaryDescription:
                "Reduce long text to its key points and mind map format.",

            counterTitle: "Word & Character Counter",
            counterDescription:
                "Count words, characters, sentences and reading time.",

            developerCategory: "Development",
            developerCategoryDesc:
                "Tools for developers and designers",

            jsonTitle: "JSON Formatter",
            jsonDescription:
                "Format and validate JSON and detect errors.",

            colorTitle: "Color Picker",
            colorDescription:
                "Get HEX, RGB and HSL color values.",

            noResultsTitle: "No matching tool found",
            noResultsDescription:
                "Try searching for another keyword.",

            footerDescription:
                "Practical tools to help you complete your daily tasks.",

            footerRights: "All rights reserved",

            // Age Calculator translations
            ageGregorian: "Gregorian Calendar",
            ageHijri: "Hijri Calendar",
            ageBirthDate: "Birth Date",
            ageCalculateUntil: "Calculate Age Until",
            ageResult: "Result",
            ageYears: "Years",
            ageMonths: "Months",
            ageDays: "Days",
            ageTotalDays: "Total Days",
            ageBirthDay: "Birth Day",
            ageBirthYear: "Birth Year",
            ageBirthMonth: "Month",
            ageHijriAge: "Hijri Age",
            ageHijriYears: "Hijri Years",
            ageHijriMonths: "Hijri Months",
            ageHijriDays: "Hijri Days",

            // Summarizer translations
            summaryUpload: "Upload Text File",
            summaryLength: "Summary Length",
            summaryShort: "Short",
            summaryLong: "Long",
            summaryMindMap: "Mind Map Format",
            summaryOriginal: "Original Text",
            summaryMindMapFormat: "Format as Mind Map",
            summaryBulletPoints: "Format as Bullet Points",
            summaryUploadFile: "Upload File (TXT/HTML)",
            summaryOrText: "Or Type Text",
            summaryFileUploaded: "File uploaded: ",
            summaryUploadFile: "Upload File",

            // CV Builder translations
            cvTemplate: "Select Template",
            cvTemplate1: "Template 1 - Professional with Photo",
            cvTemplate2: "Template 2 - ATS (Text-only, ATS-friendly)",
            cvPhoto: "Profile Photo (Template 1 only)",
            cvFullName: "Full Name",
            cvJobTitle: "Job Title",
            cvEmail: "Email",
            cvPhone: "Phone",
            cvLocation: "City / Country",
            cvWebsite: "LinkedIn or Website Link",
            cvSummary: "Professional Summary",
            cvExperience: "Work Experience",
            cvEducation: "Education",
            cvSkills: "Skills",
            cvLanguages: "Languages",
            cvCertificates: "Certificates & Courses",
            cvProjects: "Projects & Achievements",
            cvCreate: "Create CV",
            cvSave: "Save Data",
            cvLoad: "Restore",
            cvDownload: "Download HTML",
            cvPrint: "Print",
            cvPlaceholderName: "Your Full Name",
            cvPlaceholderJob: "Job Title",
            cvPlaceholderEmail: "example@email.com",
            cvPlaceholderPhone: "+967...",
            cvPlaceholderLocation: "Aden - Yemen",
            cvPlaceholderWebsite: "https://...",
            cvPlaceholderSummary: "Write a brief summary of your experience and skills...",
            cvPlaceholderExperience: "Example:\n2024 - 2026 | XYZ Company | Web Developer\n- Website development\n- Performance optimization\n- Collaboration with design team",
            cvPlaceholderEducation: "University or School - Major - Graduation Year",
            cvPlaceholderSkills: "JavaScript, HTML, CSS, Communication, Time Management...",
            cvPlaceholderLanguages: "Arabic - Native\nEnglish - Very Good",
            cvPlaceholderCertificates: "Course Name - Organization - Year",
            cvPlaceholderProjects: "Project or achievement name and brief description...",

            // File Converter translations
            fileConvertImage: "Images → PDF",
            fileConvertImageDesc: "Multiple Allowed",
            fileConvertText: "Text → File",
            fileConvertTextDesc: "Upload/Edit TXT/HTML",
            fileConvertResize: "Resize Image",
            fileConvertResizeDesc: "Resize",
            fileSelectImages: "Select Images (Multiple Allowed)",
            fileImagesInfo: "Selected",
            fileImages: "image(s)",
            fileCreatePDF: "Create PDF",
            filePrint: "Print",
            fileSelectText: "Select Text File (TXT/HTML)",
            fileUploadText: "File content will be read and displayed for editing",
            fileUploadFile: "Upload File",
            fileDownloadTxt: "Download TXT",
            fileDownloadHtml: "Download HTML",
            fileClearText: "Clear Text",
            fileUploadFile: "Upload File",
            fileOrText: "Or Type Text",
            fileReadFile: "File content will be read and displayed for editing",
            fileWriteText: "Type text here or select a file from above...",
            fileSelectTool: "Select a tool from above",
            fileToolOptions: "Operation options will be displayed here.",

            // Toast messages
            toastSuccessSave: "CV data saved to this device.",
            toastSuccessLoad: "CV data restored successfully.",
            toastNoSaved: "No saved CV found.",
            toastSuccessDownload: "CV downloaded. You can save as PDF from browser.",
            toastSuccessPrint: "Print window opened. You can save as PDF from print options.",
            toastNoPreview: "No preview available for download.",
            toastNoPreviewPrint: "No preview available for printing.",
            toastPopupBlocked: "Browser blocked new window.",
            toastSelectImage: "Select an image first.",
            toastImagesPDF: "Created file containing",
            toastImagesPDFNote: "image(s). You can save as PDF from print options.",
            toastSelectText: "Select an image first.",
            toastNoText: "No text to download.",
            toastDownloadText: "Text file downloaded.",
            toastDownloadHTML: "HTML file downloaded.",
            toastFileRead: "File read: ",
            toastFileError: "Error reading file.",
            toastClearText: "Text cleared.",
            toastEnterText: "Enter text first.",
            toastError: "An error occurred.",
            toastSaveError: "Error saving data. Storage might be full.",
            toastLoadError: "Error restoring data.",
            toastDownloadError: "Error downloading file. Try again.",
            toastCalculating: "Calculating...",
            toastSummaryError: "Error during summarization.",

            // Profit Calculator translations
            profitCost: "Cost",
            profitMarkup: "Markup (%)",
            profitProfit: "Profit",
            profitSellingPrice: "Selling Price",
            profitMargin: "Profit Margin",

            // Percentage Calculator translations
            percentageType: "Calculation Type",
            percentageOf: "What is X% of Y?",
            percentageIs: "X is what % of Y?",
            percentageIncrease: "Percentage Increase",
            percentageDecrease: "Percentage Decrease",
            percentageX: "Value X",
            percentageY: "Value Y",

            // Discount Calculator translations
            discountOriginal: "Original Price",
            discountPercent: "Discount (%)",
            discountValue: "Discount Value",
            discountFinal: "Final Price",

            // Word Counter translations
            counterWords: "Words",
            counterCharacters: "Characters",
            counterCharactersNoSpaces: "Characters (no spaces)",
            counterSentences: "Sentences",
            counterParagraphs: "Paragraphs",
            counterReadingTime: "Reading Time",

            // JSON Formatter translations
            jsonInput: "Enter JSON",
            jsonOutput: "Result",
            jsonFormat: "Format",
            jsonMinify: "Minify",
            jsonCopy: "Copy",

            // Color Picker translations
            colorSelect: "Select Color",

            // Image Tools translations
            imageQuality: "Quality",

            // Cover Letter translations
            coverCompany: "Company Name",
            coverExperience: "Experience & Achievements",
            coverSkills: "Skills",

            // Reviews translations
            reviewsLabel: "User Reviews",
            reviewsTitle: "Share Your Opinion",
            reviewFormTitle: "Add Your Review",
            reviewNameLabel: "Name",
            reviewNamePlaceholder: "Your name",
            reviewRatingLabel: "Rating",
            reviewCommentLabel: "Comment",
            reviewCommentPlaceholder: "Write your comment here...",
            reviewSubmit: "Submit Review",
            reviewsListTitle: "Recent Reviews",
            noReviewsMessage: "No reviews yet. Be the first to review!",
            reviewSuccess: "Your review has been submitted successfully!",
            reviewError: "Error submitting review."
        }
    };


    function applyLanguage() {

        const isEnglish = currentLanguage === "en";

        document.documentElement.lang =
            isEnglish ? "en" : "ar";

        document.documentElement.dir =
            isEnglish ? "ltr" : "rtl";

        document.body.dir =
            isEnglish ? "ltr" : "rtl";

        document.querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (translations[currentLanguage][key]) {
                    element.textContent =
                        translations[currentLanguage][key];
                }
            });


        document.querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n-placeholder");

                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    element.placeholder =
                        translations[currentLanguage][key];
                }
            });


        if (langBtn) {
            langBtn.textContent =
                isEnglish ? "العربية" : "English";
        }

        localStorage.setItem(
            "injazLanguage",
            currentLanguage
        );
    }

    applyLanguage();


    if (langBtn) {

        langBtn.addEventListener("click", () => {

            currentLanguage =
                currentLanguage === "ar" ? "en" : "ar";

            applyLanguage();

            // Update CV preview if CV builder is open
            if (document.getElementById("cvPreview")) {
                updateCVPreview();
            }
        });
    }


    // --------------------------------------------------------
    // Modal
    // --------------------------------------------------------

    function openModal(content) {

        if (!modal || !modalBody) return;

        modalBody.innerHTML = content;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    }


    function closeToolModal() {

        if (!modal) return;

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }


    if (closeModal) {
        closeModal.addEventListener(
            "click",
            closeToolModal
        );
    }

    if (modalOverlay) {
        modalOverlay.addEventListener(
            "click",
            closeToolModal
        );
    }


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeToolModal();
        }
    });


    // --------------------------------------------------------
    // Open tools
    // --------------------------------------------------------

    document.querySelectorAll("[data-tool]")
        .forEach(card => {

            card.addEventListener("click", () => {

                openTool(
                    card.getAttribute("data-tool")
                );
            });


            card.addEventListener("keydown", event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openTool(
                        card.getAttribute("data-tool")
                    );
                }
            });
        });


    // --------------------------------------------------------
    // Search
    // --------------------------------------------------------

    function performSearch(query) {

        const cards =
            document.querySelectorAll(
                ".tool-card, .featured-card"
            );

        const normalizedQuery =
            query.toLowerCase().trim();

        let visibleCount = 0;

        cards.forEach(card => {

            const title =
                card.querySelector("h3")
                    ?.textContent
                    .toLowerCase() || "";

            const description =
                card.querySelector("p")
                    ?.textContent
                    .toLowerCase() || "";

            const keywords =
                (
                    card.getAttribute("data-keywords") || ""
                ).toLowerCase();

            const content =
                `${title} ${description} ${keywords}`;

            const matches =
                normalizedQuery === "" ||
                content.includes(normalizedQuery);

            card.style.display =
                matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });


        const noResults =
            document.getElementById("noResults");

        if (noResults) {

            noResults.style.display =
                normalizedQuery !== "" &&
                visibleCount === 0
                    ? "block"
                    : "none";
        }


        if (clearSearch) {

            clearSearch.style.display =
                normalizedQuery
                    ? "grid"
                    : "none";
        }
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            event => {
                performSearch(event.target.value);
            }
        );
    }


    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                searchInput.value = "";

                performSearch("");

                searchInput.focus();
            }
        );
    }


    document.querySelectorAll(".search-tag")
        .forEach(tag => {

            tag.addEventListener("click", () => {

                const value =
                    tag.getAttribute("data-search");

                searchInput.value = value;

                performSearch(value);

                document
                    .getElementById("tools")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            });
        });


    // ========================================================
    // TOOL ENGINE
    // ========================================================

    window.openTool = function(toolId) {

        switch (toolId) {

            case "cv":
                showCVBuilder();
                break;

            case "file-converter":
                showFileConverter();
                break;

            case "age-calculator":
                showAgeCalculator();
                break;

            case "profit-margin":
                showProfitCalculator();
                break;

            case "percentage":
                showPercentageCalculator();
                break;

            case "discount":
                showDiscountCalculator();
                break;

            case "word-counter":
                showWordCounter();
                break;

            case "summarizer":
                showSummarizer();
                break;

            case "json-formatter":
                showJSONFormatter();
                break;

            case "color-picker":
                showColorPicker();
                break;

            case "image-tools":
                showImageTools();
                break;

            case "cover-letter":
                showCoverLetter();
                break;

            default:
                showComingSoon(toolId);
        }
    };


    // ========================================================
    // Hijri Calendar Helper Functions
    // ========================================================

    function gregorianToHijri(gregorianDate) {
        // Simple approximation for Hijri calendar conversion
        // Note: This is an approximation. For exact conversion, you'd need a comprehensive Hijri calendar library

        const year = gregorianDate.getFullYear();
        const month = gregorianDate.getMonth();
        const day = gregorianDate.getDate();

        // Approximate Hijri year (Gregorian year - 622)
        const hijriYear = year - 622;

        // Approximate month (rough estimation)
        const hijriMonth = Math.floor((month * 29.5 + day) / 29.5) % 12;

        // Approximate day
        const hijriDay = Math.floor((month * 29.5 + day) % 29.5) + 1;

        return {
            year: hijriYear,
            month: hijriMonth + 1,
            day: hijriDay
        };
    }

    function getHijriMonthName(month) {
        const isEnglish = currentLanguage === "en";
        const arabicMonths = [
            "محرم", "صفر", "ربيع الأول", "ربيع الآخر",
            "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان",
            "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
        ];
        const englishMonths = [
            "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani",
            "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
            "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
        ];

        const months = isEnglish ? englishMonths : arabicMonths;
        return months[month - 1] || "";
    }

    function getHijriWeekdayName(dayIndex) {
        const isEnglish = currentLanguage === "en";
        const arabicDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        const englishDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const days = isEnglish ? englishDays : arabicDays;
        return days[dayIndex] || "";
    }


    // ========================================================
    // 1. AGE CALCULATOR (Enhanced with Hijri)
    // ========================================================

    function showAgeCalculator() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>🎂 <span data-i18n="ageTitle">حاسبة العمر</span></h2>
                    <p>
                        <span data-i18n="ageDescription">احسب عمرك بدقة بالسنوات والأشهر والأيام</span><br>
                        <span data-i18n="ageDescription">واعرف يوم ميلادك بالتقويمين الميلادي والهجري.</span>
                    </p>
                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="ageBirthDate">تاريخ الميلاد</span>
                        </label>

                        <input
                            type="date"
                            id="birthDate"
                            class="form-control"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="ageCalculateUntil">احسب العمر حتى</span>
                        </label>

                        <input
                            type="date"
                            id="ageTarget"
                            class="form-control"
                        >

                    </div>

                </div>


                <div class="button-row"
                     style="margin-top:15px;">

                    <button
                        class="btn btn-primary"
                        id="ageCalculate"
                    >
                        🎂 <span data-i18n="calculateNow">احسب العمر</span>
                    </button>

                </div>


                <div
                    id="ageResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();

        const today =
            new Date();

        document
            .getElementById("ageTarget")
            .value =
            formatDateInput(today);


        document
            .getElementById("ageCalculate")
            .addEventListener(
                "click",
                calculateAge
            );
    }


    function calculateAge() {

        const birthValue =
            document.getElementById(
                "birthDate"
            ).value;

        const targetValue =
            document.getElementById(
                "ageTarget"
            ).value;


        if (!birthValue || !targetValue) {

            showToast(
                translations[currentLanguage].toastEnterText,
                "error"
            );

            return;
        }


        const birth =
            new Date(
                birthValue + "T00:00:00"
            );

        const target =
            new Date(
                targetValue + "T00:00:00"
            );


        if (birth > target) {

            showToast(
                "تاريخ الميلاد يجب أن يكون قبل التاريخ المحدد.",
                "error"
            );

            return;
        }


        let years =
            target.getFullYear()
            - birth.getFullYear();

        let months =
            target.getMonth()
            - birth.getMonth();

        let days =
            target.getDate()
            - birth.getDate();


        if (days < 0) {

            months--;

            const previousMonth =
                new Date(
                    target.getFullYear(),
                    target.getMonth(),
                    0
                );

            days +=
                previousMonth.getDate();
        }


        if (months < 0) {

            years--;
            months += 12;
        }


        const totalDays =
            Math.floor(
                (
                    target - birth
                ) /
                (1000 * 60 * 60 * 24)
            );


        const weekdays = currentLanguage === "ar"
            ? [
                "الأحد",
                "الاثنين",
                "الثلاثاء",
                "الأربعاء",
                "الخميس",
                "الجمعة",
                "السبت"
            ]
            : [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];


        const birthDay =
            weekdays[birth.getDay()];

        // Calculate Hijri age
        const hijriBirth = gregorianToHijri(birth);
        const hijriTarget = gregorianToHijri(target);

        let hijriYears = hijriTarget.year - hijriBirth.year;
        let hijriMonths = hijriTarget.month - hijriBirth.month;
        let hijriDays = hijriTarget.day - hijriBirth.day;

        if (hijriDays < 0) {
            hijriMonths--;
            hijriDays += 29; // Approximate lunar month
        }

        if (hijriMonths < 0) {
            hijriYears--;
            hijriMonths += 12;
        }


        const result =
            document.getElementById(
                "ageResult"
            );


        result.style.display = "block";

        const t = translations[currentLanguage];

        result.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="result-value">
                ${years} <span data-i18n="ageYears">سنوات</span>,
                ${months} <span data-i18n="ageMonths">أشهر</span>,
                ${days} <span data-i18n="ageDays">أيام</span>
            </div>

            <div class="stats-grid">

                <div class="stat-card">
                    <small><span data-i18n="ageBirthDay">يوم الميلاد</span></small>
                    <strong>${birthDay}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="ageTotalDays">إجمالي الأيام</span></small>
                    <strong>${totalDays.toLocaleString()}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="ageBirthYear">سنة الميلاد</span></small>
                    <strong>${birth.getFullYear()}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="ageBirthMonth">الشهر</span></small>
                    <strong>${birth.getMonth() + 1}</strong>
                </div>

            </div>

            <div class="result-box" style="margin-top: 20px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-color: #bbf7d0;">
                <h3 style="color: #166534; margin-bottom: 15px;">
                    🌙 <span data-i18n="ageHijriAge">العمر بالهجري</span>
                </h3>

                <div class="result-value" style="color: #166534;">
                    ${hijriYears} <span data-i18n="ageHijriYears">سنة هجرية</span>,
                    ${hijriMonths} <span data-i18n="ageHijriMonths">أشهر هجرية</span>,
                    ${hijriDays} <span data-i18n="ageHijriDays">أيام هجرية</span>
                </div>

                <div class="stats-grid" style="margin-top: 15px;">

                    <div class="stat-card" style="background: #fff;">
                        <small><span data-i18n="ageGregorian">التقويم الميلادي</span></small>
                        <strong>${birth.getFullYear()}</strong>
                    </div>

                    <div class="stat-card" style="background: #fff;">
                        <small><span data-i18n="ageHijri">التقويم الهجري</span></small>
                        <strong>${hijriBirth.year}</strong>
                    </div>

                    <div class="stat-card" style="background: #fff;">
                        <small>${getHijriMonthName(hijriBirth.month)}</small>
                        <strong>${hijriBirth.day}</strong>
                    </div>

                </div>
            </div>
        `;

        // Apply translations to the newly added elements
        applyLanguage();
    }


    // ========================================================
    // 2. TEXT SUMMARIZER (Enhanced with File Upload & Mind Map)
    // ========================================================

    function showSummarizer() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">

                    <h2>📑 <span data-i18n="summaryTitle">تلخيص النصوص</span></h2>

                    <p>
                        <span data-i18n="summaryDescription">أداة تلخيص محلية بسيطة تعتمد على استخراج</span><br>
                        <span data-i18n="summaryDescription">الجمل الأكثر أهمية من النص مع خيارات متقدمة.</span>
                    </p>

                </div>


                <div class="file-drop-zone" style="margin-bottom: 15px;">

                    <div class="file-drop-zone-icon">
                        📄
                    </div>

                    <strong>
                        <span data-i18n="summaryUploadFile">رفع ملف</span> (TXT/HTML)
                    </strong>

                    <p>
                        <span data-i18n="summaryOrText">أو اكتب النص</span>
                    </p>

                    <input
                        type="file"
                        id="summaryFileInput"
                        accept=".txt,.html,.htm,text/html,text/plain"
                    >

                </div>

                <div id="summaryFileInfo" style="margin-bottom: 10px; font-size: 13px; color: var(--text-muted);"></div>

                <div class="form-group">

                    <label>
                        <span data-i18n="summaryLength">طول التلخيص</span>
                    </label>

                    <select class="form-control" id="summaryLength">
                        <option value="short">
                            <span data-i18n="summaryShort">قصير</span>
                        </option>
                        <option value="long">
                            <span data-i18n="summaryLong">طويل</span>
                        </option>
                    </select>
                </div>

                <div class="form-group">

                    <label>
                        <span data-i18n="summaryMindMap">تنسيق التلخيص</span>
                    </label>

                    <select class="form-control" id="summaryFormat">
                        <option value="bullet">
                            <span data-i18n="summaryBulletPoints">نقاط (افتراضي)</span>
                        </option>
                        <option value="mindmap">
                            <span data-i18n="summaryMindMapFormat">خريطة ذهنية</span>
                        </option>
                    </select>
                </div>

                <div class="form-group">

                    <label>
                        <span data-i18n="summaryOriginal">النص الأصلي</span>
                    </label>

                    <textarea
                        id="summaryInput"
                        class="form-control"
                        style="min-height:250px;"
                        placeholder="الصق المقال أو النص هنا..."
                    ></textarea>

                </div>


                <button
                    class="btn btn-primary"
                    id="summarizeBtn"
                    style="margin-top:15px;"
                >
                    <span data-i18n="summaryTitle">تلخيص النص</span>
                </button>


                <div
                    id="summaryResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();

        document
            .getElementById("summaryFileInput")
            .addEventListener(
                "change",
                readSummaryFile
            );

        document
            .getElementById("summarizeBtn")
            .addEventListener(
                "click",
                summarizeText
            );
    }


    function readSummaryFile(event) {

        const input = event.target;
        const file = input.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            document.getElementById("summaryInput").value = content;
            document.getElementById("summaryFileInfo").textContent =
                translations[currentLanguage].toastFileRead + file.name;
            showToast(
                translations[currentLanguage].toastFileRead + file.name,
                "success"
            );
        };

        reader.onerror = function() {
            showToast(
                translations[currentLanguage].toastFileError,
                "error"
            );
        };

        reader.readAsText(file, "UTF-8");
    }


    function summarizeText() {

        const text =
            document.getElementById(
                "summaryInput"
            ).value.trim();

        if (!text) {

            showToast(
                translations[currentLanguage].toastEnterText,
                "error"
            );

            return;
        }


        const summaryLength = document.getElementById("summaryLength").value;
        const summaryFormat = document.getElementById("summaryFormat").value;

        const sentences =
            text
                .split(/(?<=[.!؟?؛؛.])\s+/)
                .filter(Boolean);


        if (sentences.length <= 3) {

            showSummaryResult(
                sentences.join(" "),
                summaryFormat
            );

            return;
        }


        const words =
            text
                .toLowerCase()
                .replace(
                    /[^\p{L}\p{N}\s]/gu,
                    " "
                )
                .split(/\s+/)
                .filter(word => word.length > 2);


        const stopWords = new Set([

            "من",
            "في",
            "على",
            "إلى",
            "عن",
            "أن",
            "إن",
            "هذا",
            "هذه",
            "ذلك",
            "التي",
            "الذي",
            "وهو",
            "وهي",
            "مع",
            "كان",
            "كانت",
            "كما",
            "لذلك",
            "the",
            "and",
            "for",
            "with",
            "this",
            "that"
        ]);


        const frequency = {};

        words.forEach(word => {

            if (!stopWords.has(word)) {

                frequency[word] =
                    (frequency[word] || 0) + 1;
            }
        });


        const scored =
            sentences.map(
                (sentence, index) => {

                    const sentenceWords =
                        sentence
                            .toLowerCase()
                            .replace(
                                /[^\p{L}\p{N}\s]/gu,
                                " "
                            )
                            .split(/\s+/);

                    let score = 0;

                    sentenceWords.forEach(
                        word => {
                            score +=
                                frequency[word] || 0;
                        }
                    );

                    return {
                        sentence,
                        score,
                        index
                    };
                }
            );


        // Adjust selection based on summary length
        let selectionRatio = summaryLength === "short" ? 0.2 : 0.4;

        const count =
            Math.max(
                2,
                Math.ceil(
                    sentences.length * selectionRatio
                )
            );


        const selected =
            scored
                .sort(
                    (a, b) =>
                        b.score - a.score
                )
                .slice(0, count)
                .sort(
                    (a, b) =>
                        a.index - b.index
                );


        const summaryText =
            selected
                .map(item => item.sentence)
                .join(" ");

        showSummaryResult(
            summaryText,
            summaryFormat
        );
    }


    function showSummaryResult(summary, format) {

        const result =
            document.getElementById(
                "summaryResult"
            );

        result.style.display = "block";

        if (format === "mindmap") {
            // Format as mind map
            const lines = summary.split(/[.!؟?؛؛.]/).filter(Boolean);
            let mindMapHTML = `
                <div style="display: flex; flex-direction: column; gap: 15px; align-items: center; text-align: center;">
                    <div style="font-size: 18px; font-weight: bold; color: var(--primary);">🧠 <span data-i18n="summaryMindMapFormat">خريطة ذهنية</span></div>
                    <div style="width: 80%; height: 2px; background: var(--primary);"></div>
            `;

            lines.forEach((line, index) => {
                const words = line.split(/\s+/).slice(0, 5).join(" ");
                mindMapHTML += `
                    <div style="background: var(--primary-light); padding: 15px; border-radius: 10px; border: 2px solid var(--primary); max-width: 400px;">
                        <div style="font-weight: bold; color: var(--primary-dark); margin-bottom: 5px;">${index + 1}. ${escapeHTML(words)}</div>
                    </div>
                `;
            });

            mindMapHTML += `</div>`;
            result.innerHTML = mindMapHTML;
        } else {
            // Format as bullet points (default)
            result.innerHTML = `

                <h3><span data-i18n="summaryMindMap">الملخص</span></h3>

                <p style="white-space:pre-line; margin-top:10px;">
                    ${escapeHTML(summary)}
                </p>
            `;
        }

        // Apply translations
        applyLanguage();
    }


    // ========================================================
    // 3. CV BUILDER (Enhanced with Translations)
    // ========================================================

    function showCVBuilder() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>📄 <span data-i18n="cvTitle">منشئ السيرة الذاتية الاحترافية</span></h2>
                    <p>
                        <span data-i18n="cvDescription">أدخل بياناتك كاملة ثم أنشئ معاينة قابلة للطباعة.</span><br>
                        <span data-i18n="cvDescription">اختر القالب المناسب: القالب الأول مع صورة شخصية،</span><br>
                        <span data-i18n="cvDescription">والقالب الثاني مخصص لأنظمة ATS (نصي بسيط).</span>
                    </p>
                </div>


                <div class="cv-layout">

                    <form class="tool-form" id="cvForm">

                        <div class="form-group full">
                            <label><span data-i18n="cvTemplate">اختر القالب</span></label>
                            <select class="form-control" id="cvTemplate">
                                <option value="template1">
                                    <span data-i18n="cvTemplate1">قالب 1 - احترافي مع صورة شخصية</span>
                                </option>
                                <option value="template2">
                                    <span data-i18n="cvTemplate2">قالب 2 - ATS (نصي فقط، مناسب لأنظمة التوظيف الآلية)</span>
                                </option>
                            </select>
                        </div>

                        <div class="form-group full" id="cvPhotoGroup">
                            <label><span data-i18n="cvPhoto">الصورة الشخصية (لقالب 1 فقط)</span></label>
                            <input
                                class="form-control"
                                id="cvPhoto"
                                type="file"
                                accept="image/*"
                            >
                        </div>

                        <div class="form-grid">

                            <div class="form-group">
                                <label><span data-i18n="cvFullName">الاسم الكامل</span> *</label>
                                <input
                                    class="form-control"
                                    id="cvName"
                                    placeholder="${translations[currentLanguage].cvPlaceholderName}"
                                    required
                                >
                            </div>

                            <div class="form-group">
                                <label><span data-i18n="cvJobTitle">المسمى الوظيفي</span> *</label>
                                <input
                                    class="form-control"
                                    id="cvJob"
                                    placeholder="${translations[currentLanguage].cvPlaceholderJob}"
                                    required
                                >
                            </div>

                            <div class="form-group">
                                <label><span data-i18n="cvEmail">البريد الإلكتروني</span></label>
                                <input
                                    class="form-control"
                                    id="cvEmail"
                                    type="email"
                                    placeholder="${translations[currentLanguage].cvPlaceholderEmail}"
                                >
                            </div>

                            <div class="form-group">
                                <label><span data-i18n="cvPhone">رقم الهاتف</span></label>
                                <input
                                    class="form-control"
                                    id="cvPhone"
                                    placeholder="${translations[currentLanguage].cvPlaceholderPhone}"
                                >
                            </div>

                            <div class="form-group">
                                <label><span data-i18n="cvLocation">المدينة / الدولة</span></label>
                                <input
                                    class="form-control"
                                    id="cvLocation"
                                    placeholder="${translations[currentLanguage].cvPlaceholderLocation}"
                                >
                            </div>

                            <div class="form-group">
                                <label><span data-i18n="cvWebsite">رابط LinkedIn أو موقعك</span></label>
                                <input
                                    class="form-control"
                                    id="cvWebsite"
                                    placeholder="${translations[currentLanguage].cvPlaceholderWebsite}"
                                >
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvSummary">الملخص المهني</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvSummary"
                                    placeholder="${translations[currentLanguage].cvPlaceholderSummary}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvExperience">الخبرات العملية</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvExperience"
                                    placeholder="${translations[currentLanguage].cvPlaceholderExperience}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvEducation">التعليم</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvEducation"
                                    placeholder="${translations[currentLanguage].cvPlaceholderEducation}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvSkills">المهارات</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvSkills"
                                    placeholder="${translations[currentLanguage].cvPlaceholderSkills}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvLanguages">اللغات</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvLanguages"
                                    placeholder="${translations[currentLanguage].cvPlaceholderLanguages}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvCertificates">الدورات والشهادات</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvCertificates"
                                    placeholder="${translations[currentLanguage].cvPlaceholderCertificates}"
                                ></textarea>
                            </div>

                            <div class="form-group full">
                                <label><span data-i18n="cvProjects">المشاريع والإنجازات</span></label>
                                <textarea
                                    class="form-control"
                                    id="cvProjects"
                                    placeholder="${translations[currentLanguage].cvPlaceholderProjects}"
                                ></textarea>
                            </div>

                        </div>


                        <div class="button-row">

                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                📄 <span data-i18n="cvCreate">إنشاء السيرة</span>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary"
                                id="cvSave"
                            >
                                💾 <span data-i18n="cvSave">حفظ البيانات</span>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary"
                                id="cvLoad"
                            >
                                ↻ <span data-i18n="cvLoad">استعادة</span>
                            </button>

                            <button
                                type="button"
                                class="btn btn-success"
                                id="cvDownload"
                            >
                                📥 <span data-i18n="cvDownload">تنزيل HTML</span>
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary"
                                id="cvPrint"
                            >
                                🖨️ <span data-i18n="cvPrint">طباعة</span>
                            </button>

                        </div>

                    </form>


                    <div class="cv-preview-wrapper">

                        <div
                            class="cv-preview"
                            id="cvPreview"
                        >

                            <h1><span data-i18n="cvPlaceholderName">اسمك الكامل</span></h1>

                            <div class="cv-job-title">
                                <span data-i18n="cvPlaceholderJob">المسمى الوfunctionي</span>
                            </div>

                            <p>
                                <span data-i18n="cvPlaceholderEmail">البريد الإلكتروني</span> · <span data-i18n="cvPlaceholderPhone">الهاتف</span> · <span data-i18n="cvPlaceholderLocation">المدينة</span>
                            </p>

                            <div class="cv-section">
                                <h3><span data-i18n="cvSummary">الملخص المهني</span></h3>
                                <p>
                                    <span data-i18n="cvPlaceholderSummary">ستظهر معاينة السيرة هنا.</span>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        `);

        // Apply translations
        applyLanguage();

        const form =
            document.getElementById("cvForm");

        form.addEventListener(
            "input",
            updateCVPreview
        );

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                updateCVPreview();

                showToast(
                    "تم إنشاء معاينة السيرة الذاتية.",
                    "success"
                );
            }
        );


        document
            .getElementById("cvSave")
            .addEventListener(
                "click",
                saveCV
            );


        document
            .getElementById("cvLoad")
            .addEventListener(
                "click",
                loadCV
            );


        document
            .getElementById("cvTemplate")
            .addEventListener(
                "change",
                () => {
                    updatePhotoFieldVisibility();
                    updateCVPreview();
                }
            );


        document
            .getElementById("cvPhoto")
            .addEventListener(
                "change",
                handlePhotoUpload
            );


        document
            .getElementById("cvDownload")
            .addEventListener(
                "click",
                downloadCV
            );


        document
            .getElementById("cvPrint")
            .addEventListener(
                "click",
                printCV
            );


        updatePhotoFieldVisibility();
        updateCVPreview();
    }


    function handlePhotoUpload() {

        const input = document.getElementById("cvPhoto");

        if (input.files && input.files[0]) {

            const reader = new FileReader();

            reader.onload = function(e) {

                input.dataset.photoData = e.target.result;

                updateCVPreview();
            };

            reader.readAsDataURL(input.files[0]);
        }
    }


    function updatePhotoFieldVisibility() {

        const template = document.getElementById("cvTemplate").value;

        const photoGroup = document.getElementById("cvPhotoGroup");

        if (photoGroup) {

            photoGroup.style.display =
                template === "template1" ? "block" : "none";
        }
    }


    function getCVData() {

        const fields = [
            "cvName",
            "cvJob",
            "cvEmail",
            "cvPhone",
            "cvLocation",
            "cvWebsite",
            "cvSummary",
            "cvExperience",
            "cvEducation",
            "cvSkills",
            "cvLanguages",
            "cvCertificates",
            "cvProjects",
            "cvTemplate"
        ];

        const data = {};

        fields.forEach(id => {

            const element = document.getElementById(id);

            if (element) {

                data[id] = element.value || "";
            }
        });

        // Add photo data if exists
        const photoInput = document.getElementById("cvPhoto");

        if (photoInput && photoInput.dataset.photoData) {

            data.cvPhoto = photoInput.dataset.photoData;
        }

        return data;
    }


    function updateCVPreview() {

        const data = getCVData();

        const preview =
            document.getElementById("cvPreview");

        if (!preview) return;

        // Get current language from localStorage to ensure it's always up to date
        const currentLanguage =
            localStorage.getItem("injazLanguage") || "ar";

        const isRTL = currentLanguage === "ar";

        // Update preview direction based on current language
        preview.dir = isRTL ? "rtl" : "ltr";

        const listToHTML = text => {

            if (!text.trim()) return "";

            return `
                <ul>
                    ${text
                        .split("\n")
                        .filter(Boolean)
                        .map(
                            line =>
                                `<li>${escapeHTML(line)}</li>`
                        )
                        .join("")}
                </ul>
            `;
        };

        const template = data.cvTemplate || "template1";

        let templateHTML = "";

        if (template === "template1") {

            // Template 1: With photo
            templateHTML = `
                <div class="cv-template-1" dir="${isRTL ? "rtl" : "ltr"}">

                    <div class="cv-header-1">

                        <div class="cv-photo-section">
                            ${data.cvPhoto
                                ? `<img src="${data.cvPhoto}" alt="Photo" class="cv-photo">`
                                : `<div class="cv-photo-placeholder">📷</div>`
                            }
                        </div>

                        <div class="cv-info-section">
                            <h1>
                                ${escapeHTML(
                                    data.cvName || translations[currentLanguage].cvPlaceholderName
                                )}
                            </h1>

                            <div class="cv-job-title">
                                ${escapeHTML(
                                    data.cvJob || translations[currentLanguage].cvPlaceholderJob
                                )}
                            </div>

                            <p class="cv-contact">
                                ${escapeHTML(data.cvEmail)}
                                ${data.cvEmail && data.cvPhone ? " · " : ""}
                                ${escapeHTML(data.cvPhone)}
                                ${(data.cvEmail || data.cvPhone) &&
                                data.cvLocation ? " · " : ""}
                                ${escapeHTML(data.cvLocation)}
                            </p>
                        </div>

                    </div>

                    ${data.cvSummary
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvSummary">الملخص المهني</span></h3>
                            <p>
                                ${escapeHTML(
                                    data.cvSummary
                                ).replace(/\n/g, "<br>")}
                            </p>
                        </div>
                        `
                        : ""
                    }

                    ${data.cvExperience
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvExperience">الخبرة العملية</span></h3>
                            ${listToHTML(data.cvExperience)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvEducation
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvEducation">التعليم</span></h3>
                            ${listToHTML(data.cvEducation)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvSkills
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvSkills">المهارات</span></h3>
                            ${listToHTML(data.cvSkills)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvLanguages
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvLanguages">اللغات</span></h3>
                            ${listToHTML(data.cvLanguages)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvCertificates
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvCertificates">الدورات والشهادات</span></h3>
                            ${listToHTML(data.cvCertificates)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvProjects
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvProjects">المشاريع والإنجازات</span></h3>
                            ${listToHTML(data.cvProjects)}
                        </div>
                        `
                        : ""
                    }

                </div>
            `;

        } else {

            // Template 2: ATS-friendly text-only layout (clean, simple, no decorative elements)
            templateHTML = `
                <div class="cv-template-2" dir="${isRTL ? "rtl" : "ltr"}">

                    <div class="cv-header-2">
                        <h1>
                            ${escapeHTML(
                                data.cvName || translations[currentLanguage].cvPlaceholderName
                            )}
                        </h1>

                        <div class="cv-job-title">
                            ${escapeHTML(
                                data.cvJob || translations[currentLanguage].cvPlaceholderJob
                            )}
                        </div>

                        <p class="cv-contact">
                            ${escapeHTML(data.cvEmail)}
                            ${data.cvEmail && data.cvPhone ? " | " : ""}
                            ${escapeHTML(data.cvPhone)}
                            ${(data.cvEmail || data.cvPhone) &&
                            data.cvLocation ? " | " : ""}
                            ${escapeHTML(data.cvLocation)}
                            ${data.cvWebsite ? " | " : ""}
                            ${escapeHTML(data.cvWebsite)}
                        </p>
                    </div>

                    ${data.cvSummary
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvSummary">الملخص المهني</span></h3>
                            <p>
                                ${escapeHTML(
                                    data.cvSummary
                                ).replace(/\n/g, "<br>")}
                            </p>
                        </div>
                        `
                        : ""
                    }

                    ${data.cvExperience
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvExperience">الخبرة العملية</span></h3>
                            ${listToHTML(data.cvExperience)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvEducation
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvEducation">التعليم</span></h3>
                            ${listToHTML(data.cvEducation)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvSkills
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvSkills">المهارات</span></h3>
                            ${listToHTML(data.cvSkills)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvLanguages
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvLanguages">اللغات</span></h3>
                            ${listToHTML(data.cvLanguages)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvCertificates
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvCertificates">الدورات والشهادات</span></h3>
                            ${listToHTML(data.cvCertificates)}
                        </div>
                        `
                        : ""
                    }

                    ${data.cvProjects
                        ? `
                        <div class="cv-section">
                            <h3><span data-i18n="cvProjects">المشاريع والإنجازات</span></h3>
                            ${listToHTML(data.cvProjects)}
                        </div>
                        `
                        : ""
                    }

                </div>
            `;
        }

        preview.innerHTML = templateHTML;

        // Apply translations to preview
        applyLanguage();
    }


    function saveCV() {

        try {
            const cvData = getCVData();
            localStorage.setItem(
                "injazCV",
                JSON.stringify(cvData)
            );

            showToast(
                translations[currentLanguage].toastSuccessSave,
                "success"
            );
        } catch (error) {
            console.error("Error saving CV data:", error);
            showToast(
                translations[currentLanguage].toastSaveError,
                "error"
            );
        }
    }


    function loadCV() {

        try {
            const saved =
                localStorage.getItem("injazCV");

            if (!saved) {

                showToast(
                    translations[currentLanguage].toastNoSaved,
                    "info"
                );

                return;
            }

            const data = JSON.parse(saved);

            // Validate data structure
            if (!data || typeof data !== 'object') {
                showToast(
                    "البيانات المحفوظة تالفة.",
                    "error"
                );
                return;
            }

            Object.keys(data).forEach(id => {

                const field =
                    document.getElementById(id);

                if (field) {

                    if (id === "cvPhoto" && data[id]) {

                        field.dataset.photoData = data[id];

                    } else if (field.tagName === "SELECT" || field.tagName === "INPUT" || field.tagName === "TEXTAREA") {

                        field.value = data[id] || "";
                    }
                }
            });

            // Handle template selection
            const templateSelect = document.getElementById("cvTemplate");

            if (templateSelect && data.cvTemplate) {

                templateSelect.value = data.cvTemplate;
            }

            // Show/hide photo field based on template
            updatePhotoFieldVisibility();

            updateCVPreview();

            showToast(
                translations[currentLanguage].toastSuccessLoad,
                "success"
            );
        } catch (error) {
            console.error("Error loading CV data:", error);
            showToast(
                translations[currentLanguage].toastLoadError,
                "error"
            );
        }
    }


    function downloadCV() {

        const preview = document.getElementById("cvPreview");

        if (!preview) {

            showToast(
                translations[currentLanguage].toastNoPreview,
                "error"
            );

            return;
        }

        // Get current language for proper file naming
        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const filename = currentLanguage === "ar" ? "سيرة-ذاتية.html" : "CV.html";

        // Create complete HTML document
        const cvContent = `
<!DOCTYPE html>
<html lang="${currentLanguage}" dir="${currentLanguage === "ar" ? "rtl" : "ltr"}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سيرة ذاتية - إنجاز</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.6;
            color: #111827;
        }

        .cv-template-1 {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .cv-header-1 {
            display: flex;
            align-items: center;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom: 3px solid #2563eb;
        }

        .cv-photo-section {
            flex-shrink: 0;
        }

        .cv-photo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #2563eb;
        }

        .cv-info-section {
            flex: 1;
        }

        .cv-template-1 h1 {
            font-size: 26px;
            margin-bottom: 5px;
            color: #111827;
            font-weight: 800;
        }

        .cv-template-1 .cv-job-title {
            color: #2563eb;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 12px;
        }

        .cv-template-1 .cv-contact {
            color: #475569;
            font-size: 13px;
            line-height: 1.6;
        }

        .cv-template-2 {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 20px;
        }

        .cv-header-2 {
            text-align: center;
            padding-bottom: 25px;
            border-bottom: 2px solid #000;
        }

        .cv-template-2 h1 {
            font-size: 26px;
            margin-bottom: 8px;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
        }

        .cv-template-2 .cv-job-title {
            color: #000;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 15px;
        }

        .cv-template-2 .cv-contact {
            color: #333;
            font-size: 13px;
            line-height: 1.8;
            font-weight: 500;
        }

        .cv-section {
            margin-top: 20px;
        }

        .cv-section h3 {
            padding-bottom: 6px;
            border-bottom: 2px solid #000;
            font-size: 14px;
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .cv-section p,
        .cv-section li {
            font-size: 12px;
            line-height: 1.7;
            color: #000;
        }

        .cv-section ul {
            padding-inline-start: 20px;
            margin: 8px 0;
        }

        .cv-section li {
            margin-bottom: 6px;
        }

        @media print {
            body {
                padding: 0;
            }

            .cv-template-2 {
                padding: 0;
            }
        }
    </style>
</head>
<body>
    ${preview.innerHTML}
</body>
</html>
        `;

        downloadBlob(
            cvContent,
            filename,
            "text/html;charset=utf-8"
        );

        showToast(
            translations[currentLanguage].toastSuccessDownload,
            "success"
        );
    }


    function printCV() {

        const preview = document.getElementById("cvPreview");

        if (!preview) {

            showToast(
                translations[currentLanguage].toastNoPreviewPrint,
                "error"
            );

            return;
        }

        // Create a clean print window
        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const isRTL = currentLanguage === "ar";

        const printContent = `
<!DOCTYPE html>
<html lang="${currentLanguage}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="UTF-8">
    <title>سيرة ذاتية - إنجاز</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.6;
            color: #111827;
        }

        .cv-template-1 {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .cv-header-1 {
            display: flex;
            align-items: center;
            gap: 20px;
            padding-bottom: 20px;
            border-bottom: 3px solid #2563eb;
        }

        .cv-photo-section {
            flex-shrink: 0;
        }

        .cv-photo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #2563eb;
        }

        .cv-info-section {
            flex: 1;
        }

        .cv-template-1 h1 {
            font-size: 26px;
            margin-bottom: 5px;
            color: #111827;
            font-weight: 800;
        }

        .cv-template-1 .cv-job-title {
            color: #2563eb;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 12px;
        }

        .cv-template-1 .cv-contact {
            color: #475569;
            font-size: 13px;
            line-height: 1.6;
        }

        .cv-template-2 {
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 20px;
        }

        .cv-header-2 {
            text-align: center;
            padding-bottom: 25px;
            border-bottom: 2px solid #000;
        }

        .cv-template-2 h1 {
            font-size: 26px;
            margin-bottom: 8px;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
        }

        .cv-template-2 .cv-job-title {
            color: #000;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 15px;
        }

        .cv-template-2 .cv-contact {
            color: #333;
            font-size: 13px;
            line-height: 1.8;
            font-weight: 500;
        }

        .cv-section {
            margin-top: 20px;
        }

        .cv-section h3 {
            padding-bottom: 6px;
            border-bottom: 2px solid #000;
            font-size: 14px;
            font-weight: 700;
            color: #000;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .cv-section p,
        .cv-section li {
            font-size: 12px;
            line-height: 1.7;
            color: #000;
        }

        .cv-section ul {
            padding-inline-start: 20px;
            margin: 8px 0;
        }

        .cv-section li {
            margin-bottom: 6px;
        }

        @media print {
            body {
                padding: 0;
            }

            .cv-template-2 {
                padding: 0;
            }
        }
    </style>
</head>
<body>
    ${preview.innerHTML}
    <script>
        window.onload = function() {
            window.print();
        };
    <\/script>
</body>
</html>
        `;

        const printWindow = window.open("", "_blank");

        if (!printWindow) {

            showToast(
                translations[currentLanguage].toastPopupBlocked,
                "error"
            );

            return;
        }

        printWindow.document.write(printContent);
        printWindow.document.close();

        showToast(
            translations[currentLanguage].toastSuccessPrint,
            "success"
        );
    }


    // ========================================================
    // 4. FILE CONVERTER (Enhanced with Translations)
    // ========================================================

    function showFileConverter() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">

                    <h2>📁 <span data-i18n="converterTitle">مركز الملفات</span></h2>

                    <p>
                        <span data-i18n="converterDescription">اختر العملية التي تريد تنفيذها.</span><br>
                        <span data-i18n="converterDescription">بعض عمليات التحويل المتقدمة تحتاج مكتبات خارجية.</span>
                    </p>

                </div>


                <div class="converter-options">

                    <div class="converter-option"
                         data-file-action="image-pdf">

                        <div class="converter-option-icon">
                            🖼️
                        </div>

                        <strong><span data-i18n="fileConvertImage">صور → PDF</span></strong>

                        <small><span data-i18n="fileConvertImageDesc">متعددة مسموح</small>

                    </div>


                    <div class="converter-option"
                         data-file-action="text-file">

                        <div class="converter-option-icon">
                            📝
                        </div>

                        <strong><span data-i18n="fileConvertText">نص → ملف</span></strong>

                        <small><span data-i18n="fileConvertTextDesc">رفع/تحرير TXT/HTML</small>

                    </div>


                    <div class="converter-option"
                         data-file-action="image-resize">

                        <div class="converter-option-icon">
                            📐
                        </div>

                        <strong><span data-i18n="fileConvertResize">تغيير حجم صورة</span></strong>

                        <small><span data-i18n="fileConvertResizeDesc">Resize</small>

                    </div>

                </div>


                <div id="fileToolArea"
                     style="margin-top:20px;">

                    <div class="file-drop-zone">

                        <div class="file-drop-zone-icon">
                            📤
                        </div>

                        <strong>
                            <span data-i18n="fileSelectTool">اختر أداة من الأعلى</span>
                        </strong>

                        <p>
                            <span data-i18n="fileToolOptions">سيتم عرض خيارات العملية هنا.</span>
                        </p>

                    </div>

                </div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .querySelectorAll("[data-file-action]")
            .forEach(option => {

                option.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                "[data-file-action]"
                            )
                            .forEach(item =>
                                item.classList.remove(
                                    "active"
                                )
                            );

                        option.classList.add("active");

                        const action =
                            option.getAttribute(
                                "data-file-action"
                            );

                        renderFileAction(action);
                    }
                );
            });
    }


    function renderFileAction(action) {

        const area =
            document.getElementById("fileToolArea");

        if (!area) return;


        if (action === "image-pdf") {

            area.innerHTML = `

                <div class="file-drop-zone">

                    <div class="file-drop-zone-icon">
                        🖼️
                    </div>

                    <strong>
                        <span data-i18n="fileSelectImages">اختر صور (متعددة مسموح)</span>
                    </strong>

                    <p>
                        JPG أو PNG - يمكنك اختيار عدة صور دفعة واحدة
                    </p>

                    <input
                        type="file"
                        id="imagePdfInput"
                        accept="image/jpeg,image/png"
                        multiple
                    >

                </div>

                <div id="selectedImagesInfo" style="margin-top: 10px; font-size: 13px; color: var(--text-muted);"></div>

                <div class="button-row"
                     style="margin-top:15px;">

                    <button
                        class="btn btn-primary"
                        id="imagePdfBtn"
                    >
                        📄 <span data-i18n="fileCreatePDF">إنشاء ملف PDF</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="imagePrintBtn"
                    >
                        🖨️ <span data-i18n="filePrint">طباعة</span>
                    </button>

                </div>

                <div id="fileResult"></div>
            `;


            // Apply translations
            applyLanguage();


            document
                .getElementById("imagePdfInput")
                .addEventListener(
                    "change",
                    updateSelectedImagesInfo
                );

            document
                .getElementById("imagePdfBtn")
                .addEventListener(
                    "click",
                    imagesToPDF
                );

            document
                .getElementById("imagePrintBtn")
                .addEventListener(
                    "click",
                    imagesToPrint
                );
        }


        if (action === "text-file") {

            area.innerHTML = `

                <div class="file-drop-zone" style="margin-bottom: 15px;">

                    <div class="file-drop-zone-icon">
                        📄
                    </div>

                    <strong>
                        <span data-i18n="summaryUploadFile">رفع ملف</span> (TXT/HTML)
                    </strong>

                    <p>
                        <span data-i18n="summaryOrText">أو اكتب النص</span>
                    </p>

                    <input
                        type="file"
                        id="textFileInput"
                        accept=".txt,.html,.htm,text/html,text/plain"
                    >

                </div>

                <div id="textFileInfo" style="margin-bottom: 10px; font-size: 13px; color: var(--text-muted);"></div>

                <div class="form-group">

                    <label>
                        <span data-i18n="summaryOriginal">النص</span>
                    </label>

                    <textarea
                        id="fileText"
                        class="form-control"
                        placeholder="${translations[currentLanguage].fileWriteText}"
                    ></textarea>

                </div>

                <div class="button-row">

                    <button
                        class="btn btn-primary"
                        id="downloadTxt"
                    >
                        <span data-i18n="fileDownloadTxt">تنزيل TXT</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="downloadHtml"
                    >
                        <span data-i18n="fileDownloadHtml">تنزيل HTML</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="clearText"
                    >
                        <span data-i18n="fileClearText">مسح النص</span>
                    </button>

                </div>
            `;


            // Apply translations
            applyLanguage();


            document
                .getElementById("textFileInput")
                .addEventListener(
                    "change",
                    readTextFile
                );

            document
                .getElementById("downloadTxt")
                .addEventListener(
                    "click",
                    downloadTextFile
                );


            document
                .getElementById("downloadHtml")
                .addEventListener(
                    "click",
                    downloadHTMLFile
                );

            document
                .getElementById("clearText")
                .addEventListener(
                    "click",
                    clearTextFile
                );
        }


        if (action === "image-resize") {

            area.innerHTML = `

                <div class="form-group">

                    <label>
                        <span data-i18n="fileSelectImages">اختر الصورة</span>
                    </label>

                    <input
                        class="form-control"
                        type="file"
                        id="resizeImageInput"
                        accept="image/*"
                    >

                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            العرض
                        </label>

                        <input
                            class="form-control"
                            id="resizeWidth"
                            type="number"
                            placeholder="مثال: 1200"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            الارتفاع
                        </label>

                        <input
                            class="form-control"
                            id="resizeHeight"
                            type="number"
                            placeholder="مثال: 800"
                        >

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn btn-primary"
                        id="resizeBtn"
                    >
                        تغيير الحجم وتنزيل
                    </button>

                </div>
            `;


            // Apply translations
            applyLanguage();


            document
                .getElementById("resizeBtn")
                .addEventListener(
                    "click",
                    resizeImage
                );
        }
    }


    function updateSelectedImagesInfo() {
        const input = document.getElementById("imagePdfInput");
        const infoDiv = document.getElementById("selectedImagesInfo");

        if (input.files.length > 0) {
            const t = translations[currentLanguage];
            infoDiv.textContent = `${t.fileImagesInfo} ${input.files.length} ${t.fileImages}`;
        } else {
            infoDiv.textContent = "";
        }
    }

    function imagesToPDF() {

        const input = document.getElementById("imagePdfInput");

        if (!input.files.length) {

            showToast(
                translations[currentLanguage].toastSelectImage,
                "error"
            );

            return;
        }

        // Create a simple HTML document with all images
        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const isRTL = currentLanguage === "ar";

        let htmlContent = `
            <!DOCTYPE html>
            <html dir="${isRTL ? "rtl" : "ltr"}">
            <head>
                <meta charset="UTF-8">
                <title>إنجاز - معرض الصور</title>
                <style>
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                        text-align: center;
                    }
                    .header {
                        margin-bottom: 30px;
                        padding-bottom: 20px;
                        border-bottom: 2px solid #2563eb;
                    }
                    .header h1 {
                        color: #2563eb;
                        margin: 0;
                        font-size: 24px;
                    }
                    .image-container {
                        margin: 30px auto;
                        max-width: 800px;
                        page-break-inside: avoid;
                    }
                    .image-container img {
                        max-width: 100%;
                        height: auto;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    }
                    .image-info {
                        margin-top: 10px;
                        font-size: 12px;
                        color: #64748b;
                    }
                    @media print {
                        body {
                            padding: 0;
                        }
                        .image-container {
                            page-break-inside: avoid;
                            margin: 20px auto;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>معرض الصور - إنجاز</h1>
                    <p>${input.files.length} صورة</p>
                </div>
        `;

        // Process each image
        Array.from(input.files).forEach((file, index) => {
            const url = URL.createObjectURL(file);
            htmlContent += `
                <div class="image-container">
                    <img src="${url}" alt="Image ${index + 1}">
                    <div class="image-info">${file.name}</div>
                </div>
            `;
        });

        htmlContent += `
                <script>
                    window.onload = function() {
                        window.print();
                    };
                <\/script>
            </body>
            </html>
        `;

        const printWindow = window.open("", "_blank");

        if (!printWindow) {

            showToast(
                translations[currentLanguage].toastPopupBlocked,
                "error"
            );

            return;
        }

        printWindow.document.write(htmlContent);
        printWindow.document.close();

        const t = translations[currentLanguage];
        showToast(
            `${t.toastImagesPDF} ${input.files.length} ${t.fileImagesPDFNote}`,
            "success"
        );
    }

    function imagesToPrint() {

        const input = document.getElementById("imagePdfInput");

        if (!input.files.length) {

            showToast(
                translations[currentLanguage].toastSelectImage,
                "error"
            );

            return;
        }

        // Reuse the same logic for printing
        imagesToPDF();
    }

    function downloadTextFile() {

        const text =
            document.getElementById(
                "fileText"
            ).value;

        if (!text.trim()) {
            showToast(
                translations[currentLanguage].toastNoText,
                "error"
            );
            return;
        }

        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const filename = currentLanguage === "ar" ? "نص-إنجاز.txt" : "injaz-text.txt";

        const success = downloadBlob(
            text,
            filename,
            "text/plain;charset=utf-8"
        );

        if (success) {
            showToast(
                translations[currentLanguage].toastDownloadText,
                "success"
            );
        }
    }

    function downloadHTMLFile() {

        const text =
            document.getElementById(
                "fileText"
            ).value;

        if (!text.trim()) {
            showToast(
                translations[currentLanguage].toastNoText,
                "error"
            );
            return;
        }

        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const isRTL = currentLanguage === "ar";
        const filename = currentLanguage === "ar" ? "مستند-إنجاز.html" : "injaz-document.html";

        const html = `
<!DOCTYPE html>
<html lang="${currentLanguage}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>إنجاز</title>
<style>
    body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        line-height: 1.6;
    }
</style>
</head>
<body>
${escapeHTML(text).replace(/\n/g, "<br>")}
</body>
</html>
        `;

        const success = downloadBlob(
            html,
            filename,
            "text/html;charset=utf-8"
        );

        if (success) {
            showToast(
                translations[currentLanguage].toastDownloadHTML,
                "success"
            );
        }
    }

    function readTextFile(event) {

        const input = event.target;
        const file = input.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            document.getElementById("fileText").value = content;
            document.getElementById("textFileInfo").textContent =
                translations[currentLanguage].toastFileRead + file.name;
            showToast(
                translations[currentLanguage].toastFileRead + file.name,
                "success"
            );
        };

        reader.onerror = function() {
            showToast(
                translations[currentLanguage].toastFileError,
                "error"
            );
        };

        reader.readAsText(file, "UTF-8");
    }

    function clearTextFile() {
        document.getElementById("fileText").value = "";
        document.getElementById("textFileInput").value = "";
        document.getElementById("textFileInfo").textContent = "";
        showToast(
            translations[currentLanguage].toastClearText,
            "info"
        );
    }

    function resizeImage() {

        const input =
            document.getElementById(
                "resizeImageInput"
            );

        const width =
            parseInt(
                document.getElementById(
                    "resizeWidth"
                ).value
            );

        const height =
            parseInt(
                document.getElementById(
                    "resizeHeight"
                ).value
            );


        if (!input.files.length) {

            showToast(
                "اختر صورة.",
                "error"
            );

            return;
        }


        if (!width || !height) {

            showToast(
                "أدخل العرض والارتفاع.",
                "error"
            );

            return;
        }


        const file = input.files[0];

        const image = new Image();

        image.onload = () => {

            const canvas =
                document.createElement(
                    "canvas"
                );

            canvas.width = width;
            canvas.height = height;

            const context =
                canvas.getContext("2d");

            context.drawImage(
                image,
                0,
                0,
                width,
                height
            );


            canvas.toBlob(
                blob => {

                    if (!blob) return;

                    downloadBlob(
                        blob,
                        "injaz-resized-image.png"
                    );

                    showToast(
                        "تم تغيير حجم الصورة.",
                        "success"
                    );
                },
                "image/png"
            );
        };


        image.src =
            URL.createObjectURL(file);
    }


    // ========================================================
    // Helper Functions
    // ========================================================

    function numberValue(id) {

        const element =
            document.getElementById(id);

        if (!element) return 0;

        return parseFloat(
            element.value
        ) || 0;
    }


    function formatNumber(number) {

        return Number(number)
            .toLocaleString(
                "en-US",
                {
                    maximumFractionDigits: 2
                }
            );
    }


    function formatDateInput(date) {

        const year =
            date.getFullYear();

        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function downloadBlob(
        data,
        filename,
        type
    ) {

        try {
            const blob =
                data instanceof Blob
                    ? data
                    : new Blob(
                        [data],
                        {
                            type:
                                type ||
                                "application/octet-stream"
                        }
                    );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");

            link.href = url;
            link.download = filename;

            // Use document.body.appendChild for better compatibility
            document.body.appendChild(link);

            // Use click() method with proper event simulation
            link.style.display = 'none';
            link.click();

            // Clean up
            setTimeout(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 100);

            return true;
        } catch (error) {
            console.error("Error downloading file:", error);
            showToast(
                translations[currentLanguage].toastDownloadError,
                "error"
            );
            return false;
        }
    }


    function showToast(
        message,
        type = "info"
    ) {

        let container =
            document.querySelector(
                ".toast-container"
            );


        if (!container) {

            container =
                document.createElement("div");

            container.className =
                "toast-container";

            document.body.appendChild(
                container
            );
        }


        const toast =
            document.createElement("div");

        toast.className =
            `toast ${type}`;

        toast.textContent =
            message;

        container.appendChild(
            toast
        );


        setTimeout(
            () => {

                toast.style.opacity = "0";

                toast.style.transform =
                    "translateY(10px)";

                setTimeout(
                    () => toast.remove(),
                    250
                );

            },
            3000
        );
    }


    // --------------------------------------------------------
    // Make functions available to generated interfaces
    // --------------------------------------------------------

    window.showToast = showToast;
    window.updateCVPreview = updateCVPreview;

    // ========================================================
    // 5. PROFIT MARGIN CALCULATOR
    // ========================================================

    function showProfitCalculator() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>📈 <span data-i18n="profitTitle">حاسبة هامش الربح</span></h2>
                    <p>
                        <span data-i18n="profitDescription">احسب التكلفة والربح والهامش وسعر البيع المناسب.</span>
                    </p>
                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="profitCost">التكلفة</span>
                        </label>

                        <input
                            type="number"
                            id="profitCost"
                            class="form-control"
                            placeholder="مثال: 100"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="profitMarkup">نسبة الزيادة (Markup %)</span>
                        </label>

                        <input
                            type="number"
                            id="profitMarkup"
                            class="form-control"
                            placeholder="مثال: 20"
                        >

                    </div>

                </div>


                <div class="button-row"
                     style="margin-top:15px;">

                    <button
                        class="btn btn-primary"
                        id="profitCalculate"
                    >
                        📊 <span data-i18n="calculateNow">احسب</span>
                    </button>

                </div>


                <div
                    id="profitResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("profitCalculate")
            .addEventListener(
                "click",
                calculateProfit
            );
    }


    function calculateProfit() {

        const cost =
            parseFloat(
                document.getElementById(
                    "profitCost"
                ).value
            ) || 0;

        const markup =
            parseFloat(
                document.getElementById(
                    "profitMarkup"
                ).value
            ) || 0;


        if (cost <= 0) {

            showToast(
                "أدخل التكلفة.",
                "error"
            );

            return;
        }


        const profit =
            cost * (markup / 100);

        const sellingPrice =
            cost + profit;

        const margin =
            (profit / sellingPrice) * 100;


        const result =
            document.getElementById(
                "profitResult"
            );


        result.style.display = "block";

        result.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="stats-grid">

                <div class="stat-card">
                    <small><span data-i18n="profitCost">التكلفة</span></small>
                    <strong>${formatNumber(cost)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="profitProfit">الربح</span></small>
                    <strong>${formatNumber(profit)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="profitSellingPrice">سعر البيع</span></small>
                    <strong>${formatNumber(sellingPrice)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="profitMargin">هامش الربح</span></small>
                    <strong>${formatNumber(margin)}%</strong>
                </div>

            </div>
        `;

        // Apply translations
        applyLanguage();
    }


    // ========================================================
    // 6. PERCENTAGE CALCULATOR
    // ========================================================

    function showPercentageCalculator() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>% <span data-i18n="percentageTitle">حاسبة النسبة المئوية</span></h2>
                    <p>
                        <span data-i18n="percentageDescription">احسب النسب والزيادات والانخفاضات بسهولة.</span>
                    </p>
                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="percentageType">نوع الحساب</span>
                    </label>

                    <select class="form-control" id="percentageType">
                        <option value="of">
                            <span data-i18n="percentageOf">ما هو X% من Y؟</span>
                        </option>
                        <option value="is">
                            <span data-i18n="percentageIs">X هو ما نسبة من Y؟</span>
                        </option>
                        <option value="increase">
                            <span data-i18n="percentageIncrease">زيادة نسبة</span>
                        </option>
                        <option value="decrease">
                            <span data-i18n="percentageDecrease">انخفاض نسبة</span>
                        </option>
                    </select>

                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="percentageX">القيمة X</span>
                        </label>

                        <input
                            type="number"
                            id="percentageX"
                            class="form-control"
                            placeholder="مثال: 20"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="percentageY">القيمة Y</span>
                        </label>

                        <input
                            type="number"
                            id="percentageY"
                            class="form-control"
                            placeholder="مثال: 100"
                        >

                    </div>

                </div>


                <div class="button-row"
                     style="margin-top:15px;">

                    <button
                        class="btn btn-primary"
                        id="percentageCalculate"
                    >
                        📊 <span data-i18n="calculateNow">احسب</span>
                    </button>

                </div>


                <div
                    id="percentageResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("percentageCalculate")
            .addEventListener(
                "click",
                calculatePercentage
            );
    }


    function calculatePercentage() {

        const type =
            document.getElementById(
                "percentageType"
            ).value;

        const x =
            parseFloat(
                document.getElementById(
                    "percentageX"
                ).value
            ) || 0;

        const y =
            parseFloat(
                document.getElementById(
                    "percentageY"
                ).value
            ) || 0;


        let result = 0;
        let explanation = "";


        switch (type) {

            case "of":
                result = (x / 100) * y;
                explanation = `${x}% من ${y} = ${formatNumber(result)}`;
                break;

            case "is":
                result = (x / y) * 100;
                explanation = `${x} هو ${formatNumber(result)}% من ${y}`;
                break;

            case "increase":
                result = x + (x * (y / 100));
                explanation = `زيادة ${x} بنسبة ${y}% = ${formatNumber(result)}`;
                break;

            case "decrease":
                result = x - (x * (y / 100));
                explanation = `انخفاض ${x} بنسبة ${y}% = ${formatNumber(result)}`;
                break;
        }


        const resultDiv =
            document.getElementById(
                "percentageResult"
            );


        resultDiv.style.display = "block";

        resultDiv.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="result-value">
                ${formatNumber(result)}
            </div>

            <p style="margin-top:10px;">
                ${explanation}
            </p>
        `;

        // Apply translations
        applyLanguage();
    }


    // ========================================================
    // 7. DISCOUNT CALCULATOR
    // ========================================================

    function showDiscountCalculator() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>🏷️ <span data-i18n="discountTitle">حاسبة الخصم</span></h2>
                    <p>
                        <span data-i18n="discountDescription">اعرف السعر النهائي وقيمة الخصم.</span>
                    </p>
                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="discountOriginal">السعر الأصلي</span>
                        </label>

                        <input
                            type="number"
                            id="discountOriginal"
                            class="form-control"
                            placeholder="مثال: 100"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="discountPercent">نسبة الخصم (%)</span>
                        </label>

                        <input
                            type="number"
                            id="discountPercent"
                            class="form-control"
                            placeholder="مثال: 20"
                        >

                    </div>

                </div>


                <div class="button-row"
                     style="margin-top:15px;">

                    <button
                        class="btn btn-primary"
                        id="discountCalculate"
                    >
                        🏷️ <span data-i18n="calculateNow">احسب</span>
                    </button>

                </div>


                <div
                    id="discountResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("discountCalculate")
            .addEventListener(
                "click",
                calculateDiscount
            );
    }


    function calculateDiscount() {

        const original =
            parseFloat(
                document.getElementById(
                    "discountOriginal"
                ).value
            ) || 0;

        const percent =
            parseFloat(
                document.getElementById(
                    "discountPercent"
                ).value
            ) || 0;


        if (original <= 0) {

            showToast(
                "أدخل السعر الأصلي.",
                "error"
            );

            return;
        }


        const discountValue =
            original * (percent / 100);

        const finalPrice =
            original - discountValue;


        const result =
            document.getElementById(
                "discountResult"
            );


        result.style.display = "block";

        result.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="stats-grid">

                <div class="stat-card">
                    <small><span data-i18n="discountOriginal">السعر الأصلي</span></small>
                    <strong>${formatNumber(original)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="discountValue">قيمة الخصم</span></small>
                    <strong>${formatNumber(discountValue)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="discountFinal">السعر النهائي</span></small>
                    <strong>${formatNumber(finalPrice)}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="discountPercent">نسبة الخصم</span></small>
                    <strong>${percent}%</strong>
                </div>

            </div>
        `;

        // Apply translations
        applyLanguage();
    }


    // ========================================================
    // 8. WORD COUNTER
    // ========================================================

    function showWordCounter() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>🔢 <span data-i18n="counterTitle">عداد الكلمات والحروف</span></h2>
                    <p>
                        <span data-i18n="counterDescription">احسب الكلمات والحروف والجمل ووقت القراءة.</span>
                    </p>
                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="summaryOriginal">النص</span>
                    </label>

                    <textarea
                        id="wordCounterInput"
                        class="form-control"
                        style="min-height:250px;"
                        placeholder="اكتب أو الصق النص هنا..."
                    ></textarea>

                </div>


                <div
                    id="wordCounterResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        const input =
            document.getElementById(
                "wordCounterInput"
            );


        input.addEventListener(
            "input",
            countWords
        );
    }


    function countWords() {

        const text =
            document.getElementById(
                "wordCounterInput"
            ).value;


        const words =
            text.trim()
                ? text.trim().split(/\s+/).length
                : 0;


        const characters =
            text.length;


        const charactersNoSpaces =
            text.replace(/\s/g, "").length;


        const sentences =
            text.split(/[.!?؟;؛.]+/).filter(Boolean).length;


        const paragraphs =
            text.split(/\n\n+/).filter(Boolean).length;


        const readingTime =
            Math.ceil(words / 200);


        const result =
            document.getElementById(
                "wordCounterResult"
            );


        result.style.display = "block";

        result.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="stats-grid">

                <div class="stat-card">
                    <small><span data-i18n="counterWords">الكلمات</span></small>
                    <strong>${words}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="counterCharacters">الحروف</span></small>
                    <strong>${characters}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="counterCharactersNoSpaces">حروف بدون مسافات</span></small>
                    <strong>${charactersNoSpaces}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="counterSentences">الجمل</span></small>
                    <strong>${sentences}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="counterParagraphs">الفقرات</span></small>
                    <strong>${paragraphs}</strong>
                </div>

                <div class="stat-card">
                    <small><span data-i18n="counterReadingTime">وقت القراءة</span></small>
                    <strong>${readingTime} دقيقة</strong>
                </div>

            </div>
        `;

        // Apply translations
        applyLanguage();
    }


    // ========================================================
    // 9. JSON FORMATTER
    // ========================================================

    function showJSONFormatter() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>{ } <span data-i18n="jsonTitle">منسق JSON</span></h2>
                    <p>
                        <span data-i18n="jsonDescription">تنسيق وفحص JSON واكتشاف الأخطاء.</span>
                    </p>
                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="jsonInput">أدخل JSON</span>
                    </label>

                    <textarea
                        id="jsonInput"
                        class="form-control"
                        style="min-height:200px; font-family: monospace;"
                        placeholder='{"name": "example", "value": 123}'
                    ></textarea>

                </div>


                <div class="button-row">

                    <button
                        class="btn btn-primary"
                        id="jsonFormat"
                    >
                        📝 <span data-i18n="jsonFormat">تنسيق</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="jsonMinify"
                    >
                        📦 <span data-i18n="jsonMinify">ضغط</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="jsonCopy"
                    >
                        📋 <span data-i18n="jsonCopy">نسخ</span>
                    </button>

                </div>


                <div class="form-group"
                     style="margin-top:20px;">

                    <label>
                        <span data-i18n="jsonOutput">النتيجة</span>
                    </label>

                    <textarea
                        id="jsonOutput"
                        class="form-control"
                        style="min-height:200px; font-family: monospace;"
                        readonly
                    ></textarea>

                </div>


                <div
                    id="jsonError"
                    class="result-box"
                    style="display:none; background: #fef2f2; border-color: #ef4444;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("jsonFormat")
            .addEventListener(
                "click",
                formatJSON
            );


        document
            .getElementById("jsonMinify")
            .addEventListener(
                "click",
                minifyJSON
            );


        document
            .getElementById("jsonCopy")
            .addEventListener(
                "click",
                copyJSON
            );
    }


    function formatJSON() {

        const input =
            document.getElementById(
                "jsonInput"
            ).value;

        const output =
            document.getElementById(
                "jsonOutput"
            );

        const errorDiv =
            document.getElementById(
                "jsonError"
            );


        try {

            const parsed = JSON.parse(input);

            output.value =
                JSON.stringify(
                    parsed,
                    null,
                    4
                );

            errorDiv.style.display = "none";

            showToast(
                "تم تنسيق JSON بنجاح.",
                "success"
            );
        } catch (error) {

            output.value = "";

            errorDiv.style.display = "block";

            errorDiv.innerHTML = `

                <h3 style="color: #ef4444; margin-bottom: 8px;">
                    خطأ في JSON
                </h3>

                <p style="color: #dc2626; font-size: 13px;">
                    ${escapeHTML(error.message)}
                </p>
            `;
        }
    }


    function minifyJSON() {

        const input =
            document.getElementById(
                "jsonInput"
            ).value;

        const output =
            document.getElementById(
                "jsonOutput"
            );

        const errorDiv =
            document.getElementById(
                "jsonError"
            );


        try {

            const parsed = JSON.parse(input);

            output.value =
                JSON.stringify(parsed);

            errorDiv.style.display = "none";

            showToast(
                "تم ضغط JSON بنجاح.",
                "success"
            );
        } catch (error) {

            output.value = "";

            errorDiv.style.display = "block";

            errorDiv.innerHTML = `

                <h3 style="color: #ef4444; margin-bottom: 8px;">
                    خطأ في JSON
                </h3>

                <p style="color: #dc2626; font-size: 13px;">
                    ${escapeHTML(error.message)}
                </p>
            `;
        }
    }


    function copyJSON() {

        const output =
            document.getElementById(
                "jsonOutput"
            );


        if (!output.value) {

            showToast(
                "لا يوجد JSON للنسخ.",
                "error"
            );

            return;
        }


        navigator.clipboard.writeText(
            output.value
        ).then(() => {

            showToast(
                "تم نسخ JSON.",
                "success"
            );
        }).catch(() => {

            showToast(
                "فشل النسخ.",
                "error"
            );
        });
    }


    // ========================================================
    // 10. COLOR PICKER
    // ========================================================

    function showColorPicker() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>🎨 <span data-i18n="colorTitle">منتقي الألوان</span></h2>
                    <p>
                        <span data-i18n="colorDescription">استخراج HEX وRGB وHSL للألوان.</span>
                    </p>
                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="colorSelect">اختر اللون</span>
                    </label>

                    <input
                        type="color"
                        id="colorPicker"
                        class="form-control"
                        style="height: 60px; cursor: pointer;"
                        value="#2563eb"
                    >

                </div>


                <div
                    id="colorResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        const picker =
            document.getElementById(
                "colorPicker"
            );


        picker.addEventListener(
            "input",
            updateColorResult
        );

        updateColorResult();
    }


    function updateColorResult() {

        const hex =
            document.getElementById(
                "colorPicker"
            ).value;


        const rgb = hexToRGB(hex);
        const hsl = rgbToHSL(rgb.r, rgb.g, rgb.b);


        const result =
            document.getElementById(
                "colorResult"
            );


        result.style.display = "block";

        result.innerHTML = `

            <h3><span data-i18n="ageResult">النتيجة</span></h3>

            <div class="stats-grid">

                <div class="stat-card">
                    <small>HEX</small>
                    <strong>${hex}</strong>
                </div>

                <div class="stat-card">
                    <small>RGB</small>
                    <strong>${rgb.r}, ${rgb.g}, ${rgb.b}</strong>
                </div>

                <div class="stat-card">
                    <small>HSL</small>
                    <strong>${hsl.h}°, ${hsl.s}%, ${hsl.l}%</strong>
                </div>

                <div class="stat-card">
                    <small style="display:block; margin-bottom:8px;">المعاينة</small>
                    <div
                        style="width: 100%; height: 40px; background: ${hex}; border-radius: 6px; border: 1px solid var(--border);"
                    ></div>
                </div>

            </div>
        `;

        // Apply translations
        applyLanguage();
    }


    function hexToRGB(hex) {

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            }
            : null;
    }


    function rgbToHSL(r, g, b) {

        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;


        if (max === min) {

            h = s = 0;
        } else {

            const d = max - min;

            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {

                case r:
                    h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                    break;

                case g:
                    h = ((b - r) / d + 2) / 6;
                    break;

                case b:
                    h = ((r - g) / d + 4) / 6;
                    break;
            }

            h *= 360;
        }


        return {
            h: Math.round(h),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }


    // ========================================================
    // 11. IMAGE TOOLS
    // ========================================================

    function showImageTools() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>🖼️ <span data-i18n="imageTitle">أدوات الصور</span></h2>
                    <p>
                        <span data-i18n="imageDescription">ضغط الصور وتغيير الحجم وتحويل الصيغ.</span>
                    </p>
                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="fileSelectImages">اختر الصورة</span>
                    </label>

                    <input
                        type="file"
                        id="imageToolsInput"
                        class="form-control"
                        accept="image/*"
                    >

                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="fileConvertResize">تغيير الحجم</span>
                        </label>

                        <select class="form-control" id="imageResize">
                            <option value="none">بدون تغيير</option>
                            <option value="50">50%</option>
                            <option value="25">25%</option>
                            <option value="800">عرض 800px</option>
                            <option value="1200">عرض 1200px</option>
                        </select>

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="imageQuality">الجودة</span>
                        </label>

                        <select class="form-control" id="imageQuality">
                            <option value="0.9">عالية (90%)</option>
                            <option value="0.7">متوسطة (70%)</option>
                            <option value="0.5">منخفضة (50%)</option>
                        </select>

                    </div>

                </div>


                <div class="button-row">

                    <button
                        class="btn btn-primary"
                        id="imageProcess"
                    >
                        🔄 <span data-i18n="fileConvertImage">معالجة الصورة</span>
                    </button>

                </div>


                <div
                    id="imageToolsResult"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("imageProcess")
            .addEventListener(
                "click",
                processImage
            );
    }


    function processImage() {

        const input =
            document.getElementById(
                "imageToolsInput"
            );

        const resize =
            document.getElementById(
                "imageResize"
            ).value;

        const quality =
            parseFloat(
                document.getElementById(
                    "imageQuality"
                ).value
            );


        if (!input.files.length) {

            showToast(
                "اختر صورة.",
                "error"
            );

            return;
        }


        const file = input.files[0];

        const image = new Image();

        image.onload = () => {

            const canvas =
                document.createElement("canvas");

            let width = image.width;
            let height = image.height;


            if (resize !== "none") {

                if (resize === "50" || resize === "25") {

                    const ratio =
                        parseInt(resize) / 100;

                    width = Math.round(width * ratio);
                    height = Math.round(height * ratio);

                } else {

                    const maxWidth =
                        parseInt(resize);

                    if (width > maxWidth) {

                        const ratio =
                            maxWidth / width;

                        width = maxWidth;
                        height = Math.round(height * ratio);
                    }
                }
            }


            canvas.width = width;
            canvas.height = height;

            const context =
                canvas.getContext("2d");

            context.drawImage(
                image,
                0,
                0,
                width,
                height
            );


            canvas.toBlob(
                blob => {

                    if (!blob) return;

                    const result =
                        document.getElementById(
                            "imageToolsResult"
                        );


                    result.style.display = "block";

                    result.innerHTML = `

                        <h3><span data-i18n="ageResult">النتيجة</span></h3>

                        <div class="stats-grid">

                            <div class="stat-card">
                                <small>الحجم الأصلي</small>
                                <strong>${formatBytes(file.size)}</strong>
                            </div>

                            <div class="stat-card">
                                <small>الحجم الجديد</small>
                                <strong>${formatBytes(blob.size)}</strong>
                            </div>

                            <div class="stat-card">
                                <small>الأبعاد</small>
                                <strong>${width} × ${height}</strong>
                            </div>

                            <div class="stat-card">
                                <small>التوفير</small>
                                <strong>${((1 - blob.size / file.size) * 100).toFixed(1)}%</strong>
                            </div>

                        </div>

                        <div class="button-row"
                             style="margin-top:20px;">

                            <button
                                class="btn btn-primary"
                                id="downloadImage"
                            >
                                📥 <span data-i18n="fileDownloadTxt">تنزيل</span>
                            </button>

                        </div>
                    `;

                    // Apply translations
                    applyLanguage();


                    document
                        .getElementById("downloadImage")
                        .addEventListener(
                            "click",
                            () => {

                                downloadBlob(
                                    blob,
                                    "injaz-processed-image.png"
                                );

                                showToast(
                                    "تم تنزيل الصورة.",
                                    "success"
                                );
                            }
                        );
                },
                "image/jpeg",
                quality
            );
        };


        image.src =
            URL.createObjectURL(file);
    }


    function formatBytes(bytes) {

        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];

        const i =
            Math.floor(
                Math.log(bytes) / Math.log(k)
            );

        return parseFloat(
            (bytes / Math.pow(k, i)).toFixed(2)
        ) + " " + sizes[i];
    }


    // ========================================================
    // 12. COVER LETTER
    // ========================================================

    function showCoverLetter() {

        const currentLang = currentLanguage;

        openModal(`

            <div class="tool-interface">

                <div class="tool-interface-header">
                    <h2>✉️ <span data-i18n="coverTitle">خطاب التقديم</span></h2>
                    <p>
                        <span data-i18n="coverDescription">أنشئ خطاب تقديم احترافي للوظائف.</span>
                    </p>
                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="cvFullName">الاسم الكامل</span>
                        </label>

                        <input
                            class="form-control"
                            id="coverName"
                            placeholder="اسمك الكامل"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="cvJobTitle">المسمى الوظيفي</span>
                        </label>

                        <input
                            class="form-control"
                            id="coverJob"
                            placeholder="المسمى الوظيفي المطلوب"
                        >

                    </div>

                </div>


                <div class="form-grid">

                    <div class="form-group">

                        <label>
                            <span data-i18n="cvEmail">البريد الإلكتروني</span>
                        </label>

                        <input
                            class="form-control"
                            id="coverEmail"
                            placeholder="example@email.com"
                        >

                    </div>


                    <div class="form-group">

                        <label>
                            <span data-i18n="cvPhone">رقم الهاتف</span>
                        </label>

                        <input
                            class="form-control"
                            id="coverPhone"
                            placeholder="+967..."
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="coverCompany">اسم الشركة</span>
                    </label>

                    <input
                        class="form-control"
                        id="coverCompany"
                        placeholder="اسم الشركة"
                    >

                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="coverExperience">الخبرة والإنجازات</span>
                    </label>

                    <textarea
                        class="form-control"
                        id="coverExperience"
                        placeholder="اكتب عن خبرتك المهنية والإنجازات..."
                    ></textarea>

                </div>


                <div class="form-group">

                    <label>
                        <span data-i18n="coverSkills">المهارات</span>
                    </label>

                    <textarea
                        class="form-control"
                        id="coverSkills"
                        placeholder="المهارات التي تناسب الوظيفة..."
                    ></textarea>

                </div>


                <div class="button-row">

                    <button
                        class="btn btn-primary"
                        id="coverGenerate"
                    >
                        ✉️ <span data-i18n="cvCreate">إنشاء الخطاب</span>
                    </button>

                    <button
                        class="btn btn-secondary"
                        id="coverDownload"
                    >
                        📥 <span data-i18n="cvDownload">تنزيل</span>
                    </button>

                </div>


                <div
                    id="coverPreview"
                    class="result-box"
                    style="display:none;"
                ></div>

            </div>
        `);

        // Apply translations
        applyLanguage();


        document
            .getElementById("coverGenerate")
            .addEventListener(
                "click",
                generateCoverLetter
            );


        document
            .getElementById("coverDownload")
            .addEventListener(
                "click",
                downloadCoverLetter
            );
    }


    function generateCoverLetter() {

        const name =
            document.getElementById(
                "coverName"
            ).value || "[الاسم]";

        const job =
            document.getElementById(
                "coverJob"
            ).value || "[المسمى الوظيفي]";

        const email =
            document.getElementById(
                "coverEmail"
            ).value || "[البريد الإلكتروني]";

        const phone =
            document.getElementById(
                "coverPhone"
            ).value || "[رقم الهاتف]";

        const company =
            document.getElementById(
                "coverCompany"
            ).value || "[الشركة]";

        const experience =
            document.getElementById(
                "coverExperience"
            ).value || "[الخبرة]";

        const skills =
            document.getElementById(
                "coverSkills"
            ).value || "[المهارات]";


        const coverLetter = `
إلى فئة التوظيف في ${company}

الموضوع: طلب وظيفة ${job}

السادة مديري التوظيف،

أكتب إليكم هذا الخطاب للتعبير عن اهتمامي الكبير بمنصب ${job} في ${company}. بناءً على خبرتي المهنية ومهاراتي، أعتقد أنني مرشح مناسب لهذا المنصب.

${experience}

المهارات التي أمتلكها والتي تناسب متطلبات هذا المنصب تشمل:
${skills}

أنا متحمس جداً لفرصة الانضمام إلى فريق ${company} والمساهمة في نجاح المؤسسة. يمكنكم التواصل معي عبر البريد الإلكتروني ${email} أو على رقم الهاتف ${email} لإجراء مقابلة شخصية.

شكراً لاهتمامكم ووقتكم.

مع خالص التقدير،

${name}
${email}
${phone}
        `.trim();


        const preview =
            document.getElementById(
                "coverPreview"
            );


        preview.style.display = "block";

        preview.innerHTML = `

            <h3><span data-i18n="cvTitle">معاينة الخطاب</span></h3>

            <div style="background: white; padding: 20px; border-radius: 8px; white-space: pre-line; line-height: 1.8;">
                ${escapeHTML(coverLetter)}
            </div>
        `;

        // Apply translations
        applyLanguage();
    }


    function downloadCoverLetter() {

        const preview =
            document.getElementById(
                "coverPreview"
            );


        if (!preview || preview.style.display === "none") {

            showToast(
                "أنشئ الخطاب أولاً.",
                "error"
            );

            return;
        }


        const text = preview.querySelector("div").textContent;
        const currentLanguage = localStorage.getItem("injazLanguage") || "ar";
        const filename = currentLanguage === "ar" ? "خطاب-تقديم.txt" : "cover-letter.txt";


        downloadBlob(
            text,
            filename,
            "text/plain;charset=utf-8"
        );

        showToast(
            "تم تنزيل الخطاب.",
            "success"
        );
    }


    // ========================================================
    // 13. REVIEWS SYSTEM
    // ========================================================

    // Initialize reviews system
    function initReviewsSystem() {

        const reviewForm = document.getElementById("reviewForm");

        if (reviewForm) {

            reviewForm.addEventListener("submit", submitReview);
        }

        loadReviews();
    }


    // Submit a new review
    function submitReview(event) {

        event.preventDefault();

        const name =
            document.getElementById("reviewName").value.trim();

        const comment =
            document.getElementById("reviewComment").value.trim();

        const ratingInput =
            document.querySelector('input[name="rating"]:checked');

        if (!ratingInput) {

            showToast(
                "اختر تقييم بالنجوم.",
                "error"
            );

            return;
        }

        const rating = parseInt(ratingInput.value);


        if (!name || !comment) {

            showToast(
                "أكمل جميع الحقول.",
                "error"
            );

            return;
        }


        const review = {
            id: Date.now(),
            name: escapeHTML(name),
            comment: escapeHTML(comment),
            rating: rating,
            date: new Date().toISOString()
        };


        try {

            const reviews = getReviews();

            reviews.unshift(review); // Add to beginning

            localStorage.setItem(
                "injazReviews",
                JSON.stringify(reviews)
            );

            // Clear form
            document.getElementById("reviewForm").reset();

            // Reload reviews
            loadReviews();

            showToast(
                translations[currentLanguage].reviewSuccess,
                "success"
            );
        } catch (error) {

            console.error("Error saving review:", error);

            showToast(
                translations[currentLanguage].reviewError,
                "error"
            );
        }
    }


    // Get all reviews from localStorage
    function getReviews() {

        try {

            const saved =
                localStorage.getItem("injazReviews");

            if (!saved) return [];

            const reviews = JSON.parse(saved);

            // Validate data structure
            if (!Array.isArray(reviews)) return [];

            return reviews.filter(review =>
                review &&
                review.name &&
                review.comment &&
                review.rating
            );
        } catch (error) {

            console.error("Error loading reviews:", error);

            return [];
        }
    }


    // Load and display reviews
    function loadReviews() {

        const reviewsList =
            document.getElementById("reviewsList");

        const noReviews =
            document.getElementById("noReviews");


        if (!reviewsList) return;


        const reviews = getReviews();


        if (reviews.length === 0) {

            reviewsList.innerHTML = "";

            if (noReviews) {
                noReviews.style.display = "block";
            }

            return;
        }


        if (noReviews) {
            noReviews.style.display = "none";
        }


        // Display only last 10 reviews
        const recentReviews = reviews.slice(0, 10);


        reviewsList.innerHTML = recentReviews.map(review => {

            const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

            const date = new Date(review.date);
            const formattedDate = formatDate(date);


            return `
                <div class="review-item">

                    <div class="review-header">

                        <span class="review-author">
                            ${review.name}
                        </span>

                        <span class="review-stars">
                            ${stars}
                        </span>

                    </div>

                    <div class="review-date">
                        ${formattedDate}
                    </div>

                    <div class="review-text">
                        ${review.comment}
                    </div>

                </div>
            `;
        }).join("");
    }


    // Format date for display
    function formatDate(date) {

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        return date.toLocaleDateString(
            currentLanguage === "ar" ? "ar-SA" : "en-US",
            options
        );
    }


    // Initialize reviews system on page load
    initReviewsSystem();

});