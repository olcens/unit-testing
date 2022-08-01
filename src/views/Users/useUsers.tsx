import { useState, useEffect } from 'react';
import axios from 'axios';

export interface User {
  id: string;
  name: {
    first: string;
    last: string;
  }
  email: string;
  gender: string;
  location: {
    city: string;
    country: string;
  }
  phone: string;
  picture: {
    medium: string;
  },
}

interface UserResponse {
  results: User[];
}

export const useUsers = () => {
  const [fetchedUsers, setFetchedUsers] = useState<User[]>([]);
  const [isFetched, setFetched] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<UserResponse>('https://randomuser.me/api/?results=30');
      setFetchedUsers(response.data.results);
      setFetched(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users: fetchedUsers,
    isLoading: !isFetched
  };
};
