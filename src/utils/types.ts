export interface UserType {
    name: string, 
    password: string;   
    favouriteCategory: string | null,       //They can have a favouriteCategory or no category (string | null)
    favouriteRecipes: string []            //They have a list of favouriteRecipes (string[])
}


export interface UserContextType {
  user: UserType | null;  
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}
