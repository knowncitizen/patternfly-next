import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import listUnorderedExampleRaw from '!raw!./list-unordered-example.hbs';
import listOrderedExampleRaw from '!raw!./list-ordered-example.hbs';
import listInlineExampleRaw from '!raw!./list-inline-example.hbs';
import ListUnorderedExample from './list-unordered-example.hbs';
import ListOrderedExample from './list-ordered-example.hbs';
import ListInlineExample from './list-inline-example.hbs';
import docs from '../docs/code.md';
import '../list.scss';

export const Docs = docs;

export default () => {
  const listUnorderedExample = ListUnorderedExample();
  const listOrderedExample = ListOrderedExample();
  const listInlineExample = ListInlineExample();
  const headingText = 'List';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Unordered List" handlebars={listUnorderedExampleRaw}>
        {listUnorderedExample}
      </Example>
      <Example heading="Ordered List" handlebars={listOrderedExampleRaw}>
        {listOrderedExample}
      </Example>
      <Example heading="List Inline" handlebars={listInlineExampleRaw}>
        {listInlineExample}
      </Example>
    </Documentation>
  );
};
