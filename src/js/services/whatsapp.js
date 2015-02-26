'use strict';

module.exports = function (shariff) {
    var url = encodeURIComponent(shariff.getURL());

    var shareUrlFn = function (_url) {
        return 'whatsapp://send?text=' + shariff.getShareText() + '%20';
    };

    return {
        popup: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir'
        },
        name: 'whatsapp',
        faName: 'fa-whatsapp',
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp',
            'es': 'Compartir en Whatsapp'
        },
        shareUrl: shareUrlFn() + url + shariff.getReferrerTrack(),
        setShareUrl: function (_url) {
            if (_url) {
                this.shareUrl = shareUrlFn() + _url + shariff.getReferrerTrack();
            }
        }
    };
};
