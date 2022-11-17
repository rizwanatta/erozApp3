import { FlatList, View, Text, Image } from "react-native";
import React, {useState} from 'react';
import axios from 'axios';

function Home() {

  const [profilesData,setProfilesData] = useState([]);
  
   axios.get('https://api.github.com/users').then(response=>{
          if(response){
            setProfilesData(response.data)
          } 
   })
  
  

  const _renderItem = ({ item }) => (
    <View style={{ margin: 10, padding: 10 }}>
      <Image
        source={{
          uri: item.avatar_url,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ marginVertical: 10 }}>
        <Text>{item.login}</Text>
        <Text>{item.rollNumber}</Text>
        <Text>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList data={profilesData} renderItem={_renderItem} />
    </View>
  );
}

export default Home;
