import translations from './i18n.json';


export default function (app) {
    const __ = app.i18n.translate;
    
    app.i18n.setTranslations(translations);
    
    app.addRouteListener('courses.settings', function (params) {
        let url = app.getRouteUrl('courses.settings.undelete', {
            courseId: params.courseId
        });
        
        app.addReadyListener('#right-side > div:first-child > a:last-of-type', function (el) {
            el.insertAdjacentHTML('afterend', `
                <a class="Button Button--link Button--link--has-divider Button--course-settings" href="${url}">
                    <i class="icon-trash"></i>${__('recycle_bin')}
                </a>
            `);
        });
    });
}
