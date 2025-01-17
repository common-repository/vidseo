//console.log(meta);

new Vue({
    el: '.wp-admin.post-type-vidseo #post #poststuff',
    data: {
        host: (meta.vidseo_host) ? meta.vidseo_host : 'vidseo_youtube',
        url: (meta.vidseo_url) ? meta.vidseo_url : '',
        content: (meta.vidseo_content) ? meta.vidseo_content : '',
        width: (meta.vidseo_width) ? meta.vidseo_width : '560px',
        excerpt: (meta.excerpt_length) ? meta.excerpt_length : '60',
        title: (meta.hide_title) ? true : false,
        transcript: (meta.hide_transcript) ? true : false,
        languageId: (meta.vidseo_language) ? meta.vidseo_language : 'en',
        languages: [{"code":"ab","name":"Abkhaz"},{"code":"aa","name":"Afar"},{"code":"af","name":"Afrikaans"},{"code":"ak","name":"Akan"},{"code":"sq","name":"Albanian"},{"code":"am","name":"Amharic"},{"code":"ar","name":"Arabic"},{"code":"an","name":"Aragonese"},{"code":"hy","name":"Armenian"},{"code":"as","name":"Assamese"},{"code":"av","name":"Avaric"},{"code":"ae","name":"Avestan"},{"code":"ay","name":"Aymara"},{"code":"az","name":"Azerbaijani"},{"code":"bm","name":"Bambara"},{"code":"ba","name":"Bashkir"},{"code":"eu","name":"Basque"},{"code":"be","name":"Belarusian"},{"code":"bn","name":"Bengali; Bangla"},{"code":"bh","name":"Bihari"},{"code":"bi","name":"Bislama"},{"code":"bs","name":"Bosnian"},{"code":"br","name":"Breton"},{"code":"bg","name":"Bulgarian"},{"code":"my","name":"Burmese"},{"code":"ca","name":"Catalan; Valencian"},{"code":"ch","name":"Chamorro"},{"code":"ce","name":"Chechen"},{"code":"ny","name":"Chichewa; Chewa; Nyanja"},{"code":"zh","name":"Chinese"},{"code":"zh-Hans","name":"Chinese (Simplified)"},{"code":"zh-Hant","name":"Chinese (Traditional)"},{"code":"cv","name":"Chuvash"},{"code":"kw","name":"Cornish"},{"code":"co","name":"Corsican"},{"code":"cr","name":"Cree"},{"code":"hr","name":"Croatian"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"dv","name":"Divehi; Dhivehi; Maldivian;"},{"code":"nl","name":"Dutch"},{"code":"dz","name":"Dzongkha"},{"code":"en","name":"English"},{"code":"eo","name":"Esperanto"},{"code":"et","name":"Estonian"},{"code":"ee","name":"Ewe"},{"code":"fo","name":"Faroese"},{"code":"fj","name":"Fijian"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"ff","name":"Fula; Fulah; Pulaar; Pular"},{"code":"gl","name":"Galician"},{"code":"ka","name":"Georgian"},{"code":"de","name":"German"},{"code":"el","name":"Greek, Modern"},{"code":"gn","name":"GuaranÃ­"},{"code":"gu","name":"Gujarati"},{"code":"ht","name":"Haitian; Haitian Creole"},{"code":"ha","name":"Hausa"},{"code":"he","name":"Hebrew (modern)"},{"code":"hz","name":"Herero"},{"code":"hi","name":"Hindi"},{"code":"ho","name":"Hiri Motu"},{"code":"hu","name":"Hungarian"},{"code":"ia","name":"Interlingua"},{"code":"id","name":"Indonesian"},{"code":"ie","name":"Interlingue"},{"code":"ga","name":"Irish"},{"code":"ig","name":"Igbo"},{"code":"ik","name":"Inupiaq"},{"code":"io","name":"Ido"},{"code":"is","name":"Icelandic"},{"code":"it","name":"Italian"},{"code":"iu","name":"Inuktitut"},{"code":"ja","name":"Japanese"},{"code":"jv","name":"Javanese"},{"code":"kl","name":"Kalaallisut, Greenlandic"},{"code":"kn","name":"Kannada"},{"code":"kr","name":"Kanuri"},{"code":"ks","name":"Kashmiri"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Khmer"},{"code":"ki","name":"Kikuyu, Gikuyu"},{"code":"rw","name":"Kinyarwanda"},{"code":"ky","name":"Kyrgyz"},{"code":"kv","name":"Komi"},{"code":"kg","name":"Kongo"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish"},{"code":"kj","name":"Kwanyama, Kuanyama"},{"code":"la","name":"Latin"},{"code":"lb","name":"Luxembourgish, Letzeburgesch"},{"code":"lg","name":"Ganda"},{"code":"li","name":"Limburgish, Limburgan, Limburger"},{"code":"ln","name":"Lingala"},{"code":"lo","name":"Lao"},{"code":"lt","name":"Lithuanian"},{"code":"lu","name":"Luba-Katanga"},{"code":"lv","name":"Latvian"},{"code":"gv","name":"Manx"},{"code":"mk","name":"Macedonian"},{"code":"mg","name":"Malagasy"},{"code":"ms","name":"Malay"},{"code":"ml","name":"Malayalam"},{"code":"mt","name":"Maltese"},{"code":"mi","name":"MÄori"},{"code":"mr","name":"Marathi (MarÄá¹­hÄ«)"},{"code":"mh","name":"Marshallese"},{"code":"mn","name":"Mongolian"},{"code":"na","name":"Nauru"},{"code":"nv","name":"Navajo, Navaho"},{"code":"nb","name":"Norwegian BokmÃ¥l"},{"code":"nd","name":"North Ndebele"},{"code":"ne","name":"Nepali"},{"code":"ng","name":"Ndonga"},{"code":"nn","name":"Norwegian Nynorsk"},{"code":"no","name":"Norwegian"},{"code":"ii","name":"Nuosu"},{"code":"nr","name":"South Ndebele"},{"code":"oc","name":"Occitan"},{"code":"oj","name":"Ojibwe, Ojibwa"},{"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{"code":"om","name":"Oromo"},{"code":"or","name":"Oriya"},{"code":"os","name":"Ossetian, Ossetic"},{"code":"pa","name":"Panjabi, Punjabi"},{"code":"pi","name":"PÄli"},{"code":"fa","name":"Persian (Farsi)"},{"code":"pl","name":"Polish"},{"code":"ps","name":"Pashto, Pushto"},{"code":"pt","name":"Portuguese"},{"code":"qu","name":"Quechua"},{"code":"rm","name":"Romansh"},{"code":"rn","name":"Kirundi"},{"code":"ro","name":"Romanian, [])"},{"code":"ru","name":"Russian"},{"code":"sa","name":"Sanskrit (Saá¹ská¹›ta)"},{"code":"sc","name":"Sardinian"},{"code":"sd","name":"Sindhi"},{"code":"se","name":"Northern Sami"},{"code":"sm","name":"Samoan"},{"code":"sg","name":"Sango"},{"code":"sr","name":"Serbian"},{"code":"gd","name":"Scottish Gaelic; Gaelic"},{"code":"sn","name":"Shona"},{"code":"si","name":"Sinhala, Sinhalese"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovene"},{"code":"so","name":"Somali"},{"code":"st","name":"Southern Sotho"},{"code":"es","name":"Spanish; Castilian"},{"code":"su","name":"Sundanese"},{"code":"sw","name":"Swahili"},{"code":"ss","name":"Swati"},{"code":"sv","name":"Swedish"},{"code":"ta","name":"Tamil"},{"code":"te","name":"Telugu"},{"code":"tg","name":"Tajik"},{"code":"th","name":"Thai"},{"code":"ti","name":"Tigrinya"},{"code":"bo","name":"Tibetan Standard, Tibetan, Central"},{"code":"tk","name":"Turkmen"},{"code":"tl","name":"Tagalog"},{"code":"tn","name":"Tswana"},{"code":"to","name":"Tonga (Tonga Islands)"},{"code":"tr","name":"Turkish"},{"code":"ts","name":"Tsonga"},{"code":"tt","name":"Tatar"},{"code":"tw","name":"Twi"},{"code":"ty","name":"Tahitian"},{"code":"ug","name":"Uyghur, Uighur"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"uz","name":"Uzbek"},{"code":"ve","name":"Venda"},{"code":"vi","name":"Vietnamese"},{"code":"vo","name":"VolapÃ¼k"},{"code":"wa","name":"Walloon"},{"code":"cy","name":"Welsh"},{"code":"wo","name":"Wolof"},{"code":"fy","name":"Western Frisian"},{"code":"xh","name":"Xhosa"},{"code":"yi","name":"Yiddish"},{"code":"yo","name":"Yoruba"},{"code":"za","name":"Zhuang, Chuang"},{"code":"zu","name":"Zulu"}],
        manual: false,
        readonly: false,
        error: ''
    },
    methods: {
        getSubtitles() {
            this.readonly = true;

            let id = this.getUrlParam(this.url);

            this.loadYouTubeSubtitles((id), {
                callbackFn : (json) => {        
                    this.content = this.jsonToCsv(json, {
                        includeHeader : false,
                        ignoreKeys : [ 'dur' ],
                        delimiter : ', ',
                    })
                }
            });
        },
        // getSubtitlesForTinyMCE() {
        //     this.readonly = true;

        //     let id = this.getUrlParam(this.url);

        //     this.loadYouTubeSubtitles((id), {
        //         callbackFn : (json) => {
        //             console.log(this.jsonToHTML(json, {
        //             includeHeader : false,
        //             ignoreKeys : [ 'dur' ],
        //             delimiter : '\t',
        //             }));
        
        //             this.content = this.jsonToHTML(json, {
        //                 includeHeader : false,
        //                 ignoreKeys : [ 'dur' ],
        //                 delimiter : ', ',
        //             })
        //         }
        //     });
        // },
        manualSubtitles() {
            this.readonly = false
            this.manual = !this.manual
        },
        loadYouTubeSubtitles(videoId, options) {
            options = Object.assign({
                baseUrl : 'https://video.google.com/timedtext',
                languageId : this.languageId,
                callbackFn : function(json) { console.log(json); } // Default
            }, options || {});
    
            // https://stackoverflow.com/a/9609450/1762224
            var decodeHTML = (function() {
                let el = document.createElement('div');
                function __decode(str) {
                if (str && typeof str === 'string') {
                    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
                    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                    el.innerHTML = str;
                    str = el.textContent;
                    el.textContent = '';
                }
                return str;
                }
                removeElement(el); // Clean-up
                return __decode;
            })();
            
            function removeElement(el) {
                el && el.parentNode && el.parentNode.removeChild(el);
            }
    
            let parseTranscriptAsJSON = (xml) => {
                try {
                    return [].slice.call(xml.querySelectorAll('transcript text'))
                    .map(text => ({
                        start : formatTime(Math.floor(text.getAttribute('start'))),
                        dur : formatTime(Math.floor(text.getAttribute('dur'))),
                        text : decodeHTML(text.textContent).replace(/\s+/g, ' ')
                    }));
                }
                catch(err) {
                    this.error = "Sorry! we can't get the subtitles for this video. Please check if the Video URL is correct or Subtitles exists for this video in specified language";
                    console.log(this.error)
                }
            }
    
            function formatTime(seconds) {
                let date = new Date(null);
                date.setSeconds(seconds);
                return date.toISOString().substr(11, 8);
            }
    
            let xhr = new XMLHttpRequest();
            xhr.open('POST', `${options.baseUrl}?lang=${options.languageId}&v=${videoId}`, true);
            xhr.responseType = 'document';
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 400) {
                    options.callbackFn(parseTranscriptAsJSON(xhr.response));
                } else {
                    this.error = 'Error: ' + xhr.status + " - Check URL";
                    console.log(this.error);
                }
            };
            xhr.onerror = function() {
                console.log('Error!');
            };
            xhr.send();
        },
        jsonToCsv(json, options) {
            options = Object.assign({
                includeHeader : true,
                delimiter : ',',
                ignoreKeys : []
            }, options || {});
            try {
                let keys = Object.keys(json[0]).filter(key => options.ignoreKeys.indexOf(key) === -1);
                let lines = [];
                if (options.includeHeader) { lines.push(keys.join(options.delimiter)); }
                return lines.concat(json
                    .map(entry => entry.text))
                    .join('\n');
            }
            catch(err) {
                console.log("err")
            }
            
        },
        // jsonToHTML(json, options) {
        //     options = Object.assign({
        //         includeHeader : true,
        //         delimiter : ',',
        //         ignoreKeys : []
        //     }, options || {});
        //     let keys = Object.keys(json[0]).filter(key => options.ignoreKeys.indexOf(key) === -1);
        //     let lines = [];
        //     if (options.includeHeader) { lines.push(keys.join(options.delimiter)); }
        //     return lines.concat(json
        //         .map(entry => '<p>' + entry.text))
        //         .join('</p>\n');
        // },
        getUrlParam(url){
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = url.match(regExp);
            return (match&&match[7].length==11)? match[7] : false;
        }
    }
});

jQuery(document).ready(function () {

    // tinymce.init( {
    //     mode : "exact",
    //     elements : 'vidseo_tinymce',
    //     theme: "modern",
    //     skin: "lightgray",
    //     menubar : false,
    //     statusbar : false,
    //     plugins: [
    //     'lists link',
    //     'fullscreen',
    //     'media paste code'
    //     ],
    //     toolbar: 'formatselect | ' +
    //     'bold italic backcolor | alignleft aligncenter ' +
    //     'alignright alignjustify | bullist numlist outdent indent | ' +
    //     'removeformat | undo redo | code',
    //     paste_auto_cleanup_on_paste : true,
    //     paste_postprocess : function( pl, o ) {
    //         o.node.innerHTML = o.node.innerHTML.replace( /&nbsp;+/ig, " " );
    //     }
    // } );

    jQuery('.vidseo-alert').on('click', '.closebtn', function () {
        jQuery(this).closest('.vidseo-alert').fadeOut(); //.css('display', 'none');
    });

    jQuery("#fs_connect button[type=submit]").on("click", function(e) {
        console.log("open verify window")
        window.open('https://better-robots.com/subscribe.php?plugin=vidseo','vidseo','resizable,height=400,width=700');
    });

});