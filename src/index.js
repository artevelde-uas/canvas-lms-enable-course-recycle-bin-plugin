import translations from './i18n.json';


export default function ({ addRouteListener, getRouteUrl, addReadyListener, i18n, i18n: { translate: __ } }) {
    i18n.setTranslations(translations);

    addRouteListener('courses.settings', function (params) {
        let url = getRouteUrl('courses.settings.undelete', {
            courseId: params.courseId
        });

        addReadyListener('#right-side > div:first-child > a:last-of-type', function (el) {
            el.insertAdjacentHTML('afterend', `
                <a class="Button Button--link Button--link--has-divider Button--course-settings" href="${url}">
                    <i class="icon-trash"></i>${__('recycle_bin')}
                </a>
            `);
        });
    });
}
