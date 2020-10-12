(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FT44:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("cy/P"),r=n.n(o);t.a=function(e){var t=e.ver,n=e.onClick,a=e.id,o=e.small,i=e.type,s=e.role,c=e.route,u=e.link,d=e.children,m=function(){var e=r.a.btn;return["neutral","success","danger"].find((function(e){return e===t}))&&(e+=" "+r.a[t]),o&&(e+=" "+r.a.small),e};return u?l.a.createElement("a",{href:"/"+c,id:a,className:m()+" "+r.a.buttonLink},d):l.a.createElement("button",{onClick:n,id:a,className:m(),type:i||"button",role:s||"button"},d)}},OXyD:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("soK+"),r=n.n(o);t.a=function(e){var t=e.children;return l.a.createElement("p",{className:r.a.notice},t)}},U4Wr:function(e,t,n){"use strict";n.r(t),n.d(t,"PureGenHelp",(function(){return s}));var a=n("q1tI"),l=n.n(a),o=n("Wbzz"),r=n("OXyD"),i=n("VAZE"),s=function(e){var t,n,a=e.data,o=null==a||null===(t=a.site)||void 0===t?void 0:t.siteMetadata,s=null==o||null===(n=o.toolInfo)||void 0===n?void 0:n.gen;return l.a.createElement(i.a,{toolInfo:s},l.a.createElement("h3",{id:"using"},"Using ",null==o?void 0:o.title,s.title),l.a.createElement("p",null,"The most important part of the tool is the ",l.a.createElement("strong",null,"Pattern"),". This field defines how words will be formed using a specific syntax, defined ",l.a.createElement("a",{href:"#syntax"},"below"),". This field can define specific letters that can be used, or it can contain references to Subpatterns."),l.a.createElement("p",null,"Up to 26 ",l.a.createElement("strong",null,"Subpatterns")," are available for use. These subpatterns are defined in exactly the same way as the Pattern. Their power lies in the fact that each Subpattern can be referenced by the Pattern, allowing significantly more variability in word generation."),l.a.createElement("p",null,"In the most common usage, a Subpattern generally represents a class of phonemes while the Pattern represents the possible combinations of all the phoneme classes. For example, one might use a Subpattern named"," ",l.a.createElement("code",null,"V")," to represent vowels, ",l.a.createElement("code",null,"C")," to represent consonants, and ",l.a.createElement("code",null,"N")," to represent nasals. Alternatively, one might use a Subpattern named ",l.a.createElement("code",null,"O")," to represent the syllable onset, ",l.a.createElement("code",null,"N")," to represent the nucleus, and ",l.a.createElement("code",null,"C")," to represent the coda. There is great flexibility in Subpattern use."),l.a.createElement("h4",{id:"syntax"},"Syntax"),l.a.createElement("p",null,"The syntax is identical for all Pattern and Subpattern fields. Uppercase versions of the standard English letters (e.g. ",l.a.createElement("code",null,"C"),","," ",l.a.createElement("code",null,"V"),", or ",l.a.createElement("code",null,"N"),") are variables referring to Subpatterns while any other letter (e.g. ",l.a.createElement("code",null,"a"),", ",l.a.createElement("code",null,"s"),", or ",l.a.createElement("code",null,"n"),") represents that specific glyph."),l.a.createElement("h5",{id:"options"},"Options – ",l.a.createElement("code",null,"/")),l.a.createElement("p",null,"Multiple options can be separated using forward slashes (",l.a.createElement("code",null,"/"),"). For each word, the tool will randomly select one of the options. By default, each option will have the same chance of being chosen. This can be changed by assigning ",l.a.createElement("a",{href:"#weights"},"weights"),". For example, with the Subpatterns ",l.a.createElement("code",null,"V: a/i"),", ",l.a.createElement("code",null,"C: t/s"),", and"," ",l.a.createElement("code",null,"N: m/n")," and the Pattern ",l.a.createElement("code",null,"CVN"),", the tool will output the words ",l.a.createElement("samp",null,"sam tan tam tin sim san tim sin"),"."),l.a.createElement("h5",{id:"units"},"Single Units – ",l.a.createElement("code",null,"[ ]")),l.a.createElement(r.a,null,"This functionality has not yet been implemented."),l.a.createElement("p",null,"Everything contained within brackets (",l.a.createElement("code",null,"[ ]"),") is treated as a single unit. For example, the Pattern ",l.a.createElement("code",null,"as[tu/top/kan]")," will produce the output ",l.a.createElement("code",null,"astu astop askan"),". Brackets and parentheses can be nested unlimitedly."),l.a.createElement("h5",{id:"optional"},"Optional Units – ",l.a.createElement("code",null,"( )")),l.a.createElement(r.a,null,"This functionality has not yet been implemented."),l.a.createElement("p",null,"Everything contained within parentheses (",l.a.createElement("code",null,"( )"),") is treated as a single unit that is optional. For example, the Pattern"," ",l.a.createElement("code",null,"as(tu/top/kan)")," will produce the output"," ",l.a.createElement("code",null,"as astu astop askan"),". Parentheses and brackets can be nested unlimitedly."),l.a.createElement("h5",{id:"weights"},"Weights – ",l.a.createElement("code",null,"*")),l.a.createElement(r.a,null,"This functionality has not yet been implemented."),l.a.createElement("p",null,"Weights can be added to certain choices using an asterisk ",l.a.createElement("code",null,"*")," ","and a number to improve the likelihood of it being chosen. For example, with the pattern ",l.a.createElement("code",null,"a/e*3/i*2/o/u*5"),", the tool would output"," ",l.a.createElement("code",null,"a")," or ",l.a.createElement("code",null,"o")," with equal probability, but compared to these would be twice as likely to output ",l.a.createElement("code",null,"i"),", three times as likely to output ",l.a.createElement("code",null,"e"),", and five times as likely to output"," ",l.a.createElement("code",null,"u"),". The number used as a weight must be an integer between 1 and 128."),l.a.createElement("h5",{id:"filtering"},"Filtering – ",l.a.createElement("code",null,"^")),l.a.createElement(r.a,null,"This functionality has not yet been implemented."),l.a.createElement("p",null,"Filtering can be added to units using a caret ",l.a.createElement("code",null,"^")," and a potential output to restrict the possible results. Multiple filters can be added to the same unit to filter out multiple options. For example, with the Subpattern ",l.a.createElement("code",null,"V: a/i/u")," and hte Pattern"," ",l.a.createElement("code",null,"t[VV]^aa^ii^uu"),", the tool will output"," ",l.a.createElement("code",null,"tai tau tia tiu tua tui"),", filtering out"," ",l.a.createElement("code",null,"taa tii tuu"),"."),l.a.createElement("h5",{id:"escaping"},"Esaping Characters – ",l.a.createElement("code",null,'" "')),l.a.createElement(r.a,null,"This functionality has not yet been implemented."),l.a.createElement("p",null,"Special characters otherwise used for the tool’s syntax can be escaped using double quotes ",l.a.createElement("code",null,'" "'),". For example, with the Subpattern ",l.a.createElement("code",null,"V: a/i/u")," and the Pattern"," ",l.a.createElement("code",null,'Vt"V[n/m]"'),", the tool will produce the output"," ",l.a.createElement("code",null,"atV[n/m] itV[n/m] utV[n/m]"),"."),l.a.createElement("h4",{id:"generating"},"Generating Words"),l.a.createElement("p",null,"Once the Pattern and all Subpatterns have been set up, you can click the"," ",l.a.createElement("strong",null,"Generate")," button to generate words. There are also several adjustments you can make, including the total number of words that should be generated, whether each word should be written on a new line, and whether the tool should filter out duplicate words."),l.a.createElement("p",null,"After the words have been generated, some statistics are shown below, including how many words were printed to the output, how many duplicates were filtered out of the results (if any), and how many words are possible based on the given Pattern and Subpatterns. (Note that the number of ",l.a.createElement("em",null,"unique")," words possible may actually be lower if there are multiple ways to obtain the same word.)"),l.a.createElement("h4",{id:"files"},"Saving and Loading Settings"),l.a.createElement("p",null,"Clicking the ",l.a.createElement("strong",null,"Save")," button will save the current settings to the browser’s local storage and generate a small ",l.a.createElement("code",null,".lngg")," ","text file containing the current settings that can be saved to your disk. This ",l.a.createElement("code",null,".lngg")," file can be loaded using the"," ",l.a.createElement("strong",null,"Open")," button to reload saved settings."),l.a.createElement("h3",{id:"acknowledgments"},"Acknowledgments"),l.a.createElement("p",null,"Much thanks should be given to Petr Mejzlík and"," ",l.a.createElement("a",{href:"https://github.com/nai888/awkwords",target:"_blank",rel:"noopener noreferrer"},"Awkwords"),". ",null==o?void 0:o.title,s.title," was mainly built as a modernized and updated version of Awkwords."))};t.default=function(e){var t=Object(o.useStaticQuery)("1352823891");return l.a.createElement(s,Object.assign({},e,{data:t}))}},VAZE:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("Wbzz"),r=n("I/Ru"),i=n("jNNy"),s=n("FT44"),c=n("tvmY"),u=n.n(c),d=function(e){var t,n=e.data,a=e.toolInfo,o=e.children,c=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata;return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" Help",canonical:(null==a?void 0:a.link)+"/help"}),l.a.createElement(s.a,{link:!0,route:null==a?void 0:a.link},"Back"),l.a.createElement("h2",{className:u.a.toolTitle},""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" Help"),l.a.createElement("p",{id:u.a.description},""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" "+(null==a?void 0:a.description)),o)};t.a=function(e){var t=Object(o.useStaticQuery)("4063318711");return l.a.createElement(d,Object.assign({},e,{data:t}))}},"cy/P":function(e,t,n){e.exports={btn:"button-module--btn--1Vo01",neutral:"button-module--neutral--3CChK",success:"button-module--success--MfUtK",danger:"button-module--danger--3YJms",small:"button-module--small--gFeIB",buttonLink:"button-module--button-link--2l7Ks"}},"soK+":function(e,t,n){e.exports={notice:"notice-module--notice--14xfk"}},tvmY:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-gen-help-index-js-7267c4d3cbebda70a6a1.js.map