(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"9kyK":function(e,t,n){"use strict";n.r(t),n.d(t,"VariablesModule",(function(){return E}));var a=n("HHFY"),i=n("2kYt"),l=n("nIj0"),r=n("sEIs"),o=n("SVIu"),s=n("Qq0t"),u=n("dvRg"),c=n("EM62"),d=n("OZlg"),p=n("yZWP"),m=n("iyc4"),f=n("HvLL"),h=n("GdrL"),b=n("D+uv");let v=(()=>{class e{constructor(){this.value="",this.checkbox=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-variables-example-1"]],decls:6,vars:3,consts:[[3,"hoverable"],[3,"ngModel","ngModelChange"],[1,"tui-space_top-4"],["size","l",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-island",0),c["\u0275\u0275elementStart"](1,"tui-input",1),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),c["\u0275\u0275text"](2,"Input example"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"tui-checkbox-labeled",3),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.checkbox=e})),c["\u0275\u0275text"](5," Checkbox example "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("hoverable",!0),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngModel",t.value),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngModel",t.checkbox))},directives:[f.a,h.a,l.NgControlStatus,l.NgModel,b.a],styles:['[_nghost-%COMP%]{--tui-font-text:"Comic Sans",cursive;--tui-primary:#c86dd7;--tui-primary-hover:#a456b1;--tui-primary-active:#7f3b8a;--tui-primary-text:#fff;--tui-radius-s:0;--tui-radius-m:4px;--tui-radius-l:4px;--tui-height-l:70px}'],changeDetection:0}),e})();var g=n("ER+R");const x=["header","Variables"];var y,k;y=" Taiga UI uses CSS custom properties for many of its visual aspects. You can see " + "\ufffd#4\ufffd" + "colors" + "\ufffd/#4\ufffd" + " for the full list of color variables. ",k=" Besides colors there are also following variables that can be adjusted at any level of DOM structure: ";const S=["heading","Override example"];function M(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"li"),c["\u0275\u0275elementStart"](1,"tui-doc-copy",4),c["\u0275\u0275elementStart"](2,"code"),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("cdkCopyToClipboard",e.key),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](e.key),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" \u2014 ",e.value," ")}}let C=(()=>{class e{constructor(){this.example1={HTML:'<tui-island [hoverable]="true">\n    <tui-input [(ngModel)]="value">Input example</tui-input>\n    <div class="tui-space_top-4">\n        <tui-checkbox-labeled size="l" [(ngModel)]="checkbox">\n            Checkbox example\n        </tui-checkbox-labeled>\n    </div>\n</tui-island>\n',LESS:":host {\n    --tui-font-text: 'Comic Sans', cursive;\n    --tui-primary: #c86dd7;\n    --tui-primary-hover: #a456b1;\n    --tui-primary-active: #7f3b8a;\n    --tui-primary-text: #fff;\n    --tui-radius-s: 0;\n    --tui-radius-m: 4px;\n    --tui-radius-l: 4px;\n    --tui-height-l: 70px;\n}\n"},this.vars={"--tui-font-heading":"font for headings","--tui-font-text":"font for text","--tui-radius-xs":"border radius for smallest items (i.e. small checkbox)","--tui-radius-s":"border radius for small elements (i.e. tags)","--tui-radius-m":"default border radius","--tui-radius-l":"border radius for containers (i.e. hint, accordion)","--tui-height-xs":"smallest elements height (i.e. small button, badges)","--tui-height-s":"small elements height (i.e. small inputs)","--tui-height-m":"default elements height (i.e. inputs, buttons)","--tui-height-l":"large elements height (i.e. inputs, buttons)","--tui-disabled-opacity":"amount of transparency for disabled elements","--tui-autofill":"color for native browser autofill"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["variables"]],decls:13,vars:4,consts:[[6,"header"],["tuiLink","","routerLink","/colors"],[4,"ngFor","ngForOf"],["id","override",3,"content",6,"heading"],[1,"var",3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,x),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,y),c["\u0275\u0275element"](4,"a",1),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"p"),c["\u0275\u0275i18n"](6,k),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ul"),c["\u0275\u0275template"](8,M,5,3,"li",2),c["\u0275\u0275pipe"](9,"keyvalue"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](11,S),c["\u0275\u0275element"](12,"tui-variables-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngForOf",c["\u0275\u0275pipeBind1"](9,2,t.vars)),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",t.example1))},directives:[d.a,p.a,r.e,i.s,m.a,v,g.a,a.a],pipes:[i.l],styles:[""],encapsulation:2,changeDetection:0}),e})(),E=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,a.c,u.TuiIslandModule,s.TuiLinkModule,o.h,u.TuiInputModule,u.TuiCheckboxLabeledModule,...o.d,r.f.forChild(Object(o.m)(C)),l.FormsModule]]}),e})()}}]);