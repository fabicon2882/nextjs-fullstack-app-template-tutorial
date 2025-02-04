import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchResult, { ISearchResult } from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'utility/SearchResult',
  component: SearchResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchResult>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...mockSearchResultProps.base,
} as ISearchResult;
