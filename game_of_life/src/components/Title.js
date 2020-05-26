import React from 'react';
import {Header} from 'semantic-ui-react';

export default () => (
 <Header as='h2' icon inverted textAlign='center' className='title'>
  Game of Life
   <Header.Subheader>
    Cellular automation invented by John Conway
   </Header.Subheader>
 </Header>
);