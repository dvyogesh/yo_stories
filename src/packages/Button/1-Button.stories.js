import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import {storiesOf} from '@storybook/react'
import Button from './Button'
const stories = storiesOf('Button', module);

stories.add('Deault',()=>{
  return(
    <Button onClick={action('clicked')}>
        <p> Click </p>
    </Button>
  )
})
// export default {
//   title: 'Button',
//   component: Button,
// };

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );


