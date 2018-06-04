webpackJsonp([0xe99af70b8bc8],{443:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>A level is a layout that distributes the space between children evenly and it centers children on the x-axis. By default it positions the children horizontally, but on smaller devices it will position the children vertically.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-level</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initializes the level layout</td> </tr> <tr> <td><code>.pf-l-level__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Explicitly sets a child of the level. This class isn&#39;t necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-level</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},179:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var l=a(3),n=r(l),o=a(9),i=r(o),d=a(10),s=r(d),c=a(408),p=r(c),u=a(407),v=r(u),f=a(406),m=r(f),h=a(443),g=r(h);a(516);var k=t.Docs=g.default;t.default=function(){var e=(0,p.default)(),t=(0,v.default)(),a=(0,m.default)();return n.default.createElement(i.default,{docs:k,className:"is-layout-page"},n.default.createElement(s.default,{heading:"Level Example",description:"(with 2 children)"},e),n.default.createElement(s.default,{heading:"Level Example",description:"(with 3 children)"},t),n.default.createElement(s.default,{heading:"Level Example with Gutters",description:"(with 3 children)"},a))}},406:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,l,n){var o;return(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")},2:function(e,t,a,r,l){return"    content with gutter\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,l,n){var o;return null!=(o=e.invokePartial(a(48),t,{name:"level",hash:{modifierClass:"pf-m-gutter"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},407:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,l,n){var o;return(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")},2:function(e,t,a,r,l){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,l,n){var o;return null!=(o=e.invokePartial(a(48),t,{name:"level",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},408:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({1:function(e,t,r,l,n){var o;return(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(a(14),t,{name:"level-item",fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:"")},2:function(e,t,a,r,l){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,r,l,n){var o;return null!=(o=e.invokePartial(a(48),t,{name:"level",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:l,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},14:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,l){var n;return'<div class="pf-l-level__item">\n'+(null!=(n=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},48:function(e,t,a){var r=a(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,l){var n,o;return'<div class="pf-l-level '+e.escapeExpression((o=null!=(o=a.modifierClass||(null!=t?t.modifierClass:t))?o:a.helperMissing,"function"==typeof o?o.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:l}):o))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],t,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},516:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-level-examples-index-js-3158c31e344e85276ced.js.map