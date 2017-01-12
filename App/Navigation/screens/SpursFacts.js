import React from 'react';
import SpursFacts from '../../Components/SpursFacts';

class SpursFactsScreen extends React.Component {
 static route = {
   navigationBar: {
     title: 'Spurs Facts',
   }
 }

 render() {
   return (
     <SpursFacts />
   );
 }
}

export default SpursFactsScreen;
