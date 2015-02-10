jQuery(document).ready(function ($) {
    var lostPasswordForm, ResetPasswordForm;
    var httpProtocol, httpsProtocol;
    var httpPattern, httpsPattern;

    httpProtocol = 'http:';
    httpsProtocol = 'https:';

    httpPattern = /^http:/;
    httpsPattern = /^https:/;

    lostPasswordForm = $('#lostpasswordform');
    ResetPasswordForm = $('#resetpassform');

    //if for any reason functional will not work
    //lostPasswordForm.prop('action', '/wp-login.php?action=lostpassword');
    //ResetPasswordForm.prop('action', '/wp-login.php?action=resetpass');


    /**
     * current site protocol
     * @returns {boolean}
     */
    function isHTTP() {
        return location.protocol == httpProtocol;
    }

    /**
     * change the protocol on given absolute URL
     * to current site protocol
     * @param {string} absoluteUrl
     * @returns {string}
     */
    function replaceHTTP(absoluteUrl) {
        if(isHTTP()){
            return absoluteUrl.replace(httpsPattern, httpProtocol);
        }
        else {
            return absoluteUrl.replace(httpPattern, httpsProtocol);
        }

        //return absoluteUrl;
    }

    /**
     * change action URL of form
     * Jquery Form element
     * @param {Object} JQFormObject
     */
    function replaceProtocolUlrInFormAction(JQFormObject) {
        var takeActionUrl;
        if(JQFormObject.length) {
            takeActionUrl = JQFormObject.prop('action');
            takeActionUrl = replaceHTTP(takeActionUrl);
            JQFormObject.prop('action', takeActionUrl);
        }
    }

    replaceProtocolUlrInFormAction(lostPasswordForm);
    replaceProtocolUlrInFormAction(ResetPasswordForm);

    //custom search form #op-search-form
    var customSearchForm = $('#op-search-form');
    replaceProtocolUlrInFormAction(customSearchForm);

});