```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>No data found.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default MyComponent;
```