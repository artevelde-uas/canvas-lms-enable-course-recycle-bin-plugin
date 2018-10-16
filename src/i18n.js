import i18next from 'i18next';


export default i18next.createInstance().init({
    lng: document.documentElement.lang,
    fallbackLng: 'en',
    resources: {
        "en": {
            "translation": {
                "recycle_bin": "Course Recycle Bin"
            }
        },
        "nl": {
            "translation": {
                "recycle_bin": "Cursusprullenbak"
            }
        },
        "fr": {
            "translation": {
                "recycle_bin": "Corbeille du cours"
            }
        },
        "de": {
            "translation": {
                "recycle_bin": "Kurs Papierkorb"
            }
        },
        "es": {
            "translation": {
                "recycle_bin": "Papelera de reciclaje del curso"
            }
        },
        "it": {
            "translation": {
                "recycle_bin": "Cestino di corso"
            }
        },
        "ch": {
            "translation": {
                "recycle_bin": "程回收"
            }
        },
        "jp": {
            "translation": {
                "recycle_bin": "コースごみ箱"
            }
        }
    }
});
