import translations from './i18n.json';


export default function ({ router, dom, i18n, i18n: { translate: __ } }) {
    i18n.setTranslations(translations);

    router.onRoute('courses.settings', function (params) {
        let url = router.getUrl('courses.settings.undelete', {
            courseId: params.courseId
        });

        dom.onElementAdded('#right-side > div:first-child > a:last-of-type', function (el) {
            el.insertAdjacentHTML('afterend', `
                <a class="Button Button--link Button--link--has-divider Button--course-settings" href="${url}">
                    <i class="icon-trash"></i>${__('recycle_bin')}
                </a>
            `);
        }, { once: true });
    });
}
