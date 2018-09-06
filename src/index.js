import i18next from 'i18next';

const i18n = i18next.createInstance().init({
    'lng': document.documentElement.lang,
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


export default class {
    
    init(app) {
        app.addRouteListener('course.settings', function (params) {
            let url = '/courses/' + params.id + '/undelete';
            
            app.addReadyListener('#right-side > div:first-child > a:last-of-type', function (el) {
                el.insertAdjacentHTML('afterend', `
                    <a class="Button Button--link Button--link--has-divider Button--course-settings" href="${url}">
                        <i class="icon-trash"></i>${i18n.t('recycle_bin')}
                    </a>
                `);
            });
        });
    }
    
}
