import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import notes from "./readme.md";

const stories = storiesOf('Card', module);
const storyOptions = {
    notes: notes,
    knobs: {
        timestamps: true,
        escapeHTML: false
    }
}

stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Slots', () => {
    const slotDefault = text('Default slot', '<p>I am the default slot</p>', "SLOTS");
    const slotStart = text('Start slot', '<p>I am the "start" slot</p>', "SLOTS");
    const slotEnd = text('End slot', '<p>I am the "end" slot</p>', "SLOTS");
  
    return `
        <peid-card>
            <div slot="start">${slotStart}</div>
            ${slotDefault}
            <div slot="end">${slotEnd}</div>
        </peid-card>
    `;
  }, storyOptions);