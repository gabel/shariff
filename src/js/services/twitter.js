'use strict';

var url = require('url');

module.exports = function (shariff) {
    var shareUrlFn = function (_url) {
        var shareUrl = url.parse('https://twitter.com/intent/tweet', true);

        // TODO FIXME: remove "encodeURIComponent()" from getShareText()
        shareUrl.query.text = decodeURIComponent(shariff.getShareText());
        shareUrl.query.url = _url ? _url : shariff.getURL();
        if (shariff.options.twitterVia !== null) {
            shareUrl.query.via = shariff.options.twitterVia;
        }
        delete shareUrl.search;

        return shareUrl;
    };

    var twitter = {
        popup: true,
        //TODO: better called "label" instead of shareText, the share text is the content of the tweet message
        shareText: 'tweet',
        name: 'twitter',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'es': 'Compartir en Twitter'
        },
        // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
        shareUrl: url.format(shareUrlFn(null)) + shariff.getReferrerTrack(),
        setShareUrl: function (_url) {
            if (_url) {
                this.shareUrl = url.format(shareUrlFn(_url)) + shariff.getReferrerTrack();
            }
        }
    };

    return twitter;
};
