import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAzo7rwVGxajxahqU0XQsODedcbTyQqw7k',
  authDomain: 'taskmanagement-81112.firebaseapp.com',
  projectId: 'taskmanagement-81112',
  storageBucket: 'taskmanagement-81112.appspot.com',
  messagingSenderId: '609992968396',
  appId: '1:609992968396:web:ed8b0f71feea7586df5a69',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
