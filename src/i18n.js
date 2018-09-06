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
        }
    }
});
