import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View,  } from 'react-native';
import Axios from 'axios';
import MyList from './components/MyList';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);




  useEffect(() => {

      getData()
      .then(res =>  setData(res))
      .catch((error) => console.error(error))
      .finally(() => 
      {
      setLoading(false)
     
      }

      )
  }, []);


  async function getData() {
    try {
       let res = await Axios({
            url: 'https://jsonplaceholder.typicode.com/photos',
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
     
       
        return res.data
    }
    catch (err) {
        console.error(err);
    }
}



return (
<View style={{ flex: 1, padding: 20 }}>
  {isLoading ? <ActivityIndicator /> : (
  <MyList data={data}></MyList>
  )
  }
 
</View>
);
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
  },
  
});
