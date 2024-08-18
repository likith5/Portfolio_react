import React, { useState, useEffect } from 'react';
import { db } from "../config/firebase_config.js";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Connect() {
  const [countLike, setCountLike] = useState(0);

  const likeCollection = collection(db, 'like_count');

  useEffect(() => {
    const updateLikeCount = async () => {
      try {
        // Fetch the documents in the 'like_count' collection
        const data = await getDocs(likeCollection);
        
        if (!data.empty) {
          // Assuming there's only one document in the 'like_count' collection
          const docRef = doc(db, 'like_count', data.docs[0].id);
          const docData = data.docs[0].data();
          
          // Increment the like count
          const newLikeCount = (docData.like || 0) + 1;
          
          // Update the document with the new like count
          await updateDoc(docRef, { like: newLikeCount });
          
          // Update local state
          setCountLike(newLikeCount);
        } else {
          console.error('No documents found in like_count collection.');
        }
      } catch (err) {
        console.log('Error updating like count:', err);
      }
    };

    updateLikeCount();
  }, []);

  return (
    <div className='connect'>
      <p>Get in Touch</p>
      <div>
        <a href="https://github.com/likith5">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/likith-gowda-51ba6a209/">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
      </div>
      <div>
        <a href="mailto:likithgowda1265@gmail.com">
          <i className="fa-regular fa-envelope fa-2xl"></i>
        </a>
      </div>
      <div className='visitors'>
        <p>Visitiors</p>
        <p>{countLike}</p>
      </div>
    </div>
  );
}
