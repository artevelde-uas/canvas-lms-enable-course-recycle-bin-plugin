import i18n from './i18n';


export default function (app) {
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
