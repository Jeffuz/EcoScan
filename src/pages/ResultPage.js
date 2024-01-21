import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import db from '../firebaseTest'; 

const ResultPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const ansRef = ref(db, 'answers/test'); 
    get(ansRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        console.log(snapshot.val());
      } else {
        console.log("No Data Found");
      }
    });
  }, []);

  return (
    <div>
      <div>{data}</div>
    </div>
  );
}

export default ResultPage;

