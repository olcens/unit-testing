export interface User {
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

export interface UserApiResponse {
  results: User[];
}
