webpackJsonp([24823212021408],{744:function(e,r){e.exports="<h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>for</code></td> <td><code>&lt;label&gt;</code></td> <td>Each <code>&lt;label&gt;</code> must have a <code>for</code> attribute that matches its form field id. <strong>Required</strong></td> </tr> <tr> <td><code>id</code></td> <td><code>&lt;input type=&quot;radio/checkbox/text&quot;&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Each <code>&lt;form&gt;</code> field must have an <code>id</code> attribute that matches its label&#39;s <code>for</code> value. <strong>Required</strong></td> </tr> <tr> <td><code>required aria-required=&quot;true&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Required fields must include these attributes.</td> </tr> <tr> <td><code>id=&quot;{helper_text_id}&quot;</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Form fields with related <code>.pf-c-form__helper-text</code> require this attribute. Usage <code>&lt;p class=&quot;pf-c-form__helper-text&quot; id=&quot;{helper_text_id}&quot;&gt;</code>.</td> </tr> <tr> <td><code>aria-describedby=&quot;{helper_text_id}&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Form fields with related <code>.pf-c-form__helper-text</code> require this attribute. Usage <code>&lt;input aria-describedby=&quot;{helper_text_id}&quot;&gt;</code>.</td> </tr> <tr> <td><code>aria-invalid=&quot;true&quot; aria-errormessage=&quot;{helper_text_id}&quot;</code></td> <td><code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code></td> <td>Where form validation fails, <code>aria-errormessage</code> is used instead of <code>aria-describedby</code>. <code>aria-errormessage</code> and <code>aria-invalid=&quot;true&quot;</code> are only present when validation fails so this needs to be handled with Javascript. For proper styling of errors <code>aria-invalid=&quot;true&quot;</code> is required.</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-form</code></td> <td><code>&lt;form&gt;</code></td> <td>Initiates a standard form. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-form__label</code></td> <td><code>&lt;label&gt;</code></td> <td>Initiates a form label. <strong>Required</strong></td> </tr> <tr> <td><code>.pf-c-form__helper-text</code></td> <td><code>&lt;p&gt;</code></td> <td>Initiates a form helper text block.</td> </tr> <tr> <td><code>.pf-c-form__group</code></td> <td><code>&lt;div&gt;</code></td> <td>Wraps form fields <code>&lt;label&gt;</code> + <code>&lt;field&gt;</code> + <code>.form-helper-text</code>.</td> </tr> <tr> <td><code>.pf-c-form__horizontal-group</code></td> <td><code>&lt;div&gt;</code></td> <td>Wraps <code>.pf-c-form-control</code> when using <code>.pf-m-horizontal</code> on <code>.pf-c-form</code> to provide proper spacing for longer labels.</td> </tr> <tr> <td><code>.pf-m-error</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Modifies text color of helper text.</td> </tr> <tr> <td><code>.pf-m-inactive</code></td> <td><code>.pf-c-form__helper-text</code></td> <td>Modifies display of helper text to none.</td> </tr> <tr> <td><code>.pf-m-border</code></td> <td><code>.pf-c-form__section</code></td> <td>Modifies form element border-bottom.</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>.pf-c-form__label</code></td> <td>Modifies form label to show disabled state.</td> </tr> <tr> <td><code>.pf-m-required</code></td> <td><code>.pf-c-form__label</code></td> <td>Modifies form label to show required state.</td> </tr> <tr> <td><code>.pf-m-inline</code></td> <td><code>.pf-c-form__group</code></td> <td>Modifies form group children to be inline (this is primarily for radio buttons and checkboxes).</td> </tr> <tr> <td><code>.pf-m-action</code></td> <td><code>.pf-c-form__group</code></td> <td>Modifies form group margin-top.</td> </tr> </tbody> </table> "},969:function(e,r){e.exports='{{#> form}}\n  {{#> form-group form-group--modifier="pf-m-action"}}\n      {{#> toolbar}}\n        {{#> toolbar-group}}\n          {{#> toolbar-item}}\n            {{#> button btnClass="pf-m-primary"}}\n              Submit form\n            {{/button}}\n          {{/toolbar-item}}\n        {{/toolbar-group}}\n        {{#> toolbar-group}}\n          {{#> toolbar-item}}\n            {{#> button btnClass="pf-m-secondary"}}\n              Cancel\n            {{/button}}\n          {{/toolbar-item}}\n        {{/toolbar-group}}\n      {{/toolbar}}\n  {{/form-group}}\n{{/form}}\n'},607:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(19),r,{name:"form-group",hash:{"form-group--modifier":"pf-m-action"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(44),r,{name:"toolbar",fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},3:function(e,r,o,a,n){var l;return(null!=(l=e.invokePartial(t(18),r,{name:"toolbar-group",fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(t(18),r,{name:"toolbar-group",fn:e.program(8,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},4:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(14),r,{name:"toolbar-item",fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},5:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(5),r,{name:"button",hash:{btnClass:"pf-m-primary"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},6:function(e,r,t,o,a){return"              Submit form\n"},8:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(14),r,{name:"toolbar-item",fn:e.program(9,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},9:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(5),r,{name:"button",hash:{btnClass:"pf-m-secondary"},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},10:function(e,r,t,o,a){return"              Cancel\n"},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(48),r,{name:"form",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},970:function(e,r){e.exports='{{#> form}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=\'for="simple-form-name"\' required="true"}}Name{{/form-label}}\n    {{#> form-control controlType="input" input="true" type="text" id="simple-form-name" name="simple-form-name" required="true" aria-errormessage="simple-form-name-helper-1"}}\n    {{/form-control}}\n    {{#> form-helper-text form-helper-text--modifier=\'id="simple-form-name-helper-1" aria-live="polite"\'}}This is helper text{{/form-helper-text}}\n  {{/form-group}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=\'for="simple-form-address"\' required="true"}}address{{/form-label}}\n    {{#> form-control controlType="input" input="true" type="text" id="simple-form-name" name="simple-form-name" required="true" aria-invalid="true" aria-errormessage="simple-form-name-helper-2"}}\n    {{/form-control}}\n    {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute=\'id="simple-form-name-helper-2" aria-live="polite"\'}}This is helper text for an invalid input{{/form-helper-text}}\n  {{/form-group}}\n{{/form}}\n'},608:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,o,a,n){var l;return(null!=(l=e.invokePartial(t(19),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+(null!=(l=e.invokePartial(t(19),r,{name:"form-group",fn:e.program(9,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},2:function(e,r,o,a,n){var l;return"    "+(null!=(l=e.invokePartial(t(23),r,{name:"form-label",hash:{required:"true","form-label--attribute":'for="simple-form-name"'},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"+(null!=(l=e.invokePartial(t(15),r,{name:"form-control",hash:{"aria-errormessage":"simple-form-name-helper-1",required:"true",name:"simple-form-name",id:"simple-form-name",type:"text",input:"true",controlType:"input"},fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"    "+(null!=(l=e.invokePartial(t(78),r,{name:"form-helper-text",hash:{"form-helper-text--modifier":'id="simple-form-name-helper-1" aria-live="polite"'},fn:e.program(7,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"},3:function(e,r,t,o,a){return"Name"},5:function(e,r,t,o,a){return""},7:function(e,r,t,o,a){return"This is helper text"},9:function(e,r,o,a,n){var l;return"    "+(null!=(l=e.invokePartial(t(23),r,{name:"form-label",hash:{required:"true","form-label--attribute":'for="simple-form-address"'},fn:e.program(10,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"+(null!=(l=e.invokePartial(t(15),r,{name:"form-control",hash:{"aria-errormessage":"simple-form-name-helper-2","aria-invalid":"true",required:"true",name:"simple-form-name",id:"simple-form-name",type:"text",input:"true",controlType:"input"},fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"    "+(null!=(l=e.invokePartial(t(78),r,{name:"form-helper-text",hash:{"form-helper-text--attribute":'id="simple-form-name-helper-2" aria-live="polite"',"form-helper-text--modifier":"pf-m-error"},fn:e.program(12,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"},10:function(e,r,t,o,a){return"address"},12:function(e,r,t,o,a){return"This is helper text for an invalid input"},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(48),r,{name:"form",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},609:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(19),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,o,a,n){var l;return"    "+(null!=(l=e.invokePartial(t(23),r,{name:"form-label",hash:{required:"true","form-label--attribute":'for="horizontal-form-name"'},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"+(null!=(l=e.invokePartial(t(49),r,{name:"horizontal-form-group",fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},3:function(e,r,t,o,a){return"Name"},5:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(15),r,{name:"form-control",hash:{required:"true",name:"horizontal-form-name",id:"horizontal-form-name",type:"text",input:"true",controlType:"input"},fn:e.program(6,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},6:function(e,r,t,o,a){return""},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return"\n"+(null!=(l=e.invokePartial(t(48),r,{name:"form",hash:{"form--modifier":"pf-m-horizontal"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},usePartial:!0,useData:!0})},971:function(e,r){e.exports='\n{{#> form form--modifier="pf-m-horizontal"}}\n  {{#> form-group }}\n    {{#> form-label form-label--attribute=\'for="horizontal-form-name"\' required="true"}}Name{{/form-label}}\n    {{#> horizontal-form-group}}\n      {{#> form-control controlType="input" input="true" type="text" id="horizontal-form-name" name="horizontal-form-name" required="true"}}\n      {{/form-control}}\n    {{/horizontal-form-group}}\n  {{/form-group}}\n{{/form}}\n'},972:function(e,r){e.exports='{{#> form}}\n  {{#> form-group}}\n    {{#> form-label form-label--attribute=\'for="vertical-form-name"\' required="true"}}Name{{/form-label}}\n    {{#> form-control controlType="input" input="true" type="text" id="vertical-form-name" name="vertical-form-name" required="true"}}\n    {{/form-control}}\n  {{/form-group}} \n{{/form}}\n'},610:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(19),r,{name:"form-group",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},2:function(e,r,o,a,n){var l;return"    "+(null!=(l=e.invokePartial(t(23),r,{name:"form-label",hash:{required:"true","form-label--attribute":'for="vertical-form-name"'},fn:e.program(3,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")+"\n"+(null!=(l=e.invokePartial(t(15),r,{name:"form-control",hash:{required:"true",name:"vertical-form-name",id:"vertical-form-name",type:"text",input:"true",controlType:"input"},fn:e.program(5,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:"")},3:function(e,r,t,o,a){return"Name"},5:function(e,r,t,o,a){return""},compiler:[7,">= 4.0.0"],main:function(e,r,o,a,n){var l;return null!=(l=e.invokePartial(t(48),r,{name:"form",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:o,partials:a,decorators:e.decorators}))?l:""},usePartial:!0,useData:!0})},266:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0,r.Docs=void 0;var a=t(3),n=o(a),l=t(10),i=o(l),d=t(11),u=o(d),f=t(972),m=o(f),s=t(971),p=o(s),c=t(970),h=o(c),v=t(969),b=o(v),g=t(610),x=o(g),_=t(609),q=o(_),k=t(608),P=o(k),y=t(607),C=o(y),z=t(744),M=o(z);t(903);var T=r.Docs=M.default;r.default=function(){var e=(0,x.default)(),r=(0,q.default)(),t=(0,P.default)(),o=(0,C.default)(),a="Form";return n.default.createElement(i.default,{docs:T,heading:a},n.default.createElement(u.default,{heading:"Vertical aligned Labels",handlebars:m.default},e),n.default.createElement(u.default,{heading:"Horizontal aligned Labels",handlebars:p.default},r),n.default.createElement(u.default,{heading:"Help text",handlebars:h.default},t),n.default.createElement(u.default,{heading:"Action Group",handlebars:b.default},o))}},19:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form-group--modifier"]||(null!=r?r["form-group--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form-group--modifier",hash:{},data:a}):n))},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n;return'<div class="pf-c-form__group'+(null!=(n=t.if.call(null!=r?r:e.nullContext||{},null!=r?r["form-group--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'">\n'+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</div>"},usePartial:!0,useData:!0})},78:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form-helper-text--modifier"]||(null!=r?r["form-helper-text--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form-helper-text--modifier",hash:{},data:a}):n))},3:function(e,r,t,o,a){var n,l;return"    "+(null!=(l=null!=(l=t["form-helper-text--attribute"]||(null!=r?r["form-helper-text--attribute"]:r))?l:t.helperMissing,n="function"==typeof l?l.call(null!=r?r:e.nullContext||{},{name:"form-helper-text--attribute",hash:{},data:a}):l)?n:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n,l=null!=r?r:e.nullContext||{};return'<p class="pf-c-form__helper-text'+(null!=(n=t.if.call(l,null!=r?r["form-helper-text--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'" \n'+(null!=(n=t.if.call(l,null!=r?r["form-helper-text--attribute"]:r,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</p>"},usePartial:!0,useData:!0})},23:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form-label--modifier"]||(null!=r?r["form-label--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form-label--modifier",hash:{},data:a}):n))},3:function(e,r,t,o,a){var n,l;return"        "+(null!=(l=null!=(l=t["form-label--attribute"]||(null!=r?r["form-label--attribute"]:r))?l:t.helperMissing,n="function"==typeof l?l.call(null!=r?r:e.nullContext||{},{name:"form-label--attribute",hash:{},data:a}):l)?n:"")+"\n    "},5:function(e,r,t,o,a){return'        <span class="pf-c-form__label__required" aria-hidden="true">&#42;</span>\n'},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n,l=null!=r?r:e.nullContext||{};return'<label class="pf-c-form__label'+(null!=(n=t.if.call(l,null!=r?r["form-label--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'" \n'+(null!=(n=t.if.call(l,null!=r?r["form-label--attribute"]:r,{name:"if",hash:{},fn:e.program(3,a,0),inverse:e.noop,data:a}))?n:"")+">\n"+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"    ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+(null!=(n=t.if.call(l,null!=r?r.required:r,{name:"if",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a}))?n:"")+"</label>\n"},usePartial:!0,useData:!0})},48:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,r,t,o,a){var n;return" "+e.escapeExpression((n=null!=(n=t["form--modifier"]||(null!=r?r["form--modifier"]:r))?n:t.helperMissing,"function"==typeof n?n.call(null!=r?r:e.nullContext||{},{name:"form--modifier",hash:{},data:a}):n))},compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n;return'<form class="pf-c-form'+(null!=(n=t.if.call(null!=r?r:e.nullContext||{},null!=r?r["form--modifier"]:r,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a}))?n:"")+'">\n'+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</form>\n"},usePartial:!0,useData:!0})},49:function(e,r,t){var o=t(1);e.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(e,r,t,o,a){var n;return'<div class="pf-c-form__horizontal-group">\n'+(null!=(n=e.invokePartial(o["@partial-block"],r,{name:"@partial-block",data:a,indent:"  ",helpers:t,partials:o,decorators:e.decorators}))?n:"")+"</div>"},usePartial:!0,useData:!0})},903:function(e,r){}});
//# sourceMappingURL=component---src-patternfly-components-form-examples-index-js-f9a1f4c385f5156f5133.js.map