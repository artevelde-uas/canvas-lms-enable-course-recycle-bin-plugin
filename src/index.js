import translations from './i18n.json';


export default function ({ router, dom, i18n, i18n: { translate: __ } }) {
    router.onRoute('courses.settings', async params => {
        i18n.setTranslations(translations);

        let url = router.getUrl('courses.settings.undelete', {
            courseId: params.courseId
        });

        let el = await dom.onElementReady('#right-side > div:first-child > a:last-of-type');

        el.insertAdjacentHTML('afterend', `
            <a class="Button Button--link Button--link--has-divider Button--course-settings" href="${url}">
                <i class="icon-trash"></i>${__('recycle_bin')}
            </a>
        `);
    });
}
