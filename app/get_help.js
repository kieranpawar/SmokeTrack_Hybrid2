/*
 * JS for get_help generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'da764cdb-3229-46d7-9f98-087c70a41728';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Facebook_Login",
    "location": "Facebook_Login.html"
}, {
    "name": "get_help",
    "location": "get_help.html"
}, {
    "name": "Facebook_Me",
    "location": "Facebook_Me.html"
}, {
    "name": "track",
    "location": "track.html"
}, {
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "forgotpassword",
    "location": "forgotpassword.html"
}, {
    "name": "details",
    "location": "details.html"
}, {
    "name": "profile",
    "location": "profile.html"
}, {
    "name": "calculate",
    "location": "calculate.html"
}];

function get_help_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'helpicon': 'get_help_helpicon',
        'mobilelabel_7': 'get_help_mobilelabel_7',
        'mobilelabel_8': 'get_help_mobilelabel_8',
        'spacer_11': 'get_help_spacer_11',
        'mobilelabel_13': 'get_help_mobilelabel_13',
        'spacer_18': 'get_help_spacer_18',
        'mobilelabel_17': 'get_help_mobilelabel_17',
        'mobilebutton_16': 'get_help_mobilebutton_16',
        'start_location': 'get_help_start_location',
        'end_location': 'get_help_end_location',
        'mobilebutton_21': 'get_help_mobilebutton_21',
        'googlemap_14': 'get_help_googlemap_14',
        'marker_15': 'get_help_marker_15',
        'navbar1': 'get_help_navbar1',
        'mobilenavbaritem_3': 'get_help_mobilenavbaritem_3',
        'mobilenavbaritem_4': 'get_help_mobilenavbaritem_4',
        'mobilenavbaritem_5': 'get_help_mobilenavbaritem_5',
        'mobilenavbaritem_6': 'get_help_mobilenavbaritem_6'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["get_help_geolocation2_onsuccess_mapping_0"] = {
        "homeScreen": "get_help",
        "directions": [

        {
            "from_name": "geolocation2",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "get_help",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['googlemap_14:latitude']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['googlemap_14:longitude']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["get_help_geolocation2_onbeforesend_mapping_0"] = {
        "homeScreen": "get_help",
        "directions": [

        {

            "to_name": "geolocation2",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["get_help_get_location_onsuccess_mapping_0"] = {
        "homeScreen": "get_help",
        "directions": [

        {
            "from_name": "get_location",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "get_help",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['start_location:text']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['start_location:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["get_help_get_location_onbeforesend_mapping_0"] = {
        "homeScreen": "get_help",
        "directions": [

        {

            "to_name": "get_location",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.geolocation2 = Apperyio.datasources.geolocation2 = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["get_help_geolocation2_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["get_help_geolocation2_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.get_location = Apperyio.datasources.get_location = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["get_help_get_location_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["get_help_get_location_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'get_help';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var get_help_onLoad = function() {
            get_help_elementsExtraJS();

            try {
                geolocation2.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            Apperyio('helpicon').css('margin', 'auto');
            Apperyio('helpicon').css('display', 'block');

            get_help_deviceEvents();
            get_help_windowEvents();
            get_help_elementsEvents();
        };

    // screen window events


    function get_help_windowEvents() {

        $('#get_help').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#get_help').on({
            swipeleft: function(event) {
                Apperyio.navigateTo('profile', {
                    transition: 'pop',
                    reverse: false
                });
            },
            swiperight: function(event) {
                Apperyio.navigateTo('track', {
                    transition: 'pop',
                    reverse: false
                });
            },
        });

    };

    // device events


    function get_help_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function get_help_elementsExtraJS() {
        // screen (get_help) extra code

        /* googlemap_14 */

        $("[name = 'googlemap_14']").wrap("<div/>");
        $("[name = 'googlemap_14']").parent().css("margin-left", $("[name = 'googlemap_14']").css("margin-left"));
        $("[name = 'googlemap_14']").parent().css("margin-right", $("[name = 'googlemap_14']").css("margin-right"));
        $("[name = 'googlemap_14']").css("margin-left", '0');
        $("[name = 'googlemap_14']").css("margin-right", '0');

        var googlemap_14_options = {
            markerSourceName: "googlemap_14_markers",
            latitude: "",
            longitude: "",
            address: "",
            zoom: 15,
            showLocationMarker: true
        }

        Apperyio.__registerComponent('googlemap_14', new Apperyio.ApperyMapComponent("googlemap_14", googlemap_14_options));
        $("[name='googlemap_14_markers'] [apperytype='marker']").attr("reRender", "googlemap_14");
        $(":mobile-pagecontainer").off("pagecontainershow.get_help_mobilecontainer").on("pagecontainershow.get_help_mobilecontainer", function(event, ui) {
            if (($('#get_help_googlemap_14', ui.toPage).length > 0) && (Apperyio('googlemap_14') != undefined)) {
                Apperyio('googlemap_14').refresh();
            }
        });

    };

    // screen elements handler


    function get_help_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#get_help_mobilecontainer [name="mobilebutton_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        get_location.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#get_help_mobilecontainer [name="mobilebutton_16"]');

        $(document).off("click", '#get_help_mobilefooter [name="mobilenavbaritem_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('calculate', {
                        reverse: false
                    });

                }
            },
        }, '#get_help_mobilefooter [name="mobilenavbaritem_3"]');
        $(document).off("click", '#get_help_mobilefooter [name="mobilenavbaritem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('track', {
                        reverse: false
                    });

                }
            },
        }, '#get_help_mobilefooter [name="mobilenavbaritem_4"]');

        $(document).off("click", '#get_help_mobilefooter [name="mobilenavbaritem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('profile', {
                        reverse: false
                    });

                }
            },
        }, '#get_help_mobilefooter [name="mobilenavbaritem_6"]');

    };

    $(document).off("pagebeforeshow", "#get_help").on("pagebeforeshow", "#get_help", function(event, ui) {
        Apperyio.CurrentScreen = "get_help";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    get_help_onLoad();
};

$(document).off("pagecreate", "#get_help").on("pagecreate", "#get_help", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    get_help_js();
});