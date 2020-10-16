(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FT44:function(e,t,n){"use strict";var o=n("nKUr"),s=(n("q1tI"),n("cy/P")),i=n.n(s);t.a=function(e){var t=e.ver,n=e.onClick,s=e.id,l=e.small,c=e.type,a=e.role,r=e.route,d=e.link,h=e.children,u=function(){var e=i.a.btn;return["neutral","success","danger"].find((function(e){return e===t}))&&(e+=" "+i.a[t]),l&&(e+=" "+i.a.small),e};return d?Object(o.jsx)("a",{href:"/"+r,id:s,className:u()+" "+i.a.buttonLink,children:h}):Object(o.jsx)("button",{onClick:n,id:s,className:u(),type:c||"button",role:a||"button",children:h})}},K4Nl:function(e,t,n){"use strict";n.r(t),n.d(t,"PureFrequenHelp",(function(){return c}));var o=n("nKUr"),s=(n("q1tI"),n("Wbzz")),i=n("OXyD"),l=n("VAZE"),c=function(e){var t,n,s=e.data,c=null==s||null===(t=s.site)||void 0===t?void 0:t.siteMetadata,a=null==c||null===(n=c.toolInfo)||void 0===n?void 0:n.frequen;return Object(o.jsxs)(l.a,{toolInfo:a,children:[Object(o.jsxs)("h3",{id:"using",children:["Using ",null==c?void 0:c.title,null==a?void 0:a.title]}),Object(o.jsx)("h4",{id:"corpus",children:"Text Corpus"}),Object(o.jsxs)("p",{children:["Input a corpus of text in the ",Object(o.jsx)("strong",{children:"Text Corpus"})," field. This is the text that will be analyzed. The text can be phomic or phonetic, or it can simply use the language’s standard spelling system. For best results, however, each sound that should be analyzed separately will need its own grapheme or grapheme cluster. For example, in English, the letter ",Object(o.jsx)("code",{children:"y"})," would need to be differentiated based on when it occurs as a consonant vs. when it occurs as a vowel. It does not matter if punctuation is removed from the corpus, as any graphemes not identified for analysis in the next step will be ignored by the tool."]}),Object(o.jsx)("h4",{id:"phonemes",children:"Phonemes"}),Object(o.jsxs)("p",{children:["Next, add a list of consonants and vowels accordingly to the"," ",Object(o.jsx)("strong",{children:"Consonants"})," and ",Object(o.jsx)("strong",{children:"Vowels"})," lists. Separate each of the segments with a forward slash (",Object(o.jsx)("code",{children:"/"}),"). These segments can be single graphemes or grapheme clusters, and a cluster can contain characters that are used in shorter segments. For example, given the corpus ",Object(o.jsx)("code",{children:"kanto"})," and the consonants"," ",Object(o.jsx)("code",{children:"n/t/nt"}),", the tool will identify one occurance of"," ",Object(o.jsx)("code",{children:"nt"}),", but no occurances of ",Object(o.jsx)("code",{children:"n"})," or ",Object(o.jsx)("code",{children:"t"}),". Any graphemes not identified for analysis will be ignored. In the previous example, since ",Object(o.jsx)("code",{children:"k"})," was not added to the list of consonants, the tool would not count its occurance."]}),Object(o.jsx)("h4",{id:"allophones",children:"Allophones"}),Object(o.jsxs)("p",{children:["Allophones can be added after a segment to indicate that multiple segments should all be counted as occurances of the same segment. Separate allophones with a comma (",Object(o.jsx)("code",{children:","}),"). For example, given the corpus ",Object(o.jsx)("code",{children:"potaná"}),", if the vowels list contained ",Object(o.jsx)("code",{children:"a/á/o"}),", the tool would identify one occurance each of ",Object(o.jsx)("code",{children:"a"}),", ",Object(o.jsx)("code",{children:"á"}),", and ",Object(o.jsx)("code",{children:"o"}),", but if the vowels list contained ",Object(o.jsx)("code",{children:"a,á/o"}),", the tool would identify two occurances of ",Object(o.jsx)("code",{children:"a"})," and one occurance of ",Object(o.jsx)("code",{children:"o"}),"."]}),Object(o.jsx)("h4",{id:"analysis",children:"Analysis"}),Object(o.jsxs)("p",{children:["When ready, click the ",Object(o.jsx)("strong",{children:"Analyze"})," button to run the analysis. The tool will draw a graph and display a table showing the frequencies of each of the identified segments in the text corpus. Segments that never occur will be omitted from the graph and table."]}),Object(o.jsx)("h4",{id:"filtering",children:"Filtering"}),Object(o.jsx)(i.a,{children:"This feature is still in development."}),Object(o.jsx)("p",{children:"After a text has been analyzed, the results can be filtered to show only certain segments. Choosing a filter will show the percentages in the data as it compares to only segments of that type, rather than comparing to all segments."}),Object(o.jsx)("p",{children:"Currently, the results can be filtered to show only consonants or only vowels. Additional filtering options will be added in the future."}),Object(o.jsx)("h4",{id:"files",children:"Saving and Loading Settings"}),Object(o.jsxs)("p",{children:["Clicking the ",Object(o.jsx)("strong",{children:"Save"})," button will save the current settings to the browser’s local storage and generate a small ",Object(o.jsx)("code",{children:".lngf"})," ","text file containing the current settings that can be saved to your disk. This ",Object(o.jsx)("code",{children:".lngf"})," file can be loaded using the"," ",Object(o.jsx)("strong",{children:"Open"})," button to reload saved settings."]}),Object(o.jsx)("h3",{id:"acknowledgments",children:"Acknowledgments"}),Object(o.jsxs)("p",{children:["Much thanks should be given to Jan Strasser and"," ",Object(o.jsx)("a",{href:"http://akana.conlang.org/tools/frequentizer.html",target:"_blank",rel:"noopener noreferrer",children:"the Frequentizer"}),". ",null==c?void 0:c.title,null==a?void 0:a.title," was mainly built as a modernized and updated version of the Frequentizer."]})]})};t.default=function(e){var t=Object(s.useStaticQuery)("3333795083");return Object(o.jsx)(c,Object.assign({},e,{data:t}))}},OXyD:function(e,t,n){"use strict";var o=n("nKUr"),s=(n("q1tI"),n("soK+")),i=n.n(s);t.a=function(e){var t=e.children;return Object(o.jsx)("p",{className:i.a.notice,children:t})}},VAZE:function(e,t,n){"use strict";var o=n("nKUr"),s=(n("q1tI"),n("Wbzz")),i=n("I/Ru"),l=n("jNNy"),c=n("FT44"),a=n("tvmY"),r=n.n(a),d=function(e){var t,n=e.data,s=e.toolInfo,a=e.children,d=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata;return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l.a,{title:""+(null==d?void 0:d.title)+(null==s?void 0:s.title)+" Help",canonical:(null==s?void 0:s.link)+"/help"}),Object(o.jsx)(c.a,{link:!0,route:null==s?void 0:s.link,children:"Back"}),Object(o.jsx)("h2",{className:r.a.toolTitle,children:""+(null==d?void 0:d.title)+(null==s?void 0:s.title)+" Help"}),Object(o.jsx)("p",{id:r.a.description,children:""+(null==d?void 0:d.title)+(null==s?void 0:s.title)+" "+(null==s?void 0:s.description)}),a]})};t.a=function(e){var t=Object(s.useStaticQuery)("4063318711");return Object(o.jsx)(d,Object.assign({},e,{data:t}))}},"cy/P":function(e,t,n){e.exports={btn:"button-module--btn--1Vo01",neutral:"button-module--neutral--3CChK",success:"button-module--success--MfUtK",danger:"button-module--danger--3YJms",small:"button-module--small--gFeIB",buttonLink:"button-module--button-link--2l7Ks"}},"soK+":function(e,t,n){e.exports={notice:"notice-module--notice--14xfk"}},tvmY:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-frequen-help-index-js-5f029e9fd5791c2ca66f.js.map