import { router, dom } from '@artevelde-uas/canvas-lms-app';
import __ from './i18n';


export default function () {
    router.onRoute('courses.settings', async params => {
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

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
