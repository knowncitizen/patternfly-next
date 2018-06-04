webpackJsonp([0xf25c34515ec1],{456:function(e,i){e.exports={data:{markdownRemark:{html:'<h1 id="accessibility-guide"><a href="#accessibility-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility Guide</h1>\n<p><em>Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.</em></p>\n<p>The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of physical ability.</p>\n<p>Since accessibility is best achieved when considered early in the design and development process, we ask everyone who contributes to or consumes PatternFly to understand accessibility needs and how they can be met. The following guide provides techniques and suggestions to help you design, develop, and test UIs to ensure that everyone has a good user experience.</p>\n<ul>\n<li><a href="#understanding-users-needs">Understanding Users’ Needs</a></li>\n<li>\n<p><a href="#checklists">Checklists</a></p>\n<ul>\n<li>\n<p><a href="#design-and-development-guidelines">Design and Development Guidelines</a></p>\n<ul>\n<li><a href="#what-patternfly-designers-and-developers-should-address">What PatternFly Designers and Developers Should Address</a></li>\n<li><a href="#what-product-developers-and-designers-should-address">What Product Developers and Designers Should Address</a></li>\n</ul>\n</li>\n<li><a href="#testing">Testing</a></li>\n<li><a href="#screen-reader-support">Screen Reader Support</a></li>\n</ul>\n</li>\n<li><a href="#methods">Methods</a></li>\n</ul>\n<h2 id="understanding-users-needs"><a href="#understanding-users-needs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Understanding Users’ Needs</h2>\n<p>Great user experiences don’t just happen; they’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use. This section provides information to help you better understand and address the needs of these <a href="https://a11yproject.com/posts/myth-accessibility-m-blind-people/">different user groups</a>.</p>\n<p>Note: It’s possible for a user to fall into more than one group, or to use tools and devices designed for a different user group. One of the greatest benefits of an inclusive design practice is that methods designed for a specific user group will often provide benefits to everyone.</p>\n<h3 id="no-vision"><a href="#no-vision" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Vision</h3>\n<p>Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements. Use semantic elements and check that labels are meaningful when pulled out of context.</p>\n<h3 id="low-vision"><a href="#low-vision" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Low Vision</h3>\n<p>Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas. These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.</p>\n<h3 id="motor"><a href="#motor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Motor</h3>\n<p>Users with poor motor control can use a range of devices to access contents. Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus. Users who rely on a mouse or touch need target areas that are large enough to be hit easily.</p>\n<h3 id="cognitive"><a href="#cognitive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cognitive</h3>\n<p>Users who have difficulty processing information benefit from well-written content. Information should clear, concise, and easy to scan. Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.</p>\n<h2 id="checklists"><a href="#checklists" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checklists</h2>\n<h3 id="design-and-development-guidelines"><a href="#design-and-development-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design and Development Guidelines</h3>\n<p>The following are guidelines that we strive to adopt:</p>\n<ul>\n<li>The <a href="https://a11yproject.com/checklist">A11Y Project Checklist</a> is a helpful checklist to start with if you’re new to accessibility.</li>\n<li>Our goal is to meet <a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&#x26;levels=aaa&#x26;technologies=smil%2Cpdf%2Cflash%2Csl">level AA in the Web Content Accessibility Guidelines</a>. While these guidelines can seem like a lot, the following sections capture some of these.</li>\n</ul>\n<h4 id="what-patternfly-designers-and-developers-should-address"><a href="#what-patternfly-designers-and-developers-should-address" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What PatternFly Designers and Developers Should Address</h4>\n<p>If you use PatternFly, or contribute to PatternFly as a designer or developer, these are the items that are expected to be covered in PatternFly:</p>\n<ul>\n<li>\n<p>Experience parity</p>\n<ul>\n<li>There should be parity between the screen reader contents and visibly rendered contents (refer to the <a href="https://www.w3.org/TR/wai-aria/#aria-hidden">first Note for aria-hidden</a>).</li>\n<li>There should be parity among all input types: touch, mouse, and keyboard. Don’t toggle states on hover. Don’t optimize the experience for one input type at the expense of another.</li>\n<li>There should be parity between hover and focus events. Any information that’s available on hover should be available on focus, too.</li>\n</ul>\n</li>\n<li>Semantic html structures are used to accurately communicate purpose and relationship of UI elements (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&#x26;showtechniques=131#qr-content-structure-separation-programmatic">WCAG 1.3.1</a>).  <em>[design, html, css]</em></li>\n<li>Color is not the only method of communication. Providing meaning through color is supplementary to providing meaning with text (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-without-color">WCAG 1.4.1</a>).  <em>[design, html, css]</em></li>\n<li>Colors used provide sufficient contrast (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-contrast">WCAG 1.4.3</a>).  <em>[css]</em></li>\n<li>Font sizes can scale and the contents are functional and readable when the content sizes are doubled (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-scale">WCAG 1.4.4</a>).  <em>[css]</em></li>\n<li>All functionality is keyboard accessible (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#keyboard-operation">WCAG 2.1.1 and 2.1.2</a>).  <em>[html]</em></li>\n<li>Order of elements in the HTML and in the layout follow a logical order (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-content-structure-separation-sequence">WCAG 1.3.2</a> and <a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-order">WCAG 2.4.3</a>). <em>[design, html, css]</em></li>\n<li>Elements with focus are clearly visible (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-visible">WCAG 2.4.7</a>). <em>[css]</em></li>\n<li>An accessible name is provided for all elements (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&#x26;showtechniques=412#qr-ensure-compat-rsv">WCAG 4.1.2</a>). <em>[design, html]</em></li>\n<li>The target area for clickable elements is large enough and not overlapping (<a href="https://developers.google.com/web/fundamentals/accessibility/accessible-styles#multi-device_responsive_design">Accessible Styles for Responsive Design, Google Web Fundamentals</a>). <em>[css]</em></li>\n</ul>\n<h4 id="what-product-developers-and-designers-should-address"><a href="#what-product-developers-and-designers-should-address" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Product Developers and Designers Should Address</h4>\n<ul>\n<li>Skip to Main links (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-skip">WCAG 2.4.1</a>)</li>\n<li>Page Titles (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-title">WCAG 2.4.2</a>)</li>\n<li>Links (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-refs">WCAG 2.4.4</a>) — If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.</li>\n<li>Landmarks (<a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html">ARIA11</a>) — Use landmark roles to communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements</li>\n<li>Headings (<a href="https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-headings">WCAG 2.4.10</a> and <a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html">H42</a>) — Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page.</li>\n<li>Contents — Should be meaningful, clear, and concise</li>\n</ul>\n<h3 id="testing"><a href="#testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h3>\n<p>To keep testing simple and easy to complete, we ask that contributors complete the following three types of tests to try to catch most of the accessibility issues that may be present:</p>\n<ul>\n<li>Test keyboard accessibility</li>\n<li>Disable styles to test the information architecture and presence of adequate text labels</li>\n<li>Test with any screen reader available in your operating system.</li>\n</ul>\n<h3 id="screen-reader-support"><a href="#screen-reader-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Screen Reader Support</h3>\n<p><em>Screen reader support is to be determined.</em></p>\n<h2 id="methods"><a href="#methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h2>\n<p>The <a href="https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents">WCAG 2.0 techniques</a>   provide methods on how to meet accessibility guidelines. Additionally, as we discover techniques for specific interaction patterns, we\'ll document them here so that we can be consistent in our approach.</p>',fields:{path:"/accessibility-guide",type:"page",contentType:"page"}}},pathContext:{pagePath:"/accessibility-guide",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---accessibility-guide-6dfcd1bc45d82e9ef511.js.map