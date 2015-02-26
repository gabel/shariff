'use strict';

module.exports = function (shariff) {
    var url = encodeURIComponent(shariff.getURL());
    var plattformUrl = 'https://plus.google.com/share?url=';
    return {
        popup: true,
        shareText: '+1',
        name: 'googleplus',
        faName: 'fa-google-plus',
        title: {
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+',
            'es': 'Compartir en Google+'
        },
        shareUrl: plattformUrl + url + shariff.getReferrerTrack(),
        setShareUrl: function (_url) {
            if (_url) {
                this.shareUrl = plattformUrl + _url + shariff.getReferrerTrack();
            }
        }
    };
};

