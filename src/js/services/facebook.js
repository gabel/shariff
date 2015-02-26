'use strict';

module.exports = function (shariff) {
    var url = encodeURIComponent(shariff.getURL());
    var plattformUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir'
        },
        name: 'facebook',
        faName: 'fa-facebook',
        title: {
            'de': 'Bei Facebook teilen',
            'en': 'Share on Facebook',
            'es': 'Compartir en Facebook'
        },
        shareUrl: plattformUrl + url + shariff.getReferrerTrack(),
        setShareUrl: function (_url) {
            if (_url) {
                this.shareUrl = plattformUrl + _url + shariff.getReferrerTrack();
            }
        }
    };
};
